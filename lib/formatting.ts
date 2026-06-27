/**
 * Safely parses a string or Date object into a valid Date instance.
 */
function parseDate(date: Date | string): Date {
  if (date instanceof Date) return date;
  const parsed = new Date(date);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

export function formatCurrency(amount: number, currency: string = "TZS"): string {
  // Using en-US can sometimes render TZS as "TZS", using narrow symbol or fallback formatting
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol"
  }).format(amount);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parseDate(date));
}

export function formatDateTime(date: Date | string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(parseDate(date));
}

export function formatFileSize(bytes: number): string {
  if (bytes <= 0 || isNaN(bytes)) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const boundedIndex = Math.min(i, sizes.length - 1);
  
  const formatted = (bytes / Math.pow(k, boundedIndex)).toFixed(2);
  // Strip trailing .00 if it's a whole number
  return `${parseFloat(formatted)} ${sizes[boundedIndex]}`;
}

export function generateOrderNumber(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  return `JOSA-${year}-${random}`;
}

export function generateTrackingNumber(): string {
  const randomHex = Math.random().toString(36).slice(2, 11).toUpperCase();
  return `TRK-${Date.now()}-${randomHex}`;
}

export function generateReferralCode(): string {
  return `REF-${Math.random().toString(36).slice(2, 11).toUpperCase()}`;
}

export function truncateText(text: string, length: number): string {
  if (!text) return "";
  if (text.length <= length) return text;
  return text.slice(0, length).trimEnd() + "...";
}

export function slugify(text: string): string {
  if (!text) return "";
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD") // Splits accents from accented characters
    .replace(/[\u0300-\u036f]/g, "") // Removes the accent marks
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function capitalizeWords(text: string): string {
  if (!text) return "";
  return text
    .split(/\s+/) // Splits accurately even with multiple consecutive spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function getInitials(firstName?: string, lastName?: string): string {
  const first = firstName?.trim().charAt(0).toUpperCase() || "";
  const last = lastName?.trim().charAt(0).toUpperCase() || "";
  return (first + last) || "JO";
}