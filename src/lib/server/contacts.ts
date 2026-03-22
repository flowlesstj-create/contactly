import { supabaseAdmin } from './supabase-admin';

/**
 * Fetches the exact count of contacts for a given user ID.
 * 
 * SECURITY: Uses supabaseAdmin (service role key) - server-side only.
 * Ensure user_id is validated at the call site (e.g., from session.user.id).
 * Do NOT expose to client-side code.
 * 
 * @param user_id - The authenticated user's ID
 * @returns The count of contacts, or 0 if none exist
 */
export async function getContactsCount(user_id: string): Promise<number> {
	const { error, count } = await supabaseAdmin
		.from('contacts')
		.select('*', { count: 'exact', head: true })
		.eq('user_id', user_id);

	if (error) {
		throw error;
	}

	if (!count) {
		return 0;
	}

	return count;
}
