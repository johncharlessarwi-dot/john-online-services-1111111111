import { MainLayout } from "@/components/layouts";
import { SERVICE_CATEGORIES } from "@/lib/constants";

export const metadata = {
  title: "Services | John Online Services",
  description: "Browse our comprehensive range of professional services",
};

export default function ServicesPage() {
  const sampleServices = [
    {
      id: 1,
      name: "University Applications Support",
      category: "student",
      price: "TZS 100,000",
      description: "Professional assistance with university applications",
      rating: 4.8,
      reviews: 127,
    },
    {
      id: 2,
      name: "BRELA Registration",
      category: "business",
      price: "TZS 150,000",
      description: "Complete business registration with government",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Website Development",
      category: "it",
      price: "TZS 500,000",
      description: "Professional website design and development",
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 4,
      name: "Safari Tour Booking",
      category: "tourism",
      price: "TZS 2,000,000",
      description: "Premium safari experience in Tanzania",
      rating: 4.7,
      reviews: 43,
    },
    {
      id: 5,
      name: "CV Writing Service",
      category: "student",
      price: "TZS 50,000",
      description: "Professional CV creation and optimization",
      rating: 4.8,
      reviews: 201,
    },
    {
      id: 6,
      name: "Mobile App Development",
      category: "it",
      price: "TZS 800,000",
      description: "Custom mobile application development",
      rating: 4.9,
      reviews: 78,
    },
  ];

  return (
    <MainLayout>
      <section className="py-20 bg-white dark:bg-gray-900 pt-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Professional services across multiple categories
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <button className="p-4 rounded-lg border-2 border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-600 font-medium">
                All Services
              </button>
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className="p-4 rounded-lg border-2 border-gray-200 dark:border-gray-800 hover:border-primary-600 transition-colors"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sampleServices.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="h-40 bg-gradient-to-br from-primary-400 to-primary-600" />
                <div className="p-6">
                  <p className="text-sm text-primary-600 font-medium mb-2">
                    {SERVICE_CATEGORIES.find(c => c.id === service.category)?.name}
                  </p>
                  <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{service.price}</span>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
