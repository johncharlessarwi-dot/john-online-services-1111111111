import { MainLayout } from "@/components/layouts";

export const metadata = {
  title: "FAQ | John Online Services",
  description: "Frequently asked questions",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "How long does it take to process an order?",
      a: "Processing time varies depending on the service. Most services are completed within 3-7 business days. You can check the estimated time when placing your order.",
    },
    {
      q: "Can I track my order status?",
      a: "Yes! Each order has a unique tracking number. You can track your order in real-time through your dashboard.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept PeterPay, bank transfers, and other local payment methods. All payments are secure and encrypted.",
    },
    {
      q: "Is my personal information secure?",
      a: "Absolutely! We use enterprise-grade encryption and follow international security standards. Your data is never shared with third parties.",
    },
    {
      q: "Can I get a refund?",
      a: "We offer a 30-day money-back guarantee if you're not satisfied with the service. Refunds are processed within 5 business days.",
    },
    {
      q: "How can I contact support?",
      a: "You can reach our support team 24/7 via chat, email, or phone. We typically respond within 1 hour during business hours.",
    },
  ];

  return (
    <MainLayout>
      <section className="py-20 bg-white dark:bg-gray-900 pt-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Find answers to common questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-16 bg-primary-50 dark:bg-primary-900/20 p-8 rounded-lg border border-primary-200 dark:border-primary-800 text-center">
            <h3 className="font-bold text-lg mb-3">Can't find your answer?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our support team is here to help 24/7
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
