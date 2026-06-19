import AdminLayout from "@/components/admin-layout";

export const metadata = {
  title: "Admin Dashboard | John Online Services",
  description: "Admin dashboard for platform management",
};

export default function AdminDashboard() {
  const stats = [
    { label: "Total Users", value: "2,547", change: "+12%", icon: "👥" },
    { label: "Active Orders", value: "342", change: "+5%", icon: "📦" },
    { label: "Revenue", value: "TZS 45.2M", change: "+23%", icon: "💰" },
    { label: "Completion Rate", value: "94.2%", change: "+2%", icon: "✅" },
  ];

  const recentOrders = [
    { id: "JOSA-2024-0001", customer: "John Doe", service: "Website Dev", amount: "TZS 500K", status: "IN_PROGRESS" },
    { id: "JOSA-2024-0002", customer: "Jane Smith", service: "CV Writing", amount: "TZS 50K", status: "COMPLETED" },
    { id: "JOSA-2024-0003", customer: "Ahmed Hassan", service: "Brela Reg", amount: "TZS 150K", status: "PENDING" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className="text-2xl">{stat.icon}</div>
              </div>
              <p className="text-green-600 text-sm mt-4">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Charts Placeholder */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4">Revenue Trend</h3>
            <div className="h-64 bg-gray-100 dark:bg-gray-900 rounded flex items-center justify-center">
              <p className="text-gray-500">Chart will appear here</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4">Orders Distribution</h3>
            <div className="h-64 bg-gray-100 dark:bg-gray-900 rounded flex items-center justify-center">
              <p className="text-gray-500">Chart will appear here</p>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-bold">Recent Orders</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-3 text-left text-sm font-semibold">Order ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Customer</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Service</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-3 text-sm font-medium">{order.id}</td>
                    <td className="px-6 py-3 text-sm">{order.customer}</td>
                    <td className="px-6 py-3 text-sm">{order.service}</td>
                    <td className="px-6 py-3 text-sm">{order.amount}</td>
                    <td className="px-6 py-3 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === "COMPLETED"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30"
                            : order.status === "IN_PROGRESS"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
