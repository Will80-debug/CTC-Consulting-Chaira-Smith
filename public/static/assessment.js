// Leadership Readiness Assessment - Interactive Client-Side Logic
// This file handles the assessment flow, progress tracking, and results calculation

// Assessment Questions Data
const assessmentData = {
  dimensions: [
    { id: 'leadership', name: 'Leadership Effectiveness', icon: 'fa-user-tie', color: 'lli-orange' },
    { id: 'culture', name: 'Culture Health', icon: 'fa-heart-pulse', color: 'lli-teal' },
    { id: 'dei', name: 'DEI Readiness', icon: 'fa-users', color: 'lli-orange' },
    { id: 'change', name: 'Change Capability', icon: 'fa-arrows-rotate', color: 'lli-teal' },
    { id: 'team', name: 'Team Performance', icon: 'fa-people-group', color: 'lli-orange' }
  ],
  
  questions: [
    // Leadership Effectiveness (2 questions)
    { id: 'L1', dimension: 'leadership', question: 'How often do you have meaningful one-on-one conversations with your direct reports?', options: [
      { text: 'Weekly or more often', score: 20 },
      { text: 'Bi-weekly', score: 15 },
      { text: 'Monthly', score: 10 },
      { text: 'Quarterly or less', score: 5 },
      { text: 'Rarely or never', score: 0 }
    ]},
    { id: 'L2', dimension: 'leadership', question: 'When giving feedback, I:', options: [
      { text: 'Provide specific, timely, and actionable guidance regularly', score: 20 },
      { text: 'Give feedback but sometimes delay or sugarcoat difficult messages', score: 15 },
      { text: 'Wait for formal review cycles to provide feedback', score: 10 },
      { text: 'Struggle to give constructive feedback effectively', score: 5 },
      { text: 'Avoid difficult feedback conversations', score: 0 }
    ]},

    // Culture Health (2 questions)
    { id: 'C1', dimension: 'culture', question: 'People in our organization feel safe speaking up about problems or concerns:', options: [
      { text: 'Strongly agree - dissent is welcomed and valued', score: 20 },
      { text: 'Agree - most people feel comfortable speaking up', score: 15 },
      { text: 'Somewhat - depends on the topic and who\'s listening', score: 10 },
      { text: 'Disagree - people stay quiet to avoid backlash', score: 5 },
      { text: 'Strongly disagree - speaking up is risky here', score: 0 }
    ]},
    { id: 'C2', dimension: 'culture', question: 'Our stated values align with our actual behaviors:', options: [
      { text: 'Yes - we live our values daily and hold each other accountable', score: 20 },
      { text: 'Mostly - we try but sometimes fall short', score: 15 },
      { text: 'Partially - there\'s a gap between what we say and do', score: 10 },
      { text: 'Rarely - our values are just words on a wall', score: 5 },
      { text: 'No - significant disconnect between stated and actual culture', score: 0 }
    ]},

    // DEI Readiness (1 question)
    { id: 'D1', dimension: 'dei', question: 'Our leadership and decision-making teams reflect the diversity of those we serve:', options: [
      { text: 'Yes - we have strong representation across multiple dimensions', score: 20 },
      { text: 'Somewhat - we\'re making progress but have gaps', score: 15 },
      { text: 'Limited - diversity exists at lower levels but not in leadership', score: 10 },
      { text: 'No - our leadership lacks diversity', score: 5 },
      { text: 'We haven\'t measured or prioritized this', score: 0 }
    ]},

    // Change Capability (1 question)
    { id: 'CH1', dimension: 'change', question: 'When we announce organizational changes:', options: [
      { text: 'We communicate clearly, explain why, and support people through transition', score: 20 },
      { text: 'We communicate the change but implementation is bumpy', score: 15 },
      { text: 'We announce it and expect people to adapt', score: 10 },
      { text: 'Communication is unclear and people are confused', score: 5 },
      { text: 'Change is poorly communicated and met with resistance', score: 0 }
    ]},

    // Team Performance (1 question)
    { id: 'T1', dimension: 'team', question: 'Our team collaborates across functions/departments:', options: [
      { text: 'Seamlessly - collaboration is natural and effective', score: 20 },
      { text: 'Well - we work together when needed', score: 15 },
      { text: 'Sometimes - collaboration is inconsistent', score: 10 },
      { text: 'Poorly - silos and turf protection are common', score: 5 },
      { text: 'Rarely - we operate in complete silos', score: 0 }
    ]}
  ]
};

