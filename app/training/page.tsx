import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Training',
  description: 'Professional technical training programs to upskill your team in modern technologies and best practices.',
};

export default function TrainingPage() {
  const programs = [
    {
      title: 'Web Development Bootcamp',
      duration: '12 weeks',
      level: 'Beginner to Intermediate',
      description: 'Comprehensive full-stack web development training covering HTML, CSS, JavaScript, React, Node.js, and databases.',
      topics: ['HTML/CSS', 'JavaScript ES6+', 'React & Next.js', 'Node.js & Express', 'MongoDB & SQL', 'Git & GitHub'],
    },
    {
      title: 'Mobile App Development',
      duration: '10 weeks',
      level: 'Intermediate',
      description: 'Learn to build native and cross-platform mobile applications using React Native and modern development tools.',
      topics: ['React Native', 'Mobile UI/UX', 'API Integration', 'State Management', 'App Deployment', 'Performance Optimization'],
    },
    /*{
      title: 'Cloud Architecture',
      duration: '8 weeks',
      level: 'Advanced',
      description: 'Master cloud infrastructure and DevOps practices with hands-on experience in AWS, Azure, and containerization.',
      topics: ['AWS/Azure Fundamentals', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code', 'Cloud Security', 'Monitoring & Logging'],
    },
    {
      title: 'Data Science & Analytics',
      duration: '14 weeks',
      level: 'Beginner to Intermediate',
      description: 'Dive into data analysis, visualization, and machine learning with Python and industry-standard tools.',
      topics: ['Python Programming', 'Data Analysis with Pandas', 'Data Visualization', 'Machine Learning Basics', 'SQL for Analytics', 'Statistical Analysis'],
    },*/
    {
      title: 'UI/UX Design',
      duration: '8 weeks',
      level: 'Beginner to Intermediate',
      description: 'Learn user-centered design principles and create beautiful, functional interfaces using modern design tools.',
      topics: ['Design Thinking', 'Figma & Design Tools', 'User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
    },
    /*{
      title: 'DevOps Engineering',
      duration: '10 weeks',
      level: 'Intermediate to Advanced',
      description: 'Build expertise in DevOps practices, automation, and continuous delivery for modern software development.',
      topics: ['Git & Version Control', 'CI/CD with Jenkins/GitHub Actions', 'Docker & Kubernetes', 'Terraform', 'Monitoring with Prometheus', 'Security Best Practices'],
    },*/
  ];

  const benefits = [
    {
      icon: '👨‍🏫',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with real-world experience.',
    },
    {
      icon: '💼',
      title: 'Hands-on Projects',
      description: 'Build real projects to strengthen your portfolio.',
    },
    {
      icon: '📜',
      title: 'Certificate of Completion',
      description: 'Receive a professional certificate upon successful completion.',
    },
    {
      icon: '🤝',
      title: 'Career Support',
      description: 'Get guidance on job placement and career advancement.',
    },
    {
      icon: '⚡',
      title: 'Flexible Schedule',
      description: 'Choose from full-time, part-time, and weekend options.',
    },
    {
      icon: '💻',
      title: 'Online & In-Person',
      description: 'Access training both remotely and at our training centers.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Technical Training Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              Empower your team with cutting-edge technical skills through our comprehensive 
              training programs designed for the modern workplace.
            </p>
          </div>
        </Container>
      </Section>

      {/* Programs Section */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <SectionHeader
            title="Our Training Programs"
            subtitle="Choose from a wide range of courses designed to meet industry demands"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.title} hover>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                  <div className="flex gap-2 mt-2 mb-3">
                    <span className="text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full">
                      {program.duration}
                    </span>
                    <span className="text-sm bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 px-3 py-1 rounded-full">
                      {program.level}
                    </span>
                  </div>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Topics Covered:</h4>
                  <ul className="space-y-1">
                    {program.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary-600 dark:text-primary-400">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-gray-50 dark:bg-gray-950">
        <Container>
          <SectionHeader
            title="Why Train With Us"
            subtitle="We provide more than just courses - we build careers"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
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
              Start Your Learning Journey Today
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Enroll in our training programs and take the next step in your tech career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-gray-100 border-white"
                >
                  Enroll Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="text-white border-2 border-white hover:bg-primary-700"
                >
                  Request Information
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
