import * as jwt from "jose";

const secretKeyString = process.env.JWT_SECRET;

if (!secretKeyString && process.env.NODE_ENV === "production") {
  console.warn("CRITICAL: JWT_SECRET environment variable is missing in production!");
}

const secret = new TextEncoder().encode(secretKeyString || "your-secret-key");

export async function createToken(payload: Record<string, any>): Promise<string> {
  return await new jwt.SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(process.env.JWT_EXPIRES_IN || "7d")
    .sign(secret);
}

export async function verifyToken(token: string): Promise<Record<string, any> | null> {
  try {
    const { payload } = await jwt.jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

export function decodeToken(token: string): Record<string, any> | null {
  try {
    return jwt.decodeJwt(token);
  } catch {
    return null;
  }
}