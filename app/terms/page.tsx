import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for One Tech - Legal terms and conditions for using our services.',
};

export default function TermsPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Container size="md">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: December 30, 2025
          </p>
        </Container>
      </Section>

      <Section className="bg-white dark:bg-gray-900">
        <Container size="md">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by One Tech, you agree to be bound by these 
              Terms of Service. If you disagree with any part of these terms, you may not access our 
              services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              One Tech provides technology consulting, software development, digital transformation, 
              technical training, and related services. We reserve the right to modify, suspend, or 
              discontinue any aspect of our services at any time.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services in compliance with all applicable laws and regulations</li>
              <li>Not use our services for any unlawful or unauthorized purpose</li>
              <li>Not interfere with or disrupt the integrity or performance of our services</li>
            </ul>

            <h2>4. Intellectual Property Rights</h2>
            <p>
              All content, features, and functionality of our services, including but not limited to 
              text, graphics, logos, icons, images, and software, are the exclusive property of One Tech 
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2>5. Client Projects and Deliverables</h2>
            <p>For custom software development and consulting projects:</p>
            <ul>
              <li>Project scope, timeline, and deliverables will be defined in a separate agreement</li>
              <li>Payment terms will be specified in the project contract</li>
              <li>Intellectual property rights will be transferred upon full payment, unless otherwise agreed</li>
              <li>We retain the right to use non-confidential aspects of projects in our portfolio</li>
            </ul>

            <h2>6. Training Services</h2>
            <p>For our training programs:</p>
            <ul>
              <li>Registration and payment are required before accessing course materials</li>
              <li>Attendance and participation requirements will be communicated for each program</li>
              <li>Certificates are issued upon successful completion of program requirements</li>
              <li>Refund policies will be specified at the time of registration</li>
            </ul>

            <h2>7. Confidentiality</h2>
            <p>
              We respect the confidentiality of our clients' information and projects. Both parties agree 
              to maintain confidentiality of proprietary information shared during the course of our 
              engagement, as detailed in non-disclosure agreements when applicable.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, One Tech shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use or inability 
              to use our services.
            </p>

            <h2>9. Warranties and Disclaimers</h2>
            <p>
              Our services are provided "as is" and "as available" without warranties of any kind, either 
              express or implied. We do not warrant that our services will be uninterrupted, timely, 
              secure, or error-free.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless One Tech and its affiliates, officers, agents, 
              and employees from any claim, demand, or damage, including reasonable attorneys' fees, 
              arising out of your use of our services or violation of these Terms.
            </p>

            <h2>11. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our services immediately, 
              without prior notice or liability, for any reason, including breach of these Terms.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Cameroon, 
              without regard to its conflict of law provisions.
            </p>

            <h2>13. Dispute Resolution</h2>
            <p>
              Any disputes arising out of or relating to these Terms or our services shall be resolved 
              through good faith negotiation. If negotiation fails, disputes shall be submitted to 
              binding arbitration in accordance with the laws of Cameroon.
            </p>

            <h2>14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any 
              material changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>

            <h2>15. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision 
              shall be limited or eliminated to the minimum extent necessary, and the remaining provisions 
              shall remain in full force and effect.
            </p>

            <h2>16. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and One Tech regarding the use of 
              our services and supersede all prior agreements and understandings.
            </p>

            <h2>17. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <ul>
              <li>Email: hello@onetech.cm</li>
              <li>Phone: +237 XXX XXX XXX</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
