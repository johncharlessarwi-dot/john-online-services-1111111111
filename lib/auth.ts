import * as jwt from "jose";

function getSecret(): Uint8Array {
  const value = process.env.JWT_SECRET;
  if (!value || value.length < 32 || /^(dev_|your_|change_me)/i.test(value)) {
    throw new Error("JWT_SECRET must be a strong, explicitly configured secret");
  }
  return new TextEncoder().encode(value);
}

export async function createToken(payload: Record<string, any>): Promise<string> {
  return await new jwt.SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(process.env.JWT_EXPIRES_IN || "7d")
    .sign(getSecret());
}

export async function verifyToken(token: string): Promise<Record<string, any> | null> {
  try {
    const { payload } = await jwt.jwtVerify(token, getSecret());
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