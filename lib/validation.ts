export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePassword(password: string): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain an uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain a lowercase letter");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain a number");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function validatePhoneNumber(phone: string): boolean {
  // Tanzania phone number format
  const re = /^(\+?255|0)[1-9]\d{8}$/;
  return re.test(phone.replace(/\s/g, ""));
}

export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "")
    .slice(0, 1000);
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
}

export function validate(
  value: any,
  rules: ValidationRule
): { valid: boolean; error?: string } {
  if (rules.required && !value) {
    return { valid: false, error: "This field is required" };
  }

  if (value && typeof value === "string") {
    if (
      rules.minLength &&
      value.length < rules.minLength
    ) {
      return {
        valid: false,
        error: `Minimum length is ${rules.minLength}`,
      };
    }

    if (
      rules.maxLength &&
      value.length > rules.maxLength
    ) {
      return {
        valid: false,
        error: `Maximum length is ${rules.maxLength}`,
      };
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return { valid: false, error: "Invalid format" };
    }
  }

  if (rules.custom) {
    const result = rules.custom(value);
    if (result !== true) {
      return { valid: false, error: typeof result === "string" ? result : "Invalid" };
    }
  }

  return { valid: true };
}
