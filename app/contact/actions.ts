'use server';

import { Resend } from 'resend';

// Define the response type for type safety
export type ContactFormResponse = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function submitContactForm(formData: FormData): Promise<ContactFormResponse> {
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
    console.error('RESEND_API_KEY is not configured');
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
      console.error('Error sending email:', error);
      return {
        success: false,
        error: 'Failed to send message. Please try again or contact us directly at tech@onemarketc.com',
      };
    }

    console.log('Email sent successfully with ID:', data?.id);

    // Return success response immediately
    return {
      success: true,
      message: 'Thank you for contacting us! We will get back to you within 24 hours.',
    };
  } catch (error) {
    console.error('Unexpected error sending email:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later or contact us directly at tech@onemarketc.com',
    };
  }
}
