import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with One Tech to discuss your project, training needs, or partnership opportunities.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: 'hello@onetech.cm',
      link: 'mailto:hello@onetech.cm',
    },
    {
      icon: '📱',
      title: 'Phone',
      details: '+237 654 160 856',
      link: 'tel:+237654160856',
    },
    {
      icon: '📍',
      title: 'Location',
      details: 'Cameroon, Douala',
      link: null,
    },
  ];

  const offices = [
    {
      city: 'Douala',
      address: 'Makepe',
      country: 'Cameroon',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              Have a project in mind or want to learn more about our services? 
              We'd love to hear from you.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.title}>
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Our Offices</h3>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.city}>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {office.city}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {office.address}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {office.country}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* Response Time Section */}
      <Section className="bg-gray-50 dark:bg-gray-950">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Quick Response Time
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              We typically respond to all inquiries within 24 hours during business days. 
              For urgent matters, please call us directly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  4 Hours
                </div>
                <div className="text-gray-600 dark:text-gray-400">Average Response Time</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <div className="text-3xl mb-2">🌍</div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  3+ Countries
                </div>
                <div className="text-gray-600 dark:text-gray-400">We Serve</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <div className="text-3xl mb-2">💬</div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  3 Languages
                </div>
                <div className="text-gray-600 dark:text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
