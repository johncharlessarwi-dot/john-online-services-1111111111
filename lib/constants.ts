// ============================================================================
// 1. Service Schema Constants
// ============================================================================

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
    color: "from-emerald-500 to-emerald-600",
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
    services: [
      "Safari Booking", 
      "Hotel Booking", 
      "Kilimanjaro Packages"
    ],
  },
] as const;

// ============================================================================
// 2. Application State & Badges UI (Tailwind CSS)
// ============================================================================

export const ORDER_STATUSES = {
  PENDING:           { label: "Pending",           color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400" },
  UNDER_REVIEW:      { label: "Under Review",      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" },
  IN_PROGRESS:       { label: "In Progress",       color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400" },
  WAITING_DOCUMENTS: { label: "Waiting Documents", color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400" },
  COMPLETED:         { label: "Completed",         color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400" },
  REJECTED:          { label: "Rejected",          color: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400" },
  CANCELLED:         { label: "Cancelled",         color: "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400" },
} as const;

export const PAYMENT_STATUSES = {
  PENDING:    { label: "Pending",    color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400" },
  PROCESSING: { label: "Processing", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" },
  COMPLETED:  { label: "Completed",  color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400" },
  FAILED:     { label: "Failed",     color: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400" },
  REFUNDED:   { label: "Refunded",   color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400" },
  CANCELLED:  { label: "Cancelled",  color: "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400" },
} as const;

export const TICKET_PRIORITIES = {
  LOW:    { label: "Low",    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400" },
  MEDIUM: { label: "Medium", color: "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400" },
  HIGH:   { label: "High",   color: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400" },
  URGENT: { label: "Urgent", color: "bg-rose-100 text-rose-800 dark:bg-rose-900/20 dark:text-rose-400" },
} as const;

// ============================================================================
// 3. RBAC (Role-Based Access Control)
// ============================================================================

export const ROLES = {
  SUPER_ADMIN:     "super_admin",
  ADMIN:           "admin",
  ACCOUNTANT:      "accountant",
  SUPPORT_AGENT:   "support_agent",
  SERVICE_OFFICER: "service_officer",
  CONTENT_MANAGER: "content_manager",
  CUSTOMER:        "customer",
} as const;

export const PERMISSIONS = {
  // Account Management Permissions
  USER_CREATE:     "user.create",
  USER_READ:       "user.read",
  USER_UPDATE:     "user.update",
  USER_DELETE:     "user.delete",

  // Core Business Operations
  ORDER_CREATE:    "order.create",
  ORDER_READ:      "order.read",
  ORDER_UPDATE:    "order.update",
  ORDER_DELETE:    "order.delete",

  // Financial Management
  PAYMENT_READ:    "payment.read",
  PAYMENT_UPDATE:  "payment.update",
  PAYMENT_REFUND:  "payment.refund",

  // Service Portfolio Config
  SERVICE_CREATE:  "service.create",
  SERVICE_READ:    "service.read",
  SERVICE_UPDATE:  "service.update",
  SERVICE_DELETE:  "service.delete",

  // Internal Management Control
  ADMIN_ACCESS:    "admin.access",
  SETTINGS_UPDATE: "settings.update",
  AUDIT_READ:      "audit.read",
} as const;

// ============================================================================
// 4. API Core Endpoints Map
// ============================================================================

export const API_ENDPOINTS = {
  // Identity & Auth Gates
  AUTH_LOGIN:      "/api/auth/login",
  AUTH_REGISTER:   "/api/auth/register",
  AUTH_LOGOUT:     "/api/auth/logout",
  AUTH_REFRESH:    "/api/auth/refresh",
  AUTH_ME:         "/api/auth/me",

  // Users Directory
  USERS:           "/api/users",
  USER_PROFILE:    "/api/users/profile",

  // Marketplace Catalogues
  SERVICES:        "/api/services",
  SERVICE_DETAIL:  "/api/services/:id",
  CATEGORIES:      "/api/categories",

  // Orders Ledger
  ORDERS:          "/api/orders",
  ORDER_DETAIL:    "/api/orders/:id",
  ORDER_TRACK:     "/api/orders/:id/track",

  // Billing Channels
  PAYMENTS:        "/api/payments",
  PAYMENT_CREATE:  "/api/payments/create",
  PAYMENT_STATUS:  "/api/payments/:id/status",

  // Static Assets Vault
  FILES_UPLOAD:    "/api/files/upload",
  FILES_DELETE:    "/api/files/:id",

  // Enterprise Panels
  ADMIN_DASHBOARD: "/api/admin/dashboard",
  ADMIN_USERS:     "/api/admin/users",
  ADMIN_ORDERS:    "/api/admin/orders",
  ADMIN_PAYMENTS:  "/api/admin/payments",
} as const;

// ============================================================================
// 5. System Configuration Blocks
// ============================================================================

export const FILE_CONFIG = {
  maxFileSize: 50 * 1024 * 1024, // 50MB Base Size
  allowedFileTypes: [
    "application/pdf", 
    "application/msword", 
    "image/jpeg", 
    "image/png", 
    "application/zip"
  ],
  allowedExtensions: ["pdf", "docx", "jpg", "jpeg", "png", "zip"],
} as const;

export const CURRENCIES = {
  TZS: { code: "TZS", symbol: "TSh", name: "Tanzanian Shilling" },
  USD: { code: "USD", symbol: "$",   name: "US Dollar" },
} as const;

export const PAGINATION = {
  defaultPageSize: 10,
  pageSizeOptions: [10, 25, 50, 100],
} as const;