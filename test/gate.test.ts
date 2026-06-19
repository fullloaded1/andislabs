import test from 'node:test';
import assert from 'node:assert';

// We must set the env variable BEFORE importing lib/gate.ts to avoid fail-close error during import.
process.env.ACCESS_SESSION_SECRET = 'a_very_secure_secret_that_is_at_least_32_characters_long';

// Now import the modules
import { checkRateLimit } from '../lib/rateLimit';
import { comparePassword } from '../lib/gate';

test('Rate Limiter', async (t) => {
  await t.test('allows requests under limit', () => {
    const ip = '127.0.0.1';
    assert.strictEqual(checkRateLimit(ip, 3, 60000), true);
    assert.strictEqual(checkRateLimit(ip, 3, 60000), true);
    assert.strictEqual(checkRateLimit(ip, 3, 60000), true);
  });

  await t.test('blocks requests over limit', () => {
    const ip = '127.0.0.2';
    assert.strictEqual(checkRateLimit(ip, 2, 60000), true);
    assert.strictEqual(checkRateLimit(ip, 2, 60000), true);
    // 3rd request should fail
    assert.strictEqual(checkRateLimit(ip, 2, 60000), false);
  });

  await t.test('resets after window passes', async () => {
    const ip = '127.0.0.3';
    assert.strictEqual(checkRateLimit(ip, 1, 100), true); // 1st allowed
    assert.strictEqual(checkRateLimit(ip, 1, 100), false); // 2nd blocked

    // Wait for 150ms
    await new Promise(resolve => setTimeout(resolve, 150));

    // Should be allowed again
    assert.strictEqual(checkRateLimit(ip, 1, 100), true);
  });
});

test('Password Comparison', async (t) => {
  await t.test('returns true for correct password', () => {
    const isMatch = comparePassword('mysecret123', 'mysecret123');
    assert.strictEqual(isMatch, true);
  });

  await t.test('returns false for incorrect password (same length)', () => {
    const isMatch = comparePassword('mysecret124', 'mysecret123');
    assert.strictEqual(isMatch, false);
  });

  await t.test('returns false for incorrect password (different length)', () => {
    const isMatch = comparePassword('short', 'mysecret123');
    assert.strictEqual(isMatch, false);
  });

  await t.test('handles empty stored password securely', () => {
    const isMatch = comparePassword('mysecret123', undefined);
    assert.strictEqual(isMatch, false);
  });
});
