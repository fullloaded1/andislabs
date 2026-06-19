'use server';

import { createAccessSession, comparePassword } from '@/lib/gate';
import { timingSafeEqual } from 'crypto';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { checkRateLimit } from '@/lib/rateLimit';

export async function submitPassword(prevState: any, formData: FormData) {
  // Rate Limiting
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown';
  
  // Max 5 attempts per minute
  if (!checkRateLimit(ip, 5, 60000)) {
    return { error: 'Terlalu banyak percobaan. Coba lagi dalam 1 menit.' };
  }

  const password = formData.get('password');
  
  if (typeof password !== 'string' || !password) {
    return { error: 'Password salah' };
  }

  const storedPassword = process.env.ACCESS_PASSWORD;
  
  if (!storedPassword) {
    // Fail-closed if ACCESS_PASSWORD is not set
    return { error: 'Sistem belum dikonfigurasi dengan benar.' };
  }

  if (comparePassword(password, storedPassword)) {
    await createAccessSession();
    // Redirect to home if successful
    redirect('/');
  }

  return { error: 'Password salah' };
}
