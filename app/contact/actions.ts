'use server';

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

  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real application, you would:
  // 1. Save to database
  // 2. Send email notification
  // 3. Integrate with CRM
  // For now, we'll just log and return success
  console.log('Contact form submission:', {
    name,
    email,
    company,
    service,
    message,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message: 'Thank you for contacting us! We will get back to you within 24 hours.',
  };
}
