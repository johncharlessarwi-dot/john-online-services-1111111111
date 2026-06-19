import DashboardLayout from "@/components/dashboard-layout";

export const metadata = {
  title: "Dashboard | John Online Services",
  description: "Your personal dashboard",
};

export default function DashboardPage() {
  const stats = [
    { label: "Active Orders", value: "3", icon: "📦" },
    { label: "Completed", value: "12", icon: "✅" },
    { label: "Total Spent", value: "TZS 750,000", icon: "💰" },
    { label: "Points Earned", value: "1,500", icon: "⭐" },
  ];

  const recentOrders = [
    {
      id: "JOSA-2024-0001",
      service: "Website Development",
      status: "In Progress",
      amount: "TZS 500,000",
      date: "Jan 15, 2024",
    },
    {
      id: "JOSA-2024-0002",
      service: "CV Writing",
      status: "Completed",
      amount: "TZS 50,000",
      date: "Jan 10, 2024",
    },
    {
      id: "JOSA-2024-0003",
      service: "University Application",
      status: "Pending",
      amount: "TZS 100,000",
      date: "Jan 8, 2024",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p>You have 3 active orders and 0 pending tasks</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-3 text-left text-sm font-semibold">Order ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Service</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="px-6 py-3 text-sm font-medium">{order.id}</td>
                    <td className="px-6 py-3 text-sm">{order.service}</td>
                    <td className="px-6 py-3 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30"
                            : order.status === "In Progress"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-sm">{order.amount}</td>
                    <td className="px-6 py-3 text-sm text-gray-600 dark:text-gray-400">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
