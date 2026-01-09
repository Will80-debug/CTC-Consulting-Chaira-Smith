// Subscription Management System - 3 Tier Support

// Storage keys
const STORAGE_KEYS = {
  LEADERSHIP_VIEWS: 'lli_leadership_views',
  DEI_VIEWS: 'lli_dei_views',
  CHANGE_VIEWS: 'lli_change_views',
  STRATEGIC_VIEWS: 'lli_strategic_views',
  SUBSCRIPTION_TIER: 'lli_subscription_tier', // 'free', 'professional', 'enterprise'
  VIEWED_RESOURCES: 'lli_viewed_resources'
};

// Subscription tiers
const TIERS = {
  FREE: 'free',
  PROFESSIONAL: 'professional',
  ENTERPRISE: 'enterprise'
};

// Maximum free views per category
const MAX_FREE_VIEWS = 2;

// Get category from resource URL
function getCategoryFromUrl(url) {
  const urlLower = url.toLowerCase();
  
  // Map resource filenames to categories
  const leadershipResources = [
    'emotional-intelligence', 'feedback-framework', 'decision-making', 
    'authentic-leadership', 'delegation-mastery', 'coaching-conversation',
    'conflict-resolution', 'executive-presence', 'strategic-thinking',
    'team-dynamics', 'transformational-leadership', 'leadership-communication',
    'innovation-leadership'
  ];
  
  const deiResources = [
    'unconscious-bias', 'inclusive-language', 'microaggression',
    'allyship-action', 'psychological-safety', 'dei-metrics',
    'equity-audit', 'intersectionality', 'disability-inclusion',
    'lgbtq-workplace', 'cultural-competency', 'racial-equity',
    'gender-equity', 'inclusive-recruitment', 'religious-diversity',
    'generational-diversity', 'neurodiversity', 'dei-storytelling'
  ];
  
  const changeResources = [
    'change-readiness', 'stakeholder-mapping', 'communication-plan',
    'resistance-management', 'change-impact', 'pilot-program',
    'change-champion', 'organizational-culture-shift', 'transition-management'
  ];
  
  const strategicResources = [
    'strategic-planning', 'vision-mission', 'swot-analysis',
    'goal-setting', 'scenario-planning', 'competitive-analysis',
    'resource-allocation'
  ];
  
  // Check which category this resource belongs to
  if (leadershipResources.some(r => urlLower.includes(r))) return 'leadership';
  if (deiResources.some(r => urlLower.includes(r))) return 'dei';
  if (changeResources.some(r => urlLower.includes(r))) return 'change';
  if (strategicResources.some(r => urlLower.includes(r))) return 'strategic';
  
  return null;
}

// Get current subscription tier
function getSubscriptionTier() {
  return localStorage.getItem(STORAGE_KEYS.SUBSCRIPTION_TIER) || TIERS.FREE;
}

// Check if user has paid subscription
function hasPaidSubscription() {
  const tier = getSubscriptionTier();
  return tier === TIERS.PROFESSIONAL || tier === TIERS.ENTERPRISE;
}

// Get view count for category
function getViewCount(category) {
  const key = STORAGE_KEYS[`${category.toUpperCase()}_VIEWS`];
  return parseInt(localStorage.getItem(key) || '0');
}

// Increment view count for category
function incrementViewCount(category) {
  const key = STORAGE_KEYS[`${category.toUpperCase()}_VIEWS`];
  const currentCount = getViewCount(category);
  localStorage.setItem(key, (currentCount + 1).toString());
}

// Track viewed resource
function trackViewedResource(resourceUrl) {
  const viewedResources = JSON.parse(localStorage.getItem(STORAGE_KEYS.VIEWED_RESOURCES) || '[]');
  if (!viewedResources.includes(resourceUrl)) {
    viewedResources.push(resourceUrl);
    localStorage.setItem(STORAGE_KEYS.VIEWED_RESOURCES, JSON.stringify(viewedResources));
  }
}

// Check if resource has been viewed
function hasViewedResource(resourceUrl) {
  const viewedResources = JSON.parse(localStorage.getItem(STORAGE_KEYS.VIEWED_RESOURCES) || '[]');
  return viewedResources.includes(resourceUrl);
}

// Check if user can access resource
function canAccessResource(resourceUrl) {
  // If paid subscription, allow all access
  if (hasPaidSubscription()) {
    return true;
  }
  
  // Get category
  const category = getCategoryFromUrl(resourceUrl);
  if (!category) {
    return true; // Allow if category not found (featured resources)
  }
  
  // Check if already viewed this specific resource
  if (hasViewedResource(resourceUrl)) {
    return true; // Allow re-viewing already seen resources
  }
  
  // Check view count for category (free tier gets 2 per category)
  const viewCount = getViewCount(category);
  return viewCount < MAX_FREE_VIEWS;
}

