// Leadership Readiness Assessment - Results Page Logic
// This file handles displaying and animating the assessment results

// Dimension metadata
const dimensionInfo = {
  leadership: {
    name: 'Leadership Effectiveness',
    icon: 'fa-user-tie',
    description: 'Your ability to guide, develop, and inspire others',
    recommendations: [
      'Schedule monthly one-on-ones with direct reports',
      'Practice giving specific, timely feedback',
      'Delegate more to develop your team',
      'Seek 360-degree feedback from your team'
    ]
  },
  culture: {
    name: 'Culture Health',
    icon: 'fa-heart-pulse',
    description: 'The strength of your organizational culture',
    recommendations: [
      'Conduct anonymous culture surveys',
      'Address toxic behaviors immediately',
      'Recognize and celebrate behaviors that align with values',
      'Create forums for open dialogue'
    ]
  },
  dei: {
    name: 'DEI Readiness',
    icon: 'fa-users',
    description: 'Your commitment to diversity, equity, and inclusion',
    recommendations: [
      'Audit hiring and promotion processes for bias',
      'Create mentorship programs for underrepresented groups',
      'Establish clear DEI goals with accountability',
      'Train leaders on inclusive leadership practices'
    ]
  },
  change: {
    name: 'Change Capability',
    icon: 'fa-arrows-rotate',
    description: 'Your organization\'s ability to navigate transformation',
    recommendations: [
      'Develop change champions at all levels',
      'Communicate the "why" behind changes clearly',
      'Create feedback loops during transitions',
      'Celebrate small wins during change initiatives'
    ]
  },
  team: {
    name: 'Team Performance',
    icon: 'fa-people-group',
    description: 'How effectively your team collaborates and executes',
    recommendations: [
      'Define clear roles and accountability',
      'Run team effectiveness assessments',
      'Create cross-functional collaboration opportunities',
      'Improve meeting effectiveness and structure'
    ]
  }
};

// Level descriptions
const levelDescriptions = {
  critical: {
    title: 'Critical - Immediate Action Required',
    description: 'Your results indicate significant gaps in leadership effectiveness. Without intervention, these issues will continue to impact performance, retention, and culture. The good news? You\'ve identified the problem. Now let\'s fix it.',
    color: '#DC2626',
    bgColor: '#FEE2E2'
  },
  developing: {
    title: 'Developing - Strong Foundation, Key Gaps',
    description: 'You have some leadership strengths, but critical gaps are holding you back. With focused development in key areas, you can move from adequate to exceptional. Your awareness is the first step toward transformation.',
    color: '#F59E0B',
    bgColor: '#FEF3C7'
  },
  strong: {
    title: 'Strong - Solid Leadership with Growth Opportunities',
    description: 'You\'re doing well in most areas. Your team likely respects you and your organization is performing adequately. But "adequate" isn\'t exceptional. Closing a few specific gaps will elevate you from good to great.',
    color: '#10B981',
    bgColor: '#D1FAE5'
  },
  exceptional: {
    title: 'Exceptional - Leading-Edge Performance',
    description: 'You\'re operating at a high level across all dimensions. Your leadership is creating measurable impact. Continue refining your approach, develop other leaders, and share your expertise. Consider speaking, coaching, or consulting opportunities.',
    color: '#0E7490',
    bgColor: '#CFFAFE'
  }
};

// Initialize results page
document.addEventListener('DOMContentLoaded', () => {
  // Load results from localStorage
  const resultsJSON = localStorage.getItem('lli_assessment_results');
  const timestamp = localStorage.getItem('lli_assessment_timestamp');
  
  if (!resultsJSON) {
    // No results found, redirect to assessment start
    window.location.href = '/assessment';
    return;
  }
  
  const results = JSON.parse(resultsJSON);
  
  // Check if email was already captured
  const emailCaptured = localStorage.getItem('lli_assessment_email_captured');
  
  if (emailCaptured) {
    // Email already captured, show results immediately
    showResults(results, timestamp);
  } else {
    // Show email modal first
    showEmailModal(results, timestamp);
  }
});

