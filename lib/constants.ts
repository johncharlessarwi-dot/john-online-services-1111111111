// Service Categories
export const SERVICE_CATEGORIES = [
  {
    id: "student",
    name: "Student Services",
    slug: "student",
    icon: "Book",
    color: "from-blue-500 to-blue-600",
    description: "Educational services and applications",
    services: [
      "TCU Applications",
      "HESLB Applications",
      "Scholarships",
      "CV Writing",
      "Cover Letters",
      "Research Proposals",
    ],
  },
  {
    id: "business",
    name: "Business Services",
    slug: "business",
    icon: "Briefcase",
    color: "from-purple-500 to-purple-600",
    description: "Business registration and planning",
    services: [
      "BRELA Registration",
      "TRA Services",
      "Business Plans",
      "Company Profiles",
    ],
  },
  {
    id: "it",
    name: "IT Services",
    slug: "it",
    icon: "Code",
    color: "from-green-500 to-green-600",
    description: "Technology and development services",
    services: [
      "Website Development",
      "Mobile Apps",
      "Cyber Security",
      "Hosting",
      "Domains",
    ],
  },
  {
    id: "tourism",
    name: "Tourism Services",
    slug: "tourism",
    icon: "Plane",
    color: "from-orange-500 to-orange-600",
    description: "Travel and tourism experiences",
    services: ["Safari Booking", "Hotel Booking", "Kilimanjaro Packages"],
  },
];

// Order Statuses
export const ORDER_STATUSES = {
  PENDING: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  UNDER_REVIEW: { label: "Under Review", color: "bg-blue-100 text-blue-800" },
  IN_PROGRESS: { label: "In Progress", color: "bg-purple-100 text-purple-800" },
  WAITING_DOCUMENTS: {
    label: "Waiting Documents",
    color: "bg-orange-100 text-orange-800",
  },
  COMPLETED: { label: "Completed", color: "bg-green-100 text-green-800" },
  REJECTED: { label: "Rejected", color: "bg-red-100 text-red-800" },
  CANCELLED: { label: "Cancelled", color: "bg-gray-100 text-gray-800" },
};

// Payment Statuses
export const PAYMENT_STATUSES = {
  PENDING: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  PROCESSING: { label: "Processing", color: "bg-blue-100 text-blue-800" },
  COMPLETED: { label: "Completed", color: "bg-green-100 text-green-800" },
  FAILED: { label: "Failed", color: "bg-red-100 text-red-800" },
  REFUNDED: { label: "Refunded", color: "bg-purple-100 text-purple-800" },
  CANCELLED: { label: "Cancelled", color: "bg-gray-100 text-gray-800" },
};

// Roles
export const ROLES = {
  SUPER_ADMIN: "super_admin",
  ADMIN: "admin",
  ACCOUNTANT: "accountant",
  SUPPORT_AGENT: "support_agent",
  SERVICE_OFFICER: "service_officer",
  CONTENT_MANAGER: "content_manager",
  CUSTOMER: "customer",
};

// Permissions
export const PERMISSIONS = {
  // Users
  USER_CREATE: "user.create",
  USER_READ: "user.read",
  USER_UPDATE: "user.update",
  USER_DELETE: "user.delete",

  // Orders
  ORDER_CREATE: "order.create",
  ORDER_READ: "order.read",
  ORDER_UPDATE: "order.update",
  ORDER_DELETE: "order.delete",

  // Payments
  PAYMENT_READ: "payment.read",
  PAYMENT_UPDATE: "payment.update",
  PAYMENT_REFUND: "payment.refund",

  // Services
  SERVICE_CREATE: "service.create",
  SERVICE_READ: "service.read",
  SERVICE_UPDATE: "service.update",
  SERVICE_DELETE: "service.delete",

  // Admin
  ADMIN_ACCESS: "admin.access",
  SETTINGS_UPDATE: "settings.update",
  AUDIT_READ: "audit.read",
};

// File Upload Config
export const FILE_CONFIG = {
  maxFileSize: 50 * 1024 * 1024, // 50MB
  allowedFileTypes: ["application/pdf", "application/msword", "image/jpeg", "image/png", "application/zip"],
  allowedExtensions: ["pdf", "docx", "jpg", "jpeg", "png", "zip"],
};

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  AUTH_LOGIN: "/api/auth/login",
  AUTH_REGISTER: "/api/auth/register",
  AUTH_LOGOUT: "/api/auth/logout",
  AUTH_REFRESH: "/api/auth/refresh",
  AUTH_ME: "/api/auth/me",

  // Users
  USERS: "/api/users",
  USER_PROFILE: "/api/users/profile",

  // Services
  SERVICES: "/api/services",
  SERVICE_DETAIL: "/api/services/:id",
  CATEGORIES: "/api/categories",

  // Orders
  ORDERS: "/api/orders",
  ORDER_DETAIL: "/api/orders/:id",
  ORDER_TRACK: "/api/orders/:id/track",

  // Payments
  PAYMENTS: "/api/payments",
  PAYMENT_CREATE: "/api/payments/create",
  PAYMENT_STATUS: "/api/payments/:id/status",

  // Files
  FILES_UPLOAD: "/api/files/upload",
  FILES_DELETE: "/api/files/:id",

  // Admin
  ADMIN_DASHBOARD: "/api/admin/dashboard",
  ADMIN_USERS: "/api/admin/users",
  ADMIN_ORDERS: "/api/admin/orders",
  ADMIN_PAYMENTS: "/api/admin/payments",
};

// Currency
export const CURRENCIES = {
  TZS: { code: "TZS", symbol: "TSh", name: "Tanzanian Shilling" },
  USD: { code: "USD", symbol: "$", name: "US Dollar" },
};

// Support Ticket Priorities
export const TICKET_PRIORITIES = {
  LOW: { label: "Low", color: "bg-blue-100 text-blue-800" },
  MEDIUM: { label: "Medium", color: "bg-yellow-100 text-yellow-800" },
  HIGH: { label: "High", color: "bg-orange-100 text-orange-800" },
  URGENT: { label: "Urgent", color: "bg-red-100 text-red-800" },
};

// Pagination
export const PAGINATION = {
  defaultPageSize: 10,
  pageSizeOptions: [10, 25, 50, 100],
};
