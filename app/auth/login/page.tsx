import { MainLayout } from "@/components/layouts";
import Link from "next/link";

export const metadata = {
  title: "Login | John Online Services",
  description: "Sign in to your account",
};

export default function LoginPage() {
  return (
    <MainLayout>
      <section className="py-20 bg-white dark:bg-gray-900 pt-24 min-h-screen flex items-center">
        <div className="container">
          <div className="max-w-md mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Welcome Back</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Sign in to your JOSA account
                </p>
              </div>

              <form className="space-y-4">
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
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="ml-2 text-sm">Remember me</span>
                  </label>
                  <Link href="#" className="text-sm text-primary-600 hover:text-primary-700">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Sign In
                </button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Continue with Google
              </button>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                Don't have an account?{" "}
                <Link href="/auth/register" className="text-primary-600 hover:text-primary-700 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
