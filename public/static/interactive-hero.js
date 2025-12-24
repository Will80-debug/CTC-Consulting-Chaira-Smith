// Interactive Hero - Assessment Modals and Count-up Animations

// Assessment Modal Logic
let currentAssessmentStep = 1;
let assessmentAnswers = {};

function openAssessmentModal() {
  document.getElementById('assessment-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  showAssessmentStep(1);
}

function closeAssessmentModal() {
  document.getElementById('assessment-modal').classList.add('hidden');
  document.body.style.overflow = 'auto';
  currentAssessmentStep = 1;
  assessmentAnswers = {};
}

function showAssessmentStep(step) {
  // Hide all steps
  for (let i = 1; i <= 6; i++) {
    const stepEl = document.getElementById(`assessment-step-${i}`);
    if (stepEl) stepEl.classList.add('hidden');
  }
  
  // Show current step
  const currentStepEl = document.getElementById(`assessment-step-${step}`);
  if (currentStepEl) {
    currentStepEl.classList.remove('hidden');
    currentAssessmentStep = step;
  }
  
  // Update progress
  updateAssessmentProgress(step);
}

function updateAssessmentProgress(step) {
  const progress = (step / 6) * 100;
  const progressBar = document.getElementById('assessment-progress-bar');
  const progressText = document.getElementById('assessment-progress-text');
  
  if (progressBar) progressBar.style.width = `${progress}%`;
  if (progressText) progressText.textContent = `Step ${step} of 6`;
}

function selectAssessmentAnswer(step, answer) {
  assessmentAnswers[`step${step}`] = answer;
  
  // Visual feedback
  const cards = document.querySelectorAll(`#assessment-step-${step} .assessment-card`);
  cards.forEach(card => {
    card.classList.remove('ring-4', 'ring-lli-teal', 'bg-teal-50');
  });
  
  event.target.closest('.assessment-card').classList.add('ring-4', 'ring-lli-teal', 'bg-teal-50');
  
  // Auto-advance after short delay
  setTimeout(() => {
    if (step < 6) {
      showAssessmentStep(step + 1);
    } else {
      showAssessmentResults();
    }
  }, 500);
}

function showAssessmentResults() {
  // Hide all steps
  for (let i = 1; i <= 6; i++) {
    const stepEl = document.getElementById(`assessment-step-${i}`);
    if (stepEl) stepEl.classList.add('hidden');
  }
  
  // Show results
  const resultsEl = document.getElementById('assessment-results');
  if (resultsEl) resultsEl.classList.remove('hidden');
  
  // Update progress to 100%
  updateAssessmentProgress(6);
}

// Fit Check Modal Logic
let currentFitCheckStep = 1;
let fitCheckAnswers = {};

function openFitCheckModal() {
  document.getElementById('fitcheck-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  showFitCheckStep(1);
}

function closeFitCheckModal() {
  document.getElementById('fitcheck-modal').classList.add('hidden');
  document.body.style.overflow = 'auto';
  currentFitCheckStep = 1;
  fitCheckAnswers = {};
}

function showFitCheckStep(step) {
  // Hide all steps
  for (let i = 1; i <= 3; i++) {
    const stepEl = document.getElementById(`fitcheck-step-${i}`);
    if (stepEl) stepEl.classList.add('hidden');
  }
  
  // Show current step
  const currentStepEl = document.getElementById(`fitcheck-step-${step}`);
  if (currentStepEl) {
    currentStepEl.classList.remove('hidden');
    currentFitCheckStep = step;
  }
  
  // Update progress
  updateFitCheckProgress(step);
}

function updateFitCheckProgress(step) {
  const progress = (step / 3) * 100;
  const progressBar = document.getElementById('fitcheck-progress-bar');
  const progressText = document.getElementById('fitcheck-progress-text');
  
  if (progressBar) progressBar.style.width = `${progress}%`;
  if (progressText) progressText.textContent = `Step ${step} of 3`;
}

function selectFitCheckAnswer(step, answer) {
  fitCheckAnswers[`step${step}`] = answer;
  
  // Visual feedback
  const cards = document.querySelectorAll(`#fitcheck-step-${step} .fitcheck-card`);
  cards.forEach(card => {
    card.classList.remove('ring-4', 'ring-lli-orange', 'bg-orange-50');
  });
  
  event.target.closest('.fitcheck-card').classList.add('ring-4', 'ring-lli-orange', 'bg-orange-50');
  
  // Auto-advance after short delay
  setTimeout(() => {
    if (step < 3) {
      showFitCheckStep(step + 1);
    } else {
      showFitCheckResults();
    }
  }, 500);
}

function showFitCheckResults() {
  // Hide all steps
  for (let i = 1; i <= 3; i++) {
    const stepEl = document.getElementById(`fitcheck-step-${i}`);
    if (stepEl) stepEl.classList.add('hidden');
  }
  
  // Show results
  const resultsEl = document.getElementById('fitcheck-results');
  if (resultsEl) resultsEl.classList.remove('hidden');
  
  // Update progress to 100%
  updateFitCheckProgress(3);
}

// Count-up Animation for Stats
function animateCountUp(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    // Format number with appropriate suffix
    if (target >= 1000) {
      element.textContent = Math.floor(current).toLocaleString() + '+';
    } else if (target < 100) {
      element.textContent = Math.floor(current) + '%';
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, 16);
}

// Intersection Observer for Count-up Animation
function initCountUpAnimations() {
  const statElements = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const target = parseInt(entry.target.dataset.target);
        animateCountUp(entry.target, target);
        entry.target.dataset.animated = 'true';
      }
    });
  }, { threshold: 0.5 });
  
  statElements.forEach(el => observer.observe(el));
}

