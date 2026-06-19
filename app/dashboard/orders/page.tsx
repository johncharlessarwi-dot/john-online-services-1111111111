import DashboardLayout from "@/components/dashboard-layout";

export const metadata = {
  title: "My Orders | John Online Services",
  description: "View and manage your orders",
};

export default function OrdersPage() {
  const orders = [
    {
      id: "JOSA-2024-0001",
      service: "Website Development",
      status: "IN_PROGRESS",
      amount: "TZS 500,000",
      date: "Jan 15, 2024",
      progress: 65,
    },
    {
      id: "JOSA-2024-0002",
      service: "CV Writing",
      status: "COMPLETED",
      amount: "TZS 50,000",
      date: "Jan 10, 2024",
      progress: 100,
    },
    {
      id: "JOSA-2024-0003",
      service: "University Application",
      status: "PENDING",
      amount: "TZS 100,000",
      date: "Jan 8, 2024",
      progress: 0,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Orders</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage and track all your orders</p>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6"
            >
              <div className="grid md:grid-cols-3 gap-4 items-start mb-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Order ID</p>
                  <p className="font-bold">{order.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Service</p>
                  <p className="font-bold">{order.service}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Amount</p>
                  <p className="font-bold">{order.amount}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm">{order.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${order.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === "COMPLETED"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30"
                        : order.status === "IN_PROGRESS"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30"
                    }`}
                  >
                    {order.status.replace(/_/g, " ")}
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{order.date}</p>
                </div>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
