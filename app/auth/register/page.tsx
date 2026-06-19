import { MainLayout } from "@/components/layouts";
import Link from "next/link";

export const metadata = {
  title: "Register | John Online Services",
  description: "Create a new account",
};

export default function RegisterPage() {
  return (
    <MainLayout>
      <section className="py-20 bg-white dark:bg-gray-900 pt-24 min-h-screen flex items-center">
        <div className="container">
          <div className="max-w-md mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Create Account</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Join JOSA today
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:outline-none focus:border-primary-600"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:outline-none focus:border-primary-600"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:outline-none focus:border-primary-600"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:outline-none focus:border-primary-600"
                    placeholder="••••••••"
                  />
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    At least 8 characters with uppercase, lowercase, and numbers
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:outline-none focus:border-primary-600"
                    placeholder="••••••••"
                  />
                </div>

                <label className="flex items-start">
                  <input type="checkbox" className="w-4 h-4 mt-1" />
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Create Account
                </button>
              </form>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-primary-600 hover:text-primary-700 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
