import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { timingSafeEqual } from 'crypto';

const SECRET_KEY = process.env.ACCESS_SESSION_SECRET;

export function comparePassword(inputPassword: string, storedPassword?: string): boolean {
  if (!storedPassword) return false;
  
  const passwordBuffer = Buffer.from(inputPassword, 'utf8');
  const storedPasswordBuffer = Buffer.from(storedPassword, 'utf8');

  let isMatch = false;

  if (passwordBuffer.length === storedPasswordBuffer.length) {
    isMatch = timingSafeEqual(passwordBuffer, storedPasswordBuffer);
  } else {
    // Prevent timing attack by simulating equal operation
    timingSafeEqual(storedPasswordBuffer, storedPasswordBuffer);
  }

  return isMatch;
}

// Fail-closed validation
if (!SECRET_KEY || SECRET_KEY.length < 32) {
  throw new Error("ACCESS_SESSION_SECRET is not set or is less than 32 characters.");
}

const key = new TextEncoder().encode(SECRET_KEY);

export async function createAccessSession() {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  const token = await new SignJWT({ access: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(key);

  const cookieStore = await cookies();
  cookieStore.set('gate_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: expires,
    path: '/',
  });
}

export async function verifyAccess(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get('gate_session')?.value;

  if (!token) return false;

  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ['HS256'],
    });
    return payload.access === true;
  } catch (error) {
    return false;
  }
}
