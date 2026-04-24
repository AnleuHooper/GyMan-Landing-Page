import { supabase } from '../lib/supabaseClient.js';

/**
 * Fetches all active branches along with their landing page card images
 * and interior gallery images from the shared Supabase database.
 * @returns {Promise<Array>} Array of enriched branch objects or empty array on error.
 */
export async function fetchActiveBranches() {
  // Run all three queries in parallel for performance
  const [branchesRes, cardsRes, galleryRes] = await Promise.all([
    supabase
      .from('branches')
      .select('id, name, address, image_url, maps_url')
      .order('name'),
    supabase
      .from('landing_branch_cards')
      .select('branch_id, image_url'),
    supabase
      .from('landing_branch_gallery')
      .select('branch_id, image_url, display_order')
      .order('display_order', { ascending: true }),
  ]);

  if (branchesRes.error) {
    console.error('[GyMan] Error fetching branches:', branchesRes.error.message);
    return [];
  }

  const branches = branchesRes.data ?? [];

  // Build lookup maps for O(1) access by branch_id
  const cardMap = {};
  (cardsRes.data ?? []).forEach(card => {
    cardMap[card.branch_id] = card.image_url;
  });

  const galleryMap = {};
  (galleryRes.data ?? []).forEach(photo => {
    if (!galleryMap[photo.branch_id]) galleryMap[photo.branch_id] = [];
    galleryMap[photo.branch_id].push(photo.image_url);
  });

  // Enrich each branch with landing-page-specific images
  return branches.map(branch => ({
    ...branch,
    card_image: cardMap[branch.id] ?? null,
    gallery_images: galleryMap[branch.id] ?? [],
  }));
}