// Show Email Modal
function showEmailModal(results, timestamp) {
  document.getElementById('email-modal').style.display = 'flex';
  document.getElementById('loading').style.display = 'none';
  
  // Setup form submission
  document.getElementById('email-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const organization = document.getElementById('user-organization').value;
    
    // Show loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
    submitButton.disabled = true;
    
    try {
      // Send email via API
      const response = await fetch('/api/send-assessment-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          organization,
          results,
          timestamp
        })
      });
      
      if (response.ok) {
        // Mark email as captured
        localStorage.setItem('lli_assessment_email_captured', 'true');
        localStorage.setItem('lli_assessment_user_email', email);
        
        // Show success message
        document.getElementById('email-form').style.display = 'none';
        document.getElementById('email-success').classList.remove('hidden');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email send error:', error);
      alert('There was an error sending your report. You can still view your results below.');
      closeEmailModal(results, timestamp);
    } finally {
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    }
  });
}

// Skip Email
window.skipEmail = function() {
  const results = JSON.parse(localStorage.getItem('lli_assessment_results'));
  const timestamp = localStorage.getItem('lli_assessment_timestamp');
  closeEmailModal(results, timestamp);
};

// Close Email Modal
window.closeEmailModal = function(results, timestamp) {
  if (!results) {
    results = JSON.parse(localStorage.getItem('lli_assessment_results'));
    timestamp = localStorage.getItem('lli_assessment_timestamp');
  }
  document.getElementById('email-modal').style.display = 'none';
  showResults(results, timestamp);
};

// Show Results
function showResults(results, timestamp) {
  // Hide email modal and loading
  document.getElementById('email-modal').style.display = 'none';
  document.getElementById('loading').style.display = 'none';
  document.getElementById('results-container').classList.remove('hidden');
  
  // Render results with animations
  renderResults(results, timestamp);
}

