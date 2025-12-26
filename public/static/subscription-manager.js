// Subscription Management System

// Storage keys
const STORAGE_KEYS = {
  LEADERSHIP_VIEWS: 'lli_leadership_views',
  DEI_VIEWS: 'lli_dei_views',
  CHANGE_VIEWS: 'lli_change_views',
  STRATEGIC_VIEWS: 'lli_strategic_views',
  SUBSCRIBED: 'lli_subscribed',
  VIEWED_RESOURCES: 'lli_viewed_resources'
};

// Maximum free views per category
const MAX_FREE_VIEWS = 2;

// Get category from resource URL
function getCategoryFromUrl(url) {
  // Extract category from resource data
  const urlLower = url.toLowerCase();
  
  // Map resource filenames to categories
  const leadershipResources = [
    'emotional-intelligence', 'feedback-framework', 'decision-making', 
    'authentic-leadership', 'delegation-mastery', 'coaching-conversation',
    'conflict-resolution', 'executive-presence', 'strategic-thinking',
    'team-dynamics', 'transformational-leadership', 'change-leadership'
  ];
  
  const deiResources = [
    'unconscious-bias', 'inclusive-language', 'psychological-safety',
    'allyship-action', 'microaggression', 'belonging-framework',
    'equity-audit', 'diverse-hiring', 'retention-strategies',
    'employee-resource', 'cross-cultural', 'gender-equity',
    'racial-justice', 'accessibility', 'lgbtq', 'generational',
    'intersectionality', 'accountability'
  ];
  
  const changeResources = [
    'change-readiness', 'stakeholder-engagement', 'resistance-management',
    'communication-plan', 'transition-roadmap', 'culture-integration',
    'agile-transformation', 'digital-change', 'sustainability'
  ];
  
  const strategicResources = [
    'vision-mission', 'okr-framework', 'swot-analysis',
    'scenario-planning', 'innovation-strategy', 'competitive-analysis',
    'strategic-execution'
  ];
  
  // Check which category this resource belongs to
  if (leadershipResources.some(r => urlLower.includes(r))) return 'leadership';
  if (deiResources.some(r => urlLower.includes(r))) return 'dei';
  if (changeResources.some(r => urlLower.includes(r))) return 'change';
  if (strategicResources.some(r => urlLower.includes(r))) return 'strategic';
  
  return null;
}

// Check if user is subscribed
function isSubscribed() {
  return localStorage.getItem(STORAGE_KEYS.SUBSCRIBED) === 'true';
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
  // If subscribed, allow all access
  if (isSubscribed()) {
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
  
  // Check view count for category
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

// Handle payment method selection
function selectPaymentMethod(method) {
  console.log('Selected payment method:', method);
  
  // Show a demo message (in production, integrate with actual payment processor)
  alert(`Payment integration demo:\n\nYou selected ${method.toUpperCase()} payment.\n\nIn production, this would redirect to:\n- Card: Stripe payment form\n- PayPal: PayPal checkout\n- Apple Pay: Apple Pay sheet\n\nFor demo purposes, I'll activate your subscription now.`);
  
  // Demo: Activate subscription
  activateSubscription();
}

// Activate subscription
function activateSubscription() {
  localStorage.setItem(STORAGE_KEYS.SUBSCRIBED, 'true');
  closeSubscriptionModal();
  
  // Show success message
  showSuccessMessage();
  
  // Reload page to update UI
  setTimeout(() => {
    location.reload();
  }, 2000);
}

// Show success message
function showSuccessMessage() {
  const successDiv = document.createElement('div');
  successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl z-50 animate-slide-in';
  successDiv.innerHTML = `
    <div class="flex items-center">
      <i class="fas fa-check-circle text-2xl mr-3"></i>
      <div>
        <div class="font-bold">Subscription Activated!</div>
        <div class="text-sm">You now have unlimited access to all resources.</div>
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
  if (isSubscribed()) {
    const indicator = document.createElement('div');
    indicator.className = 'fixed bottom-4 right-4 bg-lli-teal text-white px-4 py-2 rounded-full shadow-lg z-40 flex items-center';
    indicator.innerHTML = `
      <i class="fas fa-crown mr-2"></i>
      <span class="font-semibold">Premium Member</span>
    `;
    document.body.appendChild(indicator);
  }
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
});
