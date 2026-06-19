import { MainLayout } from "@/components/layouts";

export const metadata = {
  title: "Privacy Policy | John Online Services",
  description: "Privacy policy and data protection",
};

export default function PrivacyPage() {
  return (
    <MainLayout>
      <section className="py-20 bg-white dark:bg-gray-900 pt-24">
        <div className="container max-w-3xl">
          <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: January 2024
          </p>

          <div className="prose dark:prose-invert space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300">
                John Online Services & Applications ("Company", "we", "us", or "our") operates the JOSA platform (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Information Collection and Use</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We collect several different types of information for various purposes to provide and improve our Service:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mt-4">
                <li>Personal identification information (name, email, phone, etc.)</li>
                <li>Payment information and transaction history</li>
                <li>Usage data and analytics</li>
                <li>Device information and IP addresses</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Security of Data</h2>
              <p className="text-gray-700 dark:text-gray-300">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Email: privacy@johnonline.com<br />
                Phone: +255 XXX XXX XXX
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