// Handle resource click
function handleResourceClick(resourceUrl, event) {
  // Check if can access
  if (!canAccessResource(resourceUrl)) {
    event.preventDefault();
    showSubscriptionModal();
    return false;
  }
  
  // Track the view
  const category = getCategoryFromUrl(resourceUrl);
  if (category && !hasViewedResource(resourceUrl)) {
    incrementViewCount(category);
    trackViewedResource(resourceUrl);
  }
  
  return true;
}

// Show subscription modal
function showSubscriptionModal() {
  const modal = document.getElementById('subscription-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

// Close subscription modal
function closeSubscriptionModal() {
  const modal = document.getElementById('subscription-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// Select subscription tier
function selectSubscriptionTier(tier) {
  console.log('Selected tier:', tier);
  
  if (tier === TIERS.PROFESSIONAL) {
    // Redirect to Stripe checkout for Professional tier
    window.location.href = '/checkout?plan=professional';
  } else if (tier === TIERS.ENTERPRISE) {
    // Redirect to contact form for Enterprise tier
    window.location.href = '/contact?plan=enterprise';
  }
}

// Handle payment method selection (legacy - keeping for backwards compatibility)
function selectPaymentMethod(method) {
  console.log('Selected payment method:', method);
  selectSubscriptionTier(TIERS.PROFESSIONAL);
}

// Activate subscription (called after successful payment)
function activateSubscription(tier = TIERS.PROFESSIONAL) {
  localStorage.setItem(STORAGE_KEYS.SUBSCRIPTION_TIER, tier);
  closeSubscriptionModal();
  
  // Show success message
  showSuccessMessage(tier);
  
  // Reload page to update UI
  setTimeout(() => {
    location.reload();
  }, 2000);
}

// Show success message
function showSuccessMessage(tier) {
  const tierName = tier === TIERS.ENTERPRISE ? 'Enterprise' : 'Professional';
  const successDiv = document.createElement('div');
  successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl z-50 animate-slide-in';
  successDiv.innerHTML = `
    <div class="flex items-center">
      <i class="fas fa-check-circle text-2xl mr-3"></i>
      <div>
        <div class="font-bold">${tierName} Subscription Activated!</div>
        <div class="text-sm">You now have ${tier === TIERS.ENTERPRISE ? 'team' : 'unlimited'} access to all resources.</div>
      </div>
    </div>
  `;
  document.body.appendChild(successDiv);
  
  setTimeout(() => {
    successDiv.remove();
  }, 3000);
}

// Add subscription indicator to page
function addSubscriptionIndicator() {
  const tier = getSubscriptionTier();
  
  if (tier === TIERS.PROFESSIONAL) {
    const indicator = document.createElement('div');
    indicator.className = 'fixed bottom-4 right-4 bg-lli-teal text-white px-4 py-2 rounded-full shadow-lg z-40 flex items-center';
    indicator.innerHTML = `
      <i class="fas fa-crown mr-2"></i>
      <span class="font-semibold">Professional Member</span>
    `;
    document.body.appendChild(indicator);
  } else if (tier === TIERS.ENTERPRISE) {
    const indicator = document.createElement('div');
    indicator.className = 'fixed bottom-4 right-4 bg-lli-orange text-white px-4 py-2 rounded-full shadow-lg z-40 flex items-center';
    indicator.innerHTML = `
      <i class="fas fa-star mr-2"></i>
      <span class="font-semibold">Enterprise Member</span>
    `;
    document.body.appendChild(indicator);
  }
}

// Get remaining free views for display
function getRemainingViews() {
  return {
    leadership: MAX_FREE_VIEWS - getViewCount('leadership'),
    dei: MAX_FREE_VIEWS - getViewCount('dei'),
    change: MAX_FREE_VIEWS - getViewCount('change'),
    strategic: MAX_FREE_VIEWS - getViewCount('strategic')
  };
}

// Reset subscription (for testing)
function resetSubscription() {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
  location.reload();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  addSubscriptionIndicator();
  
  // Close modal on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSubscriptionModal();
    }
  });
  
  // Add debug info to console
  if (window.location.hostname === 'localhost' || window.location.hostname.includes('e2b.dev')) {
    console.log('🔐 Subscription Debug Info:');
    console.log('Current Tier:', getSubscriptionTier());
    console.log('Remaining Views:', getRemainingViews());
    console.log('Has Paid Subscription:', hasPaidSubscription());
    console.log('To reset subscription: resetSubscription()');
  }
});
