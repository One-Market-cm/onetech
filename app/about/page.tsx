import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about One Tech, the technology and development arm of One Market, driving digital transformation across Africa.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex problems.',
      icon: '💡',
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering high-quality work that exceeds expectations.',
      icon: '🏆',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership with our clients.',
      icon: '🤝',
    },
    {
      title: 'Impact',
      description: 'We measure our success by the positive impact we create for our clients and communities.',
      icon: '🎯',
    },
  ];

  const team = [
    {
      role: 'Leadership',
      description: 'Experienced executives guiding our strategic vision and growth.',
    },
    {
      role: 'Engineering',
      description: 'Talented developers building innovative solutions with modern technologies.',
    },
    {
      role: 'Design',
      description: 'Creative designers crafting beautiful and intuitive user experiences.',
    },
    {
      role: 'Training',
      description: 'Expert instructors empowering the next generation of tech talent.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              About One Tech
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              The technology and development arm of One Market, driving digital transformation 
              and innovation across Africa.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Our Mission"
              subtitle="Empowering African businesses with world-class technology solutions"
              centered
            />
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                One Tech was founded with a clear mission: to bridge the technology gap and drive digital 
                transformation across Africa. As the technology arm of One Market, we leverage our deep 
                understanding of the African market to deliver solutions that are both globally competitive 
                and locally relevant.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                We believe that technology has the power to transform businesses, create opportunities, 
                and drive economic growth. Through our comprehensive services in software development, 
                digital transformation, and technical training, we're helping organizations across the 
                continent harness the power of technology to achieve their goals.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Our team of experienced professionals brings together expertise in cutting-edge technologies, 
                best practices, and a deep commitment to delivering exceptional results. We don't just build 
                software - we build partnerships that drive long-term success.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-gray-50 dark:bg-gray-950">
        <Container>
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide everything we do"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <SectionHeader
            title="Our Team"
            subtitle="Talented professionals passionate about technology and innovation"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((item) => (
              <div key={item.role} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {item.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-primary-600 dark:bg-primary-700 text-white">
        <Container>
          <SectionHeader
            title="Our Impact"
            subtitle="Making a difference across Africa"
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-primary-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-primary-100">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-primary-100">Countries Served</div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