// Render Results
function renderResults(results, timestamp) {
  const { overallScore, dimensionScores, level, topStrengths, topGaps } = results;
  const levelInfo = levelDescriptions[level];
  
  // 1. Display completion date
  const date = new Date(timestamp);
  document.getElementById('completion-date').textContent = 
    `Completed on ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
  
  // 2. Animate overall score
  animateScore(overallScore);
  
  // 3. Display level badge
  const levelBadge = document.getElementById('level-badge');
  levelBadge.style.backgroundColor = levelInfo.bgColor;
  document.getElementById('level-text').textContent = levelInfo.title;
  document.getElementById('level-text').style.color = levelInfo.color;
  document.getElementById('level-description').textContent = levelInfo.description;
  
  // 4. Animate dimension scores
  setTimeout(() => {
    animateDimensionScores(dimensionScores);
  }, 1000);
  
  // 5. Display strengths and gaps
  setTimeout(() => {
    displayStrengthsAndGaps(topStrengths, topGaps);
  }, 2000);
  
  // 6. Display recommendations
  setTimeout(() => {
    displayRecommendations(topGaps, level);
  }, 2500);
}

// Animate Overall Score
function animateScore(targetScore) {
  const scoreElement = document.getElementById('overall-score');
  const circle = document.getElementById('score-circle');
  const circumference = 2 * Math.PI * 90;
  
  // Animate number
  let currentScore = 0;
  const duration = 2000;
  const increment = targetScore / (duration / 16);
  
  const numberInterval = setInterval(() => {
    currentScore += increment;
    if (currentScore >= targetScore) {
      currentScore = targetScore;
      clearInterval(numberInterval);
    }
    scoreElement.textContent = Math.round(currentScore);
  }, 16);
  
  // Animate circle
  const offset = circumference - (targetScore / 100) * circumference;
  setTimeout(() => {
    circle.style.strokeDashoffset = offset;
  }, 100);
}

// Animate Dimension Scores
function animateDimensionScores(scores) {
  Object.entries(scores).forEach(([dimension, score]) => {
    const scoreElement = document.getElementById(`${dimension}-score`);
    const barElement = document.getElementById(`${dimension}-bar`);
    
    // Animate number
    let current = 0;
    const duration = 1500;
    const increment = score / (duration / 16);
    
    const interval = setInterval(() => {
      current += increment;
      if (current >= score) {
        current = score;
        clearInterval(interval);
      }
      scoreElement.textContent = Math.round(current);
    }, 16);
    
    // Animate bar
    setTimeout(() => {
      barElement.style.width = `${score}%`;
    }, 100);
  });
}

// Display Strengths and Gaps
function displayStrengthsAndGaps(strengths, gaps) {
  // Top Strengths
  const strengthsList = document.getElementById('strengths-list');
  strengthsList.innerHTML = strengths.map(item => {
    const info = dimensionInfo[item.key];
    return `
      <div class="flex items-start animate-fade-in">
        <i class="fas ${info.icon} text-xl text-green-600 mr-3 mt-1"></i>
        <div>
          <p class="font-bold text-gray-900">${info.name}</p>
          <p class="text-sm text-gray-600">${item.score}/100 - ${info.description}</p>
        </div>
      </div>
    `;
  }).join('');
  
  // Top Gaps
  const gapsList = document.getElementById('gaps-list');
  gapsList.innerHTML = gaps.map(item => {
    const info = dimensionInfo[item.key];
    return `
      <div class="flex items-start animate-fade-in">
        <i class="fas ${info.icon} text-xl text-lli-orange mr-3 mt-1"></i>
        <div>
          <p class="font-bold text-gray-900">${info.name}</p>
          <p class="text-sm text-gray-600">${item.score}/100 - Focus here for maximum impact</p>
        </div>
      </div>
    `;
  }).join('');
}

// Display Recommendations
function displayRecommendations(gaps, level) {
  const recommendationsList = document.getElementById('recommendations-list');
  
  // Get recommendations for top 2 gaps
  const allRecommendations = [];
  gaps.forEach(gap => {
    const info = dimensionInfo[gap.key];
    info.recommendations.forEach(rec => {
      allRecommendations.push({
        dimension: info.name,
        icon: info.icon,
        recommendation: rec
      });
    });
  });
  
  // Add level-specific recommendations
  if (level === 'critical') {
    allRecommendations.push({
      dimension: 'Immediate Action',
      icon: 'fa-triangle-exclamation',
      recommendation: 'Schedule a free consultation with LLI Consulting to create an urgent action plan'
    });
  } else if (level === 'developing') {
    allRecommendations.push({
      dimension: 'Accelerate Growth',
      icon: 'fa-rocket',
      recommendation: 'Consider Executive Coaching to accelerate your leadership development'
    });
  } else if (level === 'strong') {
    allRecommendations.push({
      dimension: 'Next Level',
      icon: 'fa-arrow-trend-up',
      recommendation: 'Explore our Professional Membership for ongoing development and resources'
    });
  } else {
    allRecommendations.push({
      dimension: 'Share Your Expertise',
      icon: 'fa-lightbulb',
      recommendation: 'Consider becoming a speaker or mentor to help other leaders grow'
    });
  }
  
  // Render recommendations
  recommendationsList.innerHTML = allRecommendations.map((item, index) => `
    <div class="flex items-start p-4 bg-gray-50 rounded-xl animate-fade-in" style="animation-delay: ${index * 100}ms">
      <div class="flex-shrink-0">
        <div class="w-10 h-10 bg-lli-teal rounded-full flex items-center justify-center">
          <i class="fas ${item.icon} text-white"></i>
        </div>
      </div>
      <div class="ml-4">
        <p class="font-semibold text-gray-900">${item.dimension}</p>
        <p class="text-gray-700">${item.recommendation}</p>
      </div>
    </div>
  `).join('');
}

// Social Sharing Functions
function shareOnLinkedIn() {
  const url = encodeURIComponent(window.location.origin + '/assessment');
  const text = encodeURIComponent('I just completed the Leadership Readiness Assessment from @LLIConsultingGroup. Great insights into leadership effectiveness, culture health, and DEI readiness!');
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${text}`, '_blank');
}

function shareOnTwitter() {
  const url = encodeURIComponent(window.location.origin + '/assessment');
  const text = encodeURIComponent('I just completed the Leadership Readiness Assessment - get insights on your leadership effectiveness, culture health, and more!');
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}