// LLI Framework Interactive Journey Functions
let activeFrameworkCard = null;

function toggleFrameworkCard(cardName) {
  const cardContent = document.getElementById(`framework-${cardName}`);
  
  if (!cardContent) return;
  
  // If clicking the same card, collapse it
  if (activeFrameworkCard === cardName) {
    cardContent.classList.add('hidden');
    activeFrameworkCard = null;
    return;
  }
  
  // Hide all framework cards
  ['listen', 'learn', 'implement'].forEach(name => {
    const el = document.getElementById(`framework-${name}`);
    if (el) el.classList.add('hidden');
  });
  
  // Show clicked card with smooth reveal
  cardContent.classList.remove('hidden');
  activeFrameworkCard = cardName;
  
  // Smooth scroll to the expanded content
  setTimeout(() => {
    cardContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
  
  // Add icon rotation animation
  document.querySelectorAll('.framework-icon').forEach(icon => {
    icon.style.transform = 'rotate(0deg)';
  });
  
  const activeIcon = document.querySelector(`#framework-${cardName}`)?.closest('.framework-card')?.querySelector('.framework-icon');
  if (activeIcon) {
    activeIcon.style.transition = 'transform 0.3s ease';
    activeIcon.style.transform = 'rotate(360deg)';
  }
}

function scrollToService(serviceId) {
  const serviceSection = document.getElementById(serviceId);
  
  if (serviceSection) {
    // Scroll to service section
    serviceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Highlight the service card with pulse animation
    serviceSection.classList.add('ring-4', 'ring-lli-teal', 'ring-opacity-50');
    
    setTimeout(() => {
      serviceSection.classList.remove('ring-4', 'ring-lli-teal', 'ring-opacity-50');
    }, 2000);
  } else {
    // If service section doesn't exist yet, scroll to services area
    const servicesArea = document.querySelector('[id*="service"]') || 
                         document.querySelector('.service-card') ||
                         document.querySelector('main');
    
    if (servicesArea) {
      servicesArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

// Expertise Tabs Functions
let activeExpertiseTab = 'coaching';

function showExpertiseTab(tabName) {
  // Hide all content panels
  document.querySelectorAll('.expertise-content').forEach(panel => {
    panel.classList.add('hidden');
  });
  
  // Show selected panel
  const targetPanel = document.getElementById(`tab-${tabName}`);
  if (targetPanel) {
    targetPanel.classList.remove('hidden');
  }
  
  // Update tab button styles
  document.querySelectorAll('.expertise-tab').forEach(tab => {
    if (tab.getAttribute('data-tab') === tabName) {
      // Active state
      if (tabName === 'coaching' || tabName === 'workshops' || tabName === 'culture') {
        tab.className = 'expertise-tab px-6 py-3 rounded-lg font-bold transition-all duration-200 bg-lli-teal text-white';
      } else {
        tab.className = 'expertise-tab px-6 py-3 rounded-lg font-bold transition-all duration-200 bg-lli-orange text-white';
      }
    } else {
      // Inactive state
      tab.className = 'expertise-tab px-6 py-3 rounded-lg font-bold transition-all duration-200 bg-gray-200 text-gray-700 hover:bg-gray-300';
    }
  });
  
  activeExpertiseTab = tabName;
}

// Case Study Slider Functions
function scrollCaseStudy(direction) {
  const slider = document.getElementById('case-study-slider');
  if (!slider) return;
  
  const cardWidth = 450; // Approximate width of one card + gap
  const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
  
  slider.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initCountUpAnimations();
  
  // Close modals on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAssessmentModal();
      closeFitCheckModal();
    }
  });
  
  // Add hover effects to framework cards
  document.querySelectorAll('.framework-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const icon = card.querySelector('.framework-icon');
      if (icon && activeFrameworkCard !== card.id) {
        icon.style.transition = 'transform 0.3s ease';
        icon.style.transform = 'scale(1.1) rotate(5deg)';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      const icon = card.querySelector('.framework-icon');
      if (icon && activeFrameworkCard !== card.id) {
        icon.style.transform = 'scale(1) rotate(0deg)';
      }
    });
  });
  
  // Initialize first expertise tab
  showExpertiseTab('coaching');
  
  // Initialize video auto-pause functionality
  initVideoAutoPause();
});

// Video Auto-Pause Functionality
// Automatically pause all videos when user switches tabs or clicks outside the page
function initVideoAutoPause() {
  // Pause all videos when page visibility changes (tab switch)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      pauseAllVideos();
    }
  });
  
  // Pause all videos when window loses focus (click outside)
  window.addEventListener('blur', () => {
    pauseAllVideos();
  });
  
  // Optional: Resume videos when page becomes visible again (uncomment if desired)
  // window.addEventListener('focus', () => {
  //   // You can add logic here to resume videos if needed
  // });
}

function pauseAllVideos() {
  // Pause all HTML5 video elements
  const videoElements = document.querySelectorAll('video');
  videoElements.forEach(video => {
    if (!video.paused) {
      video.pause();
    }
  });
  
  // Pause all YouTube iframe videos
  const youtubeIframes = document.querySelectorAll('iframe[src*="youtube.com"]');
  youtubeIframes.forEach(iframe => {
    // Send postMessage to pause YouTube videos
    // This requires YouTube's iframe API
    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  });
  
  // Pause all Vimeo iframe videos (if any)
  const vimeoIframes = document.querySelectorAll('iframe[src*="vimeo.com"]');
  vimeoIframes.forEach(iframe => {
    iframe.contentWindow.postMessage('{"method":"pause"}', '*');
  });
}