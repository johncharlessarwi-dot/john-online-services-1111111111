import { MainLayout } from "@/components/layouts";
import {
  HeroSection,
  FeaturesSection,
  StatsSection,
  CTASection,
} from "@/components/sections";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import Link from "next/link";

export const metadata = {
  title: "Home | John Online Services",
  description:
    "Enterprise-grade digital services marketplace in Tanzania",
};

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />

      {/* Services Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive solutions across multiple categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/services?category=${category.slug}`}
              >
                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 cursor-pointer h-full hover:border-primary-500">
                  <div
                    className={`inline-block p-3 rounded-lg bg-gradient-to-br ${category.color} text-white mb-4`}
                  >
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-500">
                    {category.services.slice(0, 3).map((service, i) => (
                      <li key={i}>• {service}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      <FeaturesSection />

      <StatsSection />

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Simple 4-step process to get your service completed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Choose Service",
                description: "Browse and select from our wide range of services",
              },
              {
                step: 2,
                title: "Upload Documents",
                description:
                  "Submit required files securely",
              },
              {
                step: 3,
                title: "Make Payment",
                description: "Pay via PeterPay or bank transfer",
              },
              {
                step: 4,
                title: "Get Results",
                description: "Receive completed work with download options",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
                {item.step < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-2xl text-gray-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">What Customers Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "John Doe",
                role: "Student",
                content:
                  "JOSA helped me with my university applications. Excellent service!",
                rating: 5,
              },
              {
                name: "Jane Smith",
                role: "Business Owner",
                content:
                  "Quick and professional BRELA registration assistance. Highly recommended!",
                rating: 5,
              },
              {
                name: "Ahmed Hassan",
                role: "Entrepreneur",
                content:
                  "Best website development service I've used. Great quality and support.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
}
