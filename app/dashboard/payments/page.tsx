import DashboardLayout from "@/components/dashboard-layout";

export const metadata = {
  title: "Payments | John Online Services",
  description: "View your payment history",
};

export default function PaymentsPage() {
  const payments = [
    {
      id: "PAY-001",
      orderId: "JOSA-2024-0001",
      amount: "TZS 500,000",
      method: "PeterPay",
      status: "COMPLETED",
      date: "Jan 15, 2024",
    },
    {
      id: "PAY-002",
      orderId: "JOSA-2024-0002",
      amount: "TZS 50,000",
      method: "Bank Transfer",
      status: "COMPLETED",
      date: "Jan 10, 2024",
    },
    {
      id: "PAY-003",
      orderId: "JOSA-2024-0003",
      amount: "TZS 100,000",
      method: "PeterPay",
      status: "PENDING",
      date: "Jan 8, 2024",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Payment History</h1>
          <p className="text-gray-600 dark:text-gray-400">View all your payments and receipts</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Payment ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Order</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Method</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="px-6 py-3 text-sm font-medium">{payment.id}</td>
                    <td className="px-6 py-3 text-sm">{payment.orderId}</td>
                    <td className="px-6 py-3 text-sm font-medium">{payment.amount}</td>
                    <td className="px-6 py-3 text-sm">{payment.method}</td>
                    <td className="px-6 py-3 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          payment.status === "COMPLETED"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30"
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600 dark:text-gray-400">{payment.date}</td>
                    <td className="px-6 py-3 text-sm">
                      <button className="text-primary-600 hover:text-primary-700 font-medium">
                        Download
                      </button>
                    </td>
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
