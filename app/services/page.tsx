import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive technology services including software development, digital transformation, cloud solutions, and technical training.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'End-to-end software development services tailored to your business needs.',
      features: [
        'Web Application Development',
        'Mobile App Development',
        'API Development & Integration',
        'Database Design & Optimization',
        'Legacy System Modernization',
      ],
      icon: '💻',
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business with modern digital solutions and processes.',
      features: [
        'Business Process Automation',
        'Digital Strategy Consulting',
        'Enterprise Architecture',
        'Technology Roadmap Planning',
        'Change Management Support',
      ],
      icon: '🚀',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your applications.',
      features: [
        'Cloud Migration Services',
        'AWS, Azure & GCP Expertise',
        'DevOps & CI/CD Pipelines',
        'Infrastructure as Code',
        'Cloud Security & Compliance',
      ],
      icon: '☁️',
    },
    {
      title: 'Technical Training',
      description: 'Comprehensive training programs to upskill your team.',
      features: [
        'Corporate Training Programs',
        'Individual Skill Development',
        'Certification Preparation',
        'Hands-on Workshops',
        'Customized Curriculum',
      ],
      icon: '📚',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user experiences that delight your customers.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Visual Design',
        'Design Systems',
        'Accessibility Compliance',
      ],
      icon: '🎨',
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive testing services to ensure software quality and reliability.',
      features: [
        'Automated Testing',
        'Manual QA Testing',
        'Performance Testing',
        'Security Testing',
        'Test Strategy Development',
      ],
      icon: '✅',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, challenges, and requirements.',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a detailed roadmap with milestones, timelines, and deliverables.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our team builds your solution using agile methodologies and best practices.',
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              Comprehensive technology solutions designed to drive your business forward 
              and achieve digital excellence.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} hover>
                <CardHeader>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="bg-gray-50 dark:bg-gray-950">
        <Container>
          <SectionHeader
            title="Our Process"
            subtitle="A proven methodology that ensures project success from start to finish"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600 dark:bg-primary-700 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 border-white"
              >
                Contact Us Today
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
