'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return {
      success: false,
      error: 'Email service is not configured. Please contact us directly at tech@onemarketc.com',
    };
  }

  // Prepare email content
  const timestamp = new Date().toISOString();
  const emailHtml = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    ${service ? `<p><strong>Service of Interest:</strong> ${service}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${String(message).replace(/\n/g, '<br>')}</p>
    <hr>
    <p><strong>Timestamp:</strong> ${timestamp}</p>
  `;

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
  `;

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

    console.log('Email sent successfully:', data);

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
