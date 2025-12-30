import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';

export default function Home() {
  const services = [
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs using modern technologies and best practices.',
      icon: '💻',
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge digital solutions that drive growth and efficiency.',
      icon: '🚀',
    },
    {
      title: 'Technical Training',
      description: 'Comprehensive training programs to upskill your team in the latest technologies and methodologies.',
      icon: '📚',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to modernize your technology stack.',
      icon: '☁️',
    },
  ];

  const stats = [
    { label: 'Projects Delivered', value: '100+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Team Members', value: '25+' },
    { label: 'Countries Served', value: '10+' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Building the Future of{' '}
              <span className="text-primary-600 dark:text-primary-400">Technology</span>{' '}
              in Africa
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              One Tech delivers cutting-edge software solutions, training, and digital transformation 
              services that empower businesses across the continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg">View Our Work</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section className="bg-gray-50 dark:bg-gray-950">
        <Container>
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive technology solutions designed to drive your business forward"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} hover>
                <CardHeader>
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="primary" size="lg">Explore All Services</Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Why Choose One Tech?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Innovation First
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We leverage the latest technologies and methodologies to deliver cutting-edge solutions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Client-Focused
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your success is our priority. We work closely with you to understand and meet your unique needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      African Excellence
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Based in Africa, serving the world. We understand the unique challenges and opportunities of the African market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="mb-6">
                Let's discuss how One Tech can help you achieve your technology goals and drive digital transformation.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="bg-white text-primary-600 hover:bg-gray-100 border-white">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600 dark:bg-primary-700 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Partner with One Tech to transform your ideas into reality with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-gray-100 border-white"
                >
                  Start a Project
                </Button>
              </Link>
              <Link href="/training">
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="text-white border-2 border-white hover:bg-primary-700"
                >
                  Explore Training
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
