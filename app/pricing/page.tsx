import { MainLayout } from "@/components/layouts";
import Link from "next/link";

export const metadata = {
  title: "Pricing | John Online Services",
  description: "Transparent and competitive pricing for all our services",
};

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for getting started",
      price: "TZS 50,000",
      features: [
        "Single service order",
        "Standard support",
        "5GB file storage",
        "Basic analytics",
      ],
    },
    {
      name: "Professional",
      description: "For growing businesses",
      price: "TZS 150,000",
      features: [
        "Up to 5 service orders",
        "Priority support",
        "50GB file storage",
        "Advanced analytics",
        "Custom reports",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      features: [
        "Unlimited service orders",
        "24/7 dedicated support",
        "Unlimited storage",
        "Real-time analytics",
        "API access",
        "Custom integrations",
      ],
    },
  ];

  return (
    <MainLayout>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                  plan.highlighted
                    ? "border-primary-600 bg-gradient-to-b from-primary-50 dark:from-primary-900/20 to-transparent shadow-lg scale-105"
                    : "border-gray-200 dark:border-gray-800 hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary-600 text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                      /month
                    </span>
                  )}
                </div>

                <button
                  className={`w-full py-3 font-medium rounded-lg mb-8 transition-colors ${
                    plan.highlighted
                      ? "bg-primary-600 text-white hover:bg-primary-700"
                      : "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>

                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-primary-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Can I change plans anytime?",
                  a: "Yes, you can upgrade or downgrade your plan at any time.",
                },
                {
                  q: "Is there a setup fee?",
                  a: "No, there are no hidden fees. Pricing is transparent and straightforward.",
                },
                {
                  q: "Do you offer refunds?",
                  a: "Yes, we offer a 30-day money-back guarantee if you're not satisfied.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept PeterPay, bank transfers, and other local payment methods.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg border border-gray-200 dark:border-gray-800"
                >
                  <h3 className="font-bold mb-2">{item.q}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
