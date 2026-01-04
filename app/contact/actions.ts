'use server';

import { Resend } from 'resend';

// Cache development mode flag to avoid repeated environment variable access
const isDevelopment = process.env.NODE_ENV === 'development';

// Helper function to safely extract error message from unknown error type
function getErrorMessage(error: unknown): string {
  if (typeof error === 'object' && error !== null && 'message' in error) {
    return String(error.message);
  }
  return 'Unknown error';
}

// Helper function to safely log error properties
function logErrorDetails(error: unknown, prefix: string): void {
  console.error(`${prefix} error occurred`);
  
  if (typeof error === 'object' && error !== null) {
    if ('name' in error) {
      console.error(`${prefix} Error type:`, error.name);
    }
    if ('message' in error) {
      console.error(`${prefix} Error message:`, error.message);
    }
    
    // Only format error details in development to avoid unnecessary processing
    if (isDevelopment) {
      try {
        console.error(`${prefix} Full error details:`, JSON.stringify(error, null, 2));
      } catch {
        // If JSON.stringify fails (e.g., circular references), log the error object directly
        console.error(`${prefix} Full error details:`, error);
      }
    }
  }
}

export async function submitContactForm(formData: FormData) {
  // Simulate form processing
  const name = formData.get('name');
  const email = formData.get('email');
  const company = formData.get('company');
  const service = formData.get('service');
  const message = formData.get('message');

  // Basic validation
  if (!name || !email || !message) {
    return {
      success: false,
      error: 'Please fill in all required fields.',
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.toString())) {
    return {
      success: false,
      error: 'Please enter a valid email address.',
    };
  }

  // Check if API key is configured
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[Contact Form] RESEND_API_KEY environment variable is not configured');
    console.error('[Contact Form] Please set RESEND_API_KEY in your environment variables');
    return {
      success: false,
      error: 'Email service is not configured. Please contact us directly at tech@onemarketc.com',
    };
  }

  // Initialize Resend with API key (done at runtime to ensure env var is available)
  const resend = new Resend(apiKey);

  // Helper function to escape HTML to prevent XSS
  const escapeHtml = (text: string) => {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  };

  // Prepare email content
  const timestamp = new Date().toISOString();
  const escapedName = escapeHtml(String(name));
  const escapedEmail = escapeHtml(String(email));
  const escapedCompany = company ? escapeHtml(String(company)) : null;
  const escapedService = service ? escapeHtml(String(service)) : null;
  const escapedMessage = escapeHtml(String(message)).replace(/\n/g, '<br>');

  const emailHtml = `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${escapedName}</p>
<p><strong>Email:</strong> ${escapedEmail}</p>
${escapedCompany ? `<p><strong>Company:</strong> ${escapedCompany}</p>` : ''}
${escapedService ? `<p><strong>Service of Interest:</strong> ${escapedService}</p>` : ''}
<p><strong>Message:</strong></p>
<p>${escapedMessage}</p>
<hr>
<p><strong>Timestamp:</strong> ${timestamp}</p>
`.trim();

  const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${service ? `Service of Interest: ${service}` : ''}

Message:
${message}

---
Timestamp: ${timestamp}
`.trim();

  try {
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'OneTech Contact Form <onboarding@resend.dev>',
      to: ['tech@onemarketc.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      text: emailText,
      replyTo: email.toString(),
    });

    if (error) {
      logErrorDetails(error, '[Contact Form]');
      
      // Provide more specific error message in development
      const errorDetails = isDevelopment ? ` (${getErrorMessage(error)})` : '';
      
      return {
        success: false,
        error: `Failed to send message${errorDetails}. Please try again or contact us directly at tech@onemarketc.com`,
      };
    }

    console.log('[Contact Form] Email sent successfully');
    console.log('[Contact Form] Email ID:', data?.id);

    return {
      success: true,
      message: 'Thank you for contacting us! We will get back to you within 24 hours.',
    };
  } catch (error) {
    console.error('[Contact Form] Unexpected error occurred while sending email');
    console.error('[Contact Form] Error type:', error instanceof Error ? error.constructor.name : typeof error);
    console.error('[Contact Form] Error message:', error instanceof Error ? error.message : String(error));
    console.error('[Contact Form] Stack trace:', error instanceof Error ? error.stack : 'N/A');
    
    // Provide more specific error message in development
    const errorDetails = isDevelopment && error instanceof Error ? ` (${error.message})` : '';
    
    return {
      success: false,
      error: `An unexpected error occurred${errorDetails}. Please try again later or contact us directly at tech@onemarketc.com`,
    };
  }
}