// Assessment State
let currentQuestionIndex = 0;
let answers = {};

// Initialize Assessment
document.addEventListener('DOMContentLoaded', () => {
  // Load saved progress if exists
  const savedAnswers = localStorage.getItem('lli_assessment_answers');
  if (savedAnswers) {
    answers = JSON.parse(savedAnswers);
  }
  
  renderQuestion(currentQuestionIndex);
  updateProgress();
  
  // Setup navigation buttons
  document.getElementById('prev-btn').addEventListener('click', previousQuestion);
  document.getElementById('next-btn').addEventListener('click', nextQuestion);
  document.getElementById('submit-btn').addEventListener('click', submitAssessment);
});

// Render Current Question
function renderQuestion(index) {
  const question = assessmentData.questions[index];
  const dimension = assessmentData.dimensions.find(d => d.id === question.dimension);
  
  // Update dimension indicator
  document.getElementById('dimension-icon').className = `fas ${dimension.icon} text-2xl text-${dimension.color} mr-3`;
  document.getElementById('dimension-name').textContent = dimension.name;
  
  // Render question
  const container = document.getElementById('question-container');
  container.innerHTML = `
    <div class="mb-8">
      <p class="text-2xl font-bold text-gray-900 mb-6">${question.question}</p>
      
      <div class="space-y-3">
        ${question.options.map((option, optIndex) => `
          <label class="option-card flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-${dimension.color} hover:bg-gray-50 cursor-pointer transition-all duration-300 ${answers[question.id] === option.score ? `border-${dimension.color} bg-${dimension.color}/10` : ''}">
            <input 
              type="radio" 
              name="question-${question.id}" 
              value="${option.score}"
              class="w-5 h-5 text-${dimension.color} focus:ring-${dimension.color}"
              ${answers[question.id] === option.score ? 'checked' : ''}
              onchange="selectAnswer('${question.id}', ${option.score})"
            />
            <span class="ml-4 text-lg text-gray-800">${option.text}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `;
}

// Select Answer
function selectAnswer(questionId, score) {
  answers[questionId] = score;
  localStorage.setItem('lli_assessment_answers', JSON.stringify(answers));
  
  // Enable next button
  document.getElementById('next-btn').disabled = false;
  
  // If last question, show submit instead of next
  if (currentQuestionIndex === assessmentData.questions.length - 1) {
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('submit-btn').classList.remove('hidden');
  }
}

// Update Progress
function updateProgress() {
  const totalQuestions = assessmentData.questions.length;
  const progress = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);
  
  document.getElementById('progress-text').textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
  document.getElementById('progress-percent').textContent = `${progress}%`;
  document.getElementById('progress-bar').style.width = `${progress}%`;
}

// Previous Question
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
    updateProgress();
    updateNavigationButtons();
  }
}

// Next Question
function nextQuestion() {
  if (currentQuestionIndex < assessmentData.questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
    updateProgress();
    updateNavigationButtons();
  }
}

// Update Navigation Buttons
function updateNavigationButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');
  
  // Previous button
  prevBtn.disabled = currentQuestionIndex === 0;
  
  // Check if current question is answered
  const currentQuestion = assessmentData.questions[currentQuestionIndex];
  const isAnswered = answers[currentQuestion.id] !== undefined;
  
  // Next button
  if (currentQuestionIndex === assessmentData.questions.length - 1) {
    nextBtn.classList.add('hidden');
    submitBtn.classList.remove('hidden');
    submitBtn.disabled = !isAnswered;
  } else {
    nextBtn.classList.remove('hidden');
    submitBtn.classList.add('hidden');
    nextBtn.disabled = !isAnswered;
  }
}

// Submit Assessment
function submitAssessment() {
  // Check if all questions are answered
  const unansweredQuestions = assessmentData.questions.filter(q => answers[q.id] === undefined);
  
  if (unansweredQuestions.length > 0) {
    alert(`Please answer all questions before submitting. ${unansweredQuestions.length} questions remaining.`);
    return;
  }
  
  // Calculate results
  const results = calculateResults();
  
  // Save results to localStorage
  localStorage.setItem('lli_assessment_results', JSON.stringify(results));
  localStorage.setItem('lli_assessment_answers', JSON.stringify(answers));
  
  // Redirect to results page
  window.location.href = '/assessment/results';
}

// Calculate Results
function calculateResults() {
  const dimensionScores = {
    leadership: 0,
    culture: 0,
    dei: 0,
    change: 0,
    team: 0
  };
  
  const dimensionQuestions = {
    leadership: 0,
    culture: 0,
    dei: 0,
    change: 0,
    team: 0
  };
  
  // Sum up scores per dimension
  assessmentData.questions.forEach(question => {
    const answer = answers[question.id];
    if (answer !== undefined) {
      dimensionScores[question.dimension] += answer;
      dimensionQuestions[question.dimension]++;
    }
  });
  
  // Calculate percentages (normalize to 100 scale per dimension)
  const normalizedScores = {};
  Object.keys(dimensionScores).forEach(dim => {
    const maxPossible = dimensionQuestions[dim] * 20; // Max score per question is 20
    normalizedScores[dim] = maxPossible > 0 ? Math.round((dimensionScores[dim] / maxPossible) * 100) : 0;
  });
  
  // Calculate overall score (average of all dimensions)
  const overallScore = Math.round(
    Object.values(normalizedScores).reduce((a, b) => a + b, 0) / Object.keys(normalizedScores).length
  );
  
  // Determine level
  let level, levelTitle, levelDescription, levelColor;
  if (overallScore <= 40) {
    level = 'critical';
    levelTitle = 'Critical - Immediate Action Needed';
    levelDescription = 'Your organization faces significant challenges that require immediate intervention. These gaps are likely impacting performance, retention, and culture.';
    levelColor = 'red';
  } else if (overallScore <= 65) {
    level = 'developing';
    levelTitle = 'Developing - On the Right Track';
    levelDescription = 'You\'re making progress but significant gaps remain. With focused effort, you can move to the next level.';
    levelColor = 'yellow';
  } else if (overallScore <= 85) {
    level = 'strong';
    levelTitle = 'Strong - Above Average';
    levelDescription = 'You\'re performing well above average. Continue building on your strengths while addressing remaining gaps.';
    levelColor = 'green';
  } else {
    level = 'exceptional';
    levelTitle = 'Exceptional - Model Organization';
    levelDescription = 'You\'re operating at the highest level. Share your practices with others and sustain your excellence.';
    levelColor = 'gold';
  }
  
  // Find top strengths and gaps
  const dimensionArray = Object.entries(normalizedScores).map(([key, score]) => ({ dimension: key, score }));
  dimensionArray.sort((a, b) => b.score - a.score);
  
  const topStrengths = dimensionArray.slice(0, 2).map(d => d.dimension);
  const topGaps = dimensionArray.slice(-2).map(d => d.dimension);
  
  return {
    overallScore,
    dimensionScores: normalizedScores,
    level,
    levelTitle,
    levelDescription,
    levelColor,
    topStrengths,
    topGaps
  };
}
