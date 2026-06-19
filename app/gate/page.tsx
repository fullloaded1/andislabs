'use client';

import { useActionState } from 'react';
import { submitPassword } from './actions';
import Image from 'next/image';

export default function GatePage() {
  const [state, formAction, isPending] = useActionState(submitPassword, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-2xl">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-2xl tracking-tighter">
            AL
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-2">Private Access</h1>
          <p className="text-zinc-400 text-sm">Please enter the access password to view this profile.</p>
        </div>

        <form action={formAction} className="space-y-6">
          <div>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter password"
              className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          {state?.error && (
            <div className="text-red-400 text-sm text-center bg-red-950/30 py-2 rounded-lg border border-red-900/50">
              {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isPending ? 'Verifying...' : 'Access Profile'}
          </button>
        </form>
      </div>
    </div>
  );
}
