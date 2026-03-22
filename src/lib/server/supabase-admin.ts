import type { Database } from '$lib/supabase-types';
import { createClient } from '@supabase/supabase-js';
import { ENV } from './env';

/**
 * Server-side Supabase admin client with service role key.
 * 
 * WARNING: This client bypasses Row Level Security (RLS) policies.
 * Only use for privileged server operations (Stripe webhooks, billing management, etc.)
 * NEVER expose this to client-side code or use for user-facing operations.
 * 
 * For user-authenticated operations, use event.locals.supabase instead.
 */
export const supabaseAdmin = createClient<Database>(
	ENV.PUBLIC_SUPABASE_URL,
	ENV.SUPABASE_SERVICE_ROLE_KEY
);
