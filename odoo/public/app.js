const supabaseUrl = 'https://yysbtszewpypcaugxpbo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5c2J0c3pld3B5cGNhdWd4cGJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMDIyMjQsImV4cCI6MjA2Nzg3ODIyNH0.1qEyIltmAj0FaqTsmg27NRuxW4lI-Msl0S7sdsRzMiA';
const supabase = window.supabase ? window.supabase : supabase.createClient(supabaseUrl, supabaseKey);

// Helper: Get current user
async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// Helper: Fetch user profile (with points)
async function getUserProfile(userId) {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();
  if (error) return null;
  return data;
}

// Helper: Update user points
async function updateUserPoints(userId, newPoints) {
  const { data, error } = await supabase.from('profiles').update({ points: newPoints }).eq('id', userId);
  return !error;
}

// Post an item (called from listanitem.html)
async function postItem(itemData) {
  const user = await getCurrentUser();
  if (!user) {
    alert('You must be logged in to post an item.');
    return;
  }
  // Insert item into items table
  const { data, error } = await supabase.from('items').insert([{ ...itemData, owner: user.id }]);
  if (error) {
    alert('Failed to post item: ' + error.message);
    return;
  }
  // Increase user points by 10
  const profile = await getUserProfile(user.id);
  if (profile) {
    await updateUserPoints(user.id, profile.points + 10);
    alert('Item listed! You earned 10 points.');
    window.location.href = '/src/components/dashboard.html';
  }
}

// Swap item (called when swap is successful)
async function swapItem(itemId) {
  const user = await getCurrentUser();
  if (!user) {
    alert('You must be logged in to swap.');
    return;
  }
  // Decrease user points by 10
  const profile = await getUserProfile(user.id);
  if (profile && profile.points >= 10) {
    await updateUserPoints(user.id, profile.points - 10);
    // Optionally update item status in DB
    await supabase.from('items').update({ status: 'swapped' }).eq('id', itemId);
    alert('Swap successful! 10 points deducted.');
    window.location.reload();
  } else {
    alert('Not enough points to swap.');
  }
}

// Expose functions globally for HTML to call
window.postItem = postItem;
window.swapItem = swapItem;
window.getCurrentUser = getCurrentUser;
window.getUserProfile = getUserProfile;