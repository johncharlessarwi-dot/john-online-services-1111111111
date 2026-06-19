// Authentication & User Types
export interface JWTPayload {
  userId: string;
  email: string;
  roleId: string;
  iat?: number;
  exp?: number;
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  avatar?: string;
  roleId: string;
  verified: boolean;
  createdAt: Date;
}

export interface UserProfile extends User {
  role: Role;
  profile?: Profile;
}

export interface Profile {
  id: string;
  userId: string;
  bio?: string;
  company?: string;
  website?: string;
  location?: string;
  emailNotifications: boolean;
  twoFactorEnabled: boolean;
}

// Role & Permission Types
export interface Role {
  id: string;
  name: string;
  description?: string;
  permissions: Permission[];
  isSystem: boolean;
}

export interface Permission {
  id: string;
  name: string;
  resource: string;
  action: string;
  description?: string;
}

// Service Types
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description?: string;
  longDescription?: string;
  price: number;
  discountPrice?: number;
  categoryId: string;
  category?: Category;
  features: string[];
  requirements: string[];
  deliverables: string[];
  image?: string;
  featured: boolean;
  active: boolean;
}

export interface ServiceWithCategory extends Service {
  category: Category;
}

// Order Types
export enum OrderStatus {
  PENDING = "PENDING",
  UNDER_REVIEW = "UNDER_REVIEW",
  IN_PROGRESS = "IN_PROGRESS",
  WAITING_DOCUMENTS = "WAITING_DOCUMENTS",
  COMPLETED = "COMPLETED",
  REJECTED = "REJECTED",
  CANCELLED = "CANCELLED",
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  serviceId: string;
  status: OrderStatus;
  amount: number;
  currency: string;
  notes?: string;
  startedAt?: Date;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderWithDetails extends Order {
  service: Service;
  payment?: Payment;
  files: File[];
}

// Payment Types
export enum PaymentStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  REFUNDED = "REFUNDED",
  CANCELLED = "CANCELLED",
}

export enum PaymentMethod {
  PETERPAY = "PETERPAY",
  BANK_TRANSFER = "BANK_TRANSFER",
  CASH = "CASH",
}

export interface Payment {
  id: string;
  transactionId: string;
  orderId: string;
  userId: string;
  amount: number;
  currency: string;
  paymentMethod: PaymentMethod;
  status: PaymentStatus;
  peterpayId?: string;
  paidAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// File Types
export enum FileType {
  PDF = "PDF",
  DOCX = "DOCX",
  JPG = "JPG",
  PNG = "PNG",
  ZIP = "ZIP",
}

export interface File {
  id: string;
  orderId: string;
  name: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  cloudinaryId?: string;
  version: number;
  type: FileType;
  createdAt: Date;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  image?: string;
  metaTitle?: string;
  metaDescription?: string;
  published: boolean;
  publishedAt?: Date;
  views: number;
  likes: number;
  createdAt: Date;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  content: string;
  rating: number;
  featured: boolean;
  verified: boolean;
  createdAt: Date;
}

// Support Ticket Types
export enum TicketStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  WAITING_CUSTOMER = "WAITING_CUSTOMER",
  RESOLVED = "RESOLVED",
  CLOSED = "CLOSED",
}

export enum TicketPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  URGENT = "URGENT",
}

export interface SupportTicket {
  id: string;
  ticketNumber: string;
  userId: string;
  subject: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: Date;
  updatedAt: Date;
}

// Referral Types
export interface Referral {
  id: string;
  referrerId: string;
  referredUserId: string;
  code: string;
  rewardAmount: number;
  rewardClaimed: boolean;
  conversions: number;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Dashboard Stats Types
export interface DashboardStats {
  totalOrders: number;
  totalRevenue: number;
  completedOrders: number;
  pendingOrders: number;
  totalUsers: number;
  activeUsers: number;
}

// Analytics Types
export interface ChartData {
  name: string;
  value: number;
  date?: string;
}

export interface AnalyticsMetrics {
  revenue: ChartData[];
  orders: ChartData[];
  users: ChartData[];
  topServices: Array<{ service: string; count: number }>;
  topCustomers: Array<{ name: string; amount: number }>;
  paymentSuccessRate: number;
  conversionRate: number;
}
