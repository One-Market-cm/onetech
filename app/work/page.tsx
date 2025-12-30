import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Explore our portfolio of successful projects and client success stories across various industries.',
};

export default function WorkPage() {
  const projects = [
    {
      id: 'ecommerce-platform',
      title: 'One Market Mobile App',
      category: 'Mobile Development',
      description: 'A scalable e-commerce platform serving users across Africa with real-time inventory management.',
      image: '🛒',
      tags: ['React Native', 'Typescript', 'PostgreSQL', 'Django'],
    },
    {
      id: 'mobile-banking-app',
      title: 'One Market Website',
      category: 'Web Development',
      description: 'Website for One Market, which is an African e-commerce platform',
      image: '🌐',
      tags: ['Node.js', 'TypeScript', 'Email Intergration', 'Security'],
    },
    {
      id: 'supply-chain-system',
      title: 'Cargo Link Mobile App',
      category: 'Mobile Development',
      description: 'End-to-end supply chain management system improving logistics efficiency by 40% across Africa and China.',
      image: '📦',
      tags: ['React', 'Python', 'MongoDB', 'Docker'],
    },
    {
      id: 'exchange-platform',
      title: 'Tradepoint Exchange Website',
      category: 'Web Development',
      description: 'Website for a fantasy football stocks trading app.',
      image: '📈',
      tags: ['Next.js', 'UI/UX', 'Design', 'Typescript'],
    },
    {
      id: 'exchnage-platform-ui',
      title: 'TradePoint Mobile App UI',
      category: 'UI/UX Design',
      description: 'UI for the mobile app of a fantasy football stocks trading app.',
      image: '📱',
      tags: ['Figma', 'Balsamique', 'Design', 'UI/UX'],
    },
    /*{
      id: 'fintech-dashboard',
      title: 'FinTech Analytics Dashboard',
      category: 'Financial Technology',
      description: 'Real-time analytics dashboard for financial data visualization and reporting.',
      image: '📊',
      tags: ['React', 'D3.js', 'Python', 'Redis'],
    },*/
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Enterprise Solution', 'Education Technology', 'Healthcare', 'UIUX Design'];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              Explore our portfolio of successful projects and see how we've helped businesses 
              across Africa achieve their digital transformation goals.
            </p>
          </div>
        </Container>
      </Section>

      {/* Projects Section */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <SectionHeader
            title="Featured Projects"
            subtitle="Case studies showcasing our expertise and impact"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/work/${project.id}`}>
                <Card hover className="h-full cursor-pointer">
                  <CardHeader>
                    <div className="text-6xl mb-4 text-center">{project.image}</div>
                    <div className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      {project.category}
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-gray-50 dark:bg-gray-950">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                100+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                95%
              </div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                10+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Countries Served</div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
