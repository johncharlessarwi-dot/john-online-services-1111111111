"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl dark:bg-primary-900/20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl dark:bg-purple-900/20" />
      </div>

      <div className="container relative z-10 pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                  ✨ Welcome to JOSA
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your{" "}
                <span className="gradient-text">
                  Digital Services
                </span>{" "}
                Partner
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Enterprise-grade solutions for student, business, IT, and tourism services across Tanzania.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Get a Demo
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold border-2 border-white dark:border-gray-950"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-900 dark:text-white">
                  1,000+ Happy Customers
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Trusted by businesses across Tanzania
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block relative">
            <div className="bg-gradient-to-br from-primary-600/10 to-purple-600/10 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8 backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50">
              <div className="aspect-square bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  const features = [
    {
      title: "Fast & Reliable",
      description: "Lightning-fast service delivery with 99.9% uptime guarantee",
      icon: "⚡",
    },
    {
      title: "Secure & Trusted",
      description: "Enterprise-grade security with advanced encryption",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support in your language",
      icon: "💬",
    },
    {
      title: "Easy to Use",
      description: "Simple, intuitive interface for seamless experience",
      icon: "✨",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose JOSA?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We provide premium services with enterprise-grade quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  const stats = [
    { label: "Active Users", value: "10,000+" },
    { label: "Services", value: "50+" },
    { label: "Orders Completed", value: "50,000+" },
    { label: "Customer Satisfaction", value: "98%" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <p className="text-primary-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Join thousands of satisfied customers and experience premium service delivery
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
