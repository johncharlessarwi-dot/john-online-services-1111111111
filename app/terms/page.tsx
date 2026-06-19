import { MainLayout } from "@/components/layouts";

export const metadata = {
  title: "Terms of Service | John Online Services",
  description: "Terms of service and conditions",
};

export default function TermsPage() {
  return (
    <MainLayout>
      <section className="py-20 bg-white dark:bg-gray-900 pt-24">
        <div className="container max-w-3xl">
          <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: January 2024
          </p>

          <div className="prose dark:prose-invert space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 dark:text-gray-300">
                By accessing and using this platform, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Permission is granted to temporarily download one copy of the materials (information or software) on the platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mt-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software</li>
                <li>Transferring the materials to another person or "mirroring" on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p className="text-gray-700 dark:text-gray-300">
                The materials on our platform are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
              <p className="text-gray-700 dark:text-gray-300">
                In no event shall Company be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our platform, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about these Terms of Service, please contact us at legal@johnonline.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
