import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for One Tech - How we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Container size="md">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: December 30, 2025
          </p>
        </Container>
      </Section>

      <Section className="bg-white dark:bg-gray-900">
        <Container size="md">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to One Tech ("we," "our," or "us"). We are committed to protecting your personal 
              information and your right to privacy. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Company name and professional information</li>
              <li>Messages and communications you send to us</li>
              <li>Information you provide when using our services</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>

            <h2>4. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information only in the following circumstances:
            </p>
            <ul>
              <li>With your consent</li>
              <li>With service providers who assist us in operating our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required or permitted 
              by law.
            </p>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and 
              hold certain information. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices or content of these third-party sites.
            </p>

            <h2>10. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly 
              collect personal information from children under 18.
            </p>

            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: tech@onemarketc.com</li>
              <li>Phone: +237 654 160 856</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
