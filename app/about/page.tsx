import { MainLayout } from "@/components/layouts";

export const metadata = {
  title: "About Us | John Online Services",
  description: "Learn more about John Online Services & Applications",
};

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="py-20 bg-white dark:bg-gray-900 pt-24">
        <div className="container">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold mb-4">About JOSA</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Revolutionizing digital services in Tanzania with enterprise-grade solutions
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            <div className="p-8 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300">
                To provide world-class digital services and applications that empower individuals and businesses across Tanzania to achieve their goals efficiently and securely.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-300">
                To be Africa's leading digital services marketplace, trusted by millions for quality, reliability, and innovation.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Quality",
                  description: "Delivering excellence in every service",
                  icon: "✨",
                },
                {
                  title: "Integrity",
                  description: "Honest and transparent dealings",
                  icon: "🤝",
                },
                {
                  title: "Innovation",
                  description: "Continuously improving our services",
                  icon: "💡",
                },
                {
                  title: "Trust",
                  description: "Your security and privacy matter",
                  icon: "🔐",
                },
              ].map((value, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  name: "John Doe",
                  role: "Founder & CEO",
                  bio: "Tech entrepreneur with 15+ years of experience",
                },
                {
                  name: "Jane Smith",
                  role: "CTO",
                  bio: "Full-stack developer and system architect",
                },
                {
                  name: "Ahmed Hassan",
                  role: "COO",
                  bio: "Operations expert ensuring quality delivery",
                },
              ].map((member, i) => (
                <div
                  key={i}
                  className="text-center p-6 rounded-lg border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="max-w-2xl mx-auto space-y-8">
              {[
                { year: "2020", title: "Founded", desc: "Started with a vision to transform digital services" },
                { year: "2021", title: "First 1,000 Customers", desc: "Rapid growth and expansion of services" },
                { year: "2022", title: "Major Milestone", desc: "Reached 10,000 satisfied customers" },
                { year: "2023", title: "Enterprise Launch", desc: "Launched enterprise solutions and advanced features" },
              ].map((item, i) => (
                <div key={i} className="flex gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold mx-auto">
                      {i + 1}
                    </div>
                  </div>
                  <div className="pb-8 border-l-2 border-gray-300 dark:border-gray-700 pl-8">
                    <p className="text-primary-600 font-bold">{item.year}</p>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
