import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

// This would typically come from a database or CMS
const caseStudies = {
  'ecommerce-platform': {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    client: 'Major African Retailer',
    duration: '6 months',
    team: '8 people',
    description: 'A comprehensive e-commerce platform designed to serve thousands of users across Africa with real-time inventory management and seamless payment integration.',
    challenge: 'The client needed a scalable e-commerce solution that could handle high traffic volumes, integrate with multiple payment providers, and provide real-time inventory tracking across multiple warehouses.',
    solution: 'We built a modern web application using Next.js for optimal performance and SEO, integrated with a robust Node.js backend and PostgreSQL database. The platform features real-time inventory synchronization, multi-currency support, and seamless integration with local payment gateways.',
    results: [
      '300% increase in online sales within 6 months',
      '99.9% uptime since launch',
      'Reduced cart abandonment by 45%',
      'Serving 50,000+ active users',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe', 'Redis'],
    image: '🛒',
  },
  'mobile-banking-app': {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    client: 'Leading Financial Institution',
    duration: '8 months',
    team: '10 people',
    description: 'A secure mobile banking application with biometric authentication, real-time transaction processing, and comprehensive account management features.',
    challenge: 'The bank needed a mobile solution that prioritized security while providing a seamless user experience for various banking operations including transfers, bill payments, and account management.',
    solution: 'We developed a cross-platform mobile application using React Native with advanced security features including biometric authentication, end-to-end encryption, and fraud detection. The app integrates with the bank\'s core banking system via secure APIs.',
    results: [
      '500,000+ downloads in first year',
      '4.8-star average rating',
      '70% reduction in branch visits',
      'Zero security breaches',
    ],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'AWS', 'Biometric Auth', 'Encryption'],
    image: '💳',
  },
  'supply-chain-system': {
    title: 'Supply Chain Management System',
    category: 'Enterprise Solution',
    client: 'International Logistics Company',
    duration: '10 months',
    team: '12 people',
    description: 'An end-to-end supply chain management system that improved logistics efficiency by 40% through real-time tracking and automated workflows.',
    challenge: 'The company struggled with manual processes, lack of real-time visibility, and inefficient coordination between warehouses, transportation, and delivery teams.',
    solution: 'We designed and implemented a comprehensive supply chain management platform with real-time tracking, automated routing, inventory optimization, and analytics dashboards. The system integrates with IoT devices for real-time location tracking.',
    results: [
      '40% improvement in logistics efficiency',
      '25% reduction in operational costs',
      'Real-time tracking across 100+ vehicles',
      '99% on-time delivery rate',
    ],
    technologies: ['React', 'Python', 'MongoDB', 'Docker', 'IoT Integration', 'Google Maps API'],
    image: '📦',
  },
  'learning-platform': {
    title: 'Online Learning Platform',
    category: 'Education Technology',
    client: 'Educational Institution',
    duration: '7 months',
    team: '9 people',
    description: 'A comprehensive learning management system with video streaming, interactive assessments, and progress tracking for thousands of students.',
    challenge: 'The institution needed a scalable platform to deliver online courses, manage student enrollment, facilitate instructor-student interaction, and track learning outcomes.',
    solution: 'We built a full-featured LMS with video streaming capabilities, interactive quizzes, discussion forums, and detailed analytics. The platform supports multiple course formats and integrates with payment systems for course purchases.',
    results: [
      '10,000+ active students',
      '500+ courses published',
      '92% course completion rate',
      '4.7-star average course rating',
    ],
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Stripe', 'Video Streaming', 'Analytics'],
    image: '📚',
  },
  'healthcare-portal': {
    title: 'Healthcare Patient Portal',
    category: 'Healthcare',
    client: 'Healthcare Provider Network',
    duration: '9 months',
    team: '11 people',
    description: 'A patient management portal with appointment scheduling, telemedicine capabilities, and secure medical records management.',
    challenge: 'The healthcare network needed to digitize patient records, enable remote consultations, and streamline appointment scheduling across multiple facilities.',
    solution: 'We developed a HIPAA-compliant patient portal with telemedicine features using WebRTC, integrated appointment scheduling, prescription management, and secure medical records access. The system ensures data privacy and regulatory compliance.',
    results: [
      '30,000+ patients registered',
      '5,000+ telemedicine consultations monthly',
      '60% reduction in no-shows',
      'Full HIPAA compliance',
    ],
    technologies: ['React', 'Node.js', 'MySQL', 'WebRTC', 'HIPAA Compliance', 'Encryption'],
    image: '🏥',
  },
  'fintech-dashboard': {
    title: 'FinTech Analytics Dashboard',
    category: 'Financial Technology',
    client: 'Financial Services Company',
    duration: '5 months',
    team: '7 people',
    description: 'A real-time analytics dashboard for financial data visualization, reporting, and business intelligence.',
    challenge: 'The company needed to consolidate data from multiple sources and provide real-time insights to stakeholders through intuitive visualizations.',
    solution: 'We created a powerful analytics dashboard using React and D3.js for interactive data visualizations, backed by a Python data processing pipeline and Redis for real-time data caching. The dashboard provides customizable reports and alerts.',
    results: [
      'Real-time data from 20+ sources',
      '80% faster report generation',
      'Improved decision-making speed',
      '100% data accuracy',
    ],
    technologies: ['React', 'D3.js', 'Python', 'Redis', 'PostgreSQL', 'Data Analytics'],
    image: '📊',
  },
};

type CaseStudyParams = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CaseStudyParams): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug as keyof typeof caseStudies];
  
  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: study.title,
    description: study.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyParams) {
  const { slug } = await params;
  const study = caseStudies[slug as keyof typeof caseStudies];

  if (!study) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link href="/work" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Work
            </Link>
            <div className="text-6xl mb-6 text-center">{study.image}</div>
            <div className="text-center">
              <div className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-2">
                {study.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {study.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {study.description}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Details */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Client</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">{study.client}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Duration</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">{study.duration}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Team Size</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">{study.team}</div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">The Challenge</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {study.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Solution</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {study.solution}
              </p>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Results & Impact</h2>
              <ul className="space-y-3">
                {study.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-gray-600 dark:text-gray-400">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600 dark:bg-primary-700 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Let's discuss how we can help you achieve similar results.
            </p>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 border-white"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
