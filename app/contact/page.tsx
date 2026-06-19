import { MainLayout } from "@/components/layouts";

export const metadata = {
  title: "Contact Us | John Online Services",
  description: "Get in touch with our team",
};

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="py-20 bg-white dark:bg-gray-900 pt-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Have questions? Our team is here to help
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: "📧",
                title: "Email",
                value: "info@johnonline.com",
              },
              {
                icon: "📱",
                title: "Phone",
                value: "+255 XXX XXX XXX",
              },
              {
                icon: "📍",
                title: "Location",
                value: "Dar es Salaam, Tanzania",
              },
            ].map((contact, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-lg border border-gray-200 dark:border-gray-800"
              >
                <div className="text-4xl mb-3">{contact.icon}</div>
                <h3 className="font-bold mb-2">{contact.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{contact.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:outline-none focus:border-primary-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:outline-none focus:border-primary-600"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:outline-none focus:border-primary-600"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:outline-none focus:border-primary-600"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
