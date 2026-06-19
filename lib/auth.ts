import * as jwt from "jose";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key"
);

export async function createToken(payload: Record<string, any>): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime(process.env.JWT_EXPIRES_IN || "7d")
      .sign(secret)
      .then(resolve)
      .catch(reject);
  });
}

export async function verifyToken(token: string): Promise<Record<string, any> | null> {
  try {
    const verified = await jwt.jwtVerify(token, secret);
    return verified.payload;
  } catch {
    return null;
  }
}

export function decodeToken(token: string): Record<string, any> | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const decoded = JSON.parse(Buffer.from(parts[1], "base64").toString());
    return decoded;
  } catch {
    return null;
  }
}
