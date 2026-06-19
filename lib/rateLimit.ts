interface RateLimitRecord {
  count: number;
  resetAt: number;
}

// In-memory store for rate limiting
const limitStore = new Map<string, RateLimitRecord>();

export function checkRateLimit(ip: string, limit: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now();
  const record = limitStore.get(ip);

  if (!record) {
    limitStore.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  // If time window passed, reset
  if (now > record.resetAt) {
    limitStore.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  // If over limit, deny
  if (record.count >= limit) {
    return false;
  }

  // Increment
  record.count++;
  return true;
}
