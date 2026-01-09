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
    // Leadership Effectiveness
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
    { id: 'L3', dimension: 'leadership', question: 'My team members would describe my leadership style as:', options: [
      { text: 'Empowering and developmental - I help them grow', score: 20 },
      { text: 'Supportive but sometimes I micromanage', score: 15 },
      { text: 'Directive - I tell them what needs to be done', score: 10 },
      { text: 'Hands-off - They figure things out on their own', score: 5 },
      { text: 'Inconsistent - It depends on the day', score: 0 }
    ]},
    { id: 'L4', dimension: 'leadership', question: 'When making decisions, I:', options: [
      { text: 'Seek input from diverse perspectives and explain my reasoning', score: 20 },
      { text: 'Consult a few trusted advisors', score: 15 },
      { text: 'Make decisions independently then communicate them', score: 10 },
      { text: 'Struggle with decision-making and often second-guess myself', score: 5 },
      { text: 'Avoid making difficult decisions when possible', score: 0 }
    ]},
    { id: 'L5', dimension: 'leadership', question: 'How do you develop leadership skills in others?', options: [
      { text: 'Active mentorship, coaching, and creating growth opportunities', score: 20 },
      { text: 'Provide occasional guidance when asked', score: 15 },
      { text: 'Send them to training programs', score: 10 },
      { text: 'Hope they learn by observing', score: 5 },
      { text: 'I don\'t focus on developing others', score: 0 }
    ]},

    // Culture Health
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
    { id: 'C3', dimension: 'culture', question: 'How would you rate employee engagement in your organization?', options: [
      { text: 'Exceptional - people are passionate and committed', score: 20 },
      { text: 'Good - most people are engaged and motivated', score: 15 },
      { text: 'Average - about half are engaged, half are just getting by', score: 10 },
      { text: 'Low - many people seem disengaged or unhappy', score: 5 },
      { text: 'Critical - high turnover and low morale', score: 0 }
    ]},
    { id: 'C4', dimension: 'culture', question: 'Conflict in our organization is:', options: [
      { text: 'Productive - we address issues directly and constructively', score: 20 },
      { text: 'Manageable - we work through disagreements eventually', score: 15 },
      { text: 'Avoided - we don\'t like confrontation', score: 10 },
      { text: 'Toxic - disagreements turn personal or political', score: 5 },
      { text: 'Destructive - conflict damages relationships and performance', score: 0 }
    ]},
    { id: 'C5', dimension: 'culture', question: 'Recognition and appreciation in our culture:', options: [
      { text: 'Is frequent, specific, and meaningful', score: 20 },
      { text: 'Happens regularly but could be more meaningful', score: 15 },
      { text: 'Is inconsistent - some get recognized, others don\'t', score: 10 },
      { text: 'Is rare - people don\'t feel valued', score: 5 },
      { text: 'Doesn\'t happen - contributions go unnoticed', score: 0 }
    ]},

    // DEI Readiness
    { id: 'D1', dimension: 'dei', question: 'Our leadership and decision-making teams reflect the diversity of those we serve:', options: [
      { text: 'Yes - we have strong representation across multiple dimensions', score: 20 },
      { text: 'Somewhat - we\'re making progress but have gaps', score: 15 },
      { text: 'Limited - diversity exists at lower levels but not in leadership', score: 10 },
      { text: 'No - our leadership lacks diversity', score: 5 },
      { text: 'We haven\'t measured or prioritized this', score: 0 }
    ]},
    { id: 'D2', dimension: 'dei', question: 'We actively work to identify and reduce bias in our systems and processes:', options: [
      { text: 'Yes - we regularly audit hiring, promotion, and other key processes', score: 20 },
      { text: 'Sometimes - we\'ve made some changes but not systematically', score: 15 },
      { text: 'Minimally - we\'ve done training but haven\'t changed systems', score: 10 },
      { text: 'Rarely - we talk about bias but don\'t address it structurally', score: 5 },
      { text: 'No - we haven\'t examined our processes through an equity lens', score: 0 }
    ]},
    { id: 'D3', dimension: 'dei', question: 'People from underrepresented groups in our organization:', options: [
      { text: 'Feel valued, heard, and have equal opportunities to advance', score: 20 },
      { text: 'Generally feel included but face some barriers', score: 15 },
      { text: 'Experience mixed inclusion - depends on their team/manager', score: 10 },
      { text: 'Often feel like outsiders or face microaggressions', score: 5 },
      { text: 'Report feeling excluded or facing discrimination', score: 0 }
    ]},
    { id: 'D4', dimension: 'dei', question: 'Our DEI strategy:', options: [
      { text: 'Is integrated into all business functions with clear goals and accountability', score: 20 },
      { text: 'Exists with some initiatives and progress tracking', score: 15 },
      { text: 'Is mostly training and awareness events', score: 10 },
      { text: 'Is limited to statements and good intentions', score: 5 },
      { text: 'We don\'t have a formal DEI strategy', score: 0 }
    ]},
    { id: 'D5', dimension: 'dei', question: 'When someone raises a concern about bias or exclusion:', options: [
      { text: 'We investigate thoroughly and take meaningful action', score: 20 },
      { text: 'We address it but action is inconsistent', score: 15 },
      { text: 'We listen but often dismiss or minimize concerns', score: 10 },
      { text: 'People are afraid to raise concerns', score: 5 },
      { text: 'Concerns are ignored or the person faces retaliation', score: 0 }
    ]},

    // Change Capability
    { id: 'CH1', dimension: 'change', question: 'When we announce organizational changes:', options: [
      { text: 'We communicate clearly, explain why, and support people through transition', score: 20 },
      { text: 'We communicate the change but implementation is bumpy', score: 15 },
      { text: 'We announce it and expect people to adapt', score: 10 },
      { text: 'Communication is unclear and people are confused', score: 5 },
      { text: 'Change is poorly communicated and met with resistance', score: 0 }
    ]},
    { id: 'CH2', dimension: 'change', question: 'Our track record with change initiatives:', options: [
      { text: 'Most initiatives succeed and create lasting improvement', score: 20 },
      { text: 'Some succeed, others fizzle out', score: 15 },
      { text: 'We start strong but struggle to sustain momentum', score: 10 },
      { text: 'Most initiatives fail or are abandoned', score: 5 },
      { text: 'People are cynical - "this too shall pass"', score: 0 }
    ]},
    { id: 'CH3', dimension: 'change', question: 'Our approach to resistance:', options: [
      { text: 'We treat it as valuable feedback and address underlying concerns', score: 20 },
      { text: 'We acknowledge it and try to bring resisters along', score: 15 },
      { text: 'We try to convince people but get frustrated', score: 10 },
      { text: 'We view resistance as obstruction and push through', score: 5 },
      { text: 'Resistance derails our change efforts', score: 0 }
    ]},
    { id: 'CH4', dimension: 'change', question: 'During times of uncertainty or ambiguity:', options: [
      { text: 'Leaders communicate transparently and maintain trust', score: 20 },
      { text: 'We manage reasonably well but people get anxious', score: 15 },
      { text: 'Communication breaks down and rumors spread', score: 10 },
      { text: 'Leaders disappear or only share good news', score: 5 },
      { text: 'Uncertainty creates panic and paralysis', score: 0 }
    ]},
    { id: 'CH5', dimension: 'change', question: 'We build change capability by:', options: [
      { text: 'Developing change leadership skills at all levels', score: 20 },
      { text: 'Having some change champions or project managers', score: 15 },
      { text: 'Relying on consultants to manage change for us', score: 10 },
      { text: 'Assuming people will adapt on their own', score: 5 },
      { text: 'We don\'t invest in change capability', score: 0 }
    ]},

    // Team Performance
    { id: 'T1', dimension: 'team', question: 'Our team collaborates across functions/departments:', options: [
      { text: 'Seamlessly - collaboration is natural and effective', score: 20 },
      { text: 'Well - we work together when needed', score: 15 },
      { text: 'Sometimes - collaboration is inconsistent', score: 10 },
      { text: 'Poorly - silos and turf protection are common', score: 5 },
      { text: 'Rarely - we operate in complete silos', score: 0 }
    ]},
    { id: 'T2', dimension: 'team', question: 'Accountability on our team:', options: [
      { text: 'Is clear, shared, and people follow through consistently', score: 20 },
      { text: 'Is defined but follow-through varies', score: 15 },
      { text: 'Is unclear - people aren\'t sure who\'s responsible', score: 10 },
      { text: 'Is avoided - no one holds anyone accountable', score: 5 },
      { text: 'Is a problem - missed commitments and finger-pointing', score: 0 }
    ]},
    { id: 'T3', dimension: 'team', question: 'Trust among team members:', options: [
      { text: 'Is strong - people rely on each other completely', score: 20 },
      { text: 'Is good - most people trust each other', score: 15 },
      { text: 'Is limited - trust exists within subgroups but not team-wide', score: 10 },
      { text: 'Is low - people are guarded and don\'t share openly', score: 5 },
      { text: 'Is broken - distrust impacts everything we do', score: 0 }
    ]},
    { id: 'T4', dimension: 'team', question: 'Our team\'s approach to innovation and risk-taking:', options: [
      { text: 'We experiment, learn from failure, and continuously improve', score: 20 },
      { text: 'We try new things but are cautious', score: 15 },
      { text: 'We talk about innovation but rarely act on it', score: 10 },
      { text: 'We avoid risk and stick to what\'s safe', score: 5 },
      { text: 'Failure is punished - people don\'t take risks', score: 0 }
    ]},
    { id: 'T5', dimension: 'team', question: 'Meeting effectiveness:', options: [
      { text: 'Meetings are focused, productive, and lead to clear decisions', score: 20 },
      { text: 'Most meetings are useful but could be better', score: 15 },
      { text: 'Half our meetings feel like a waste of time', score: 10 },
      { text: 'Meetings are poorly run and rarely productive', score: 5 },
      { text: 'People dread meetings and multitask through them', score: 0 }
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
  
  // Update button states
  document.getElementById('prev-btn').disabled = index === 0;
  document.getElementById('next-btn').style.display = index < assessmentData.questions.length - 1 ? 'inline-block' : 'none';
  document.getElementById('submit-btn').style.display = index === assessmentData.questions.length - 1 ? 'inline-block' : 'none';
  
  // Enable next/submit if question is answered
  if (answers[question.id] !== undefined) {
    document.getElementById('next-btn').disabled = false;
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('next-btn').disabled = true;
    document.getElementById('submit-btn').disabled = true;
  }
}

// Select Answer
function selectAnswer(questionId, score) {
  answers[questionId] = score;
  localStorage.setItem('lli_assessment_answers', JSON.stringify(answers));
  
  // Enable navigation
  document.getElementById('next-btn').disabled = false;
  document.getElementById('submit-btn').disabled = false;
}

// Next Question
function nextQuestion() {
  if (currentQuestionIndex < assessmentData.questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Previous Question
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Update Progress
function updateProgress() {
  const totalQuestions = assessmentData.questions.length;
  const currentQuestion = currentQuestionIndex + 1;
  const percentage = Math.round((currentQuestion / totalQuestions) * 100);
  
  document.getElementById('progress-text').textContent = `Question ${currentQuestion} of ${totalQuestions}`;
  document.getElementById('progress-percent').textContent = `${percentage}%`;
  document.getElementById('progress-bar').style.width = `${percentage}%`;
}

// Submit Assessment
function submitAssessment() {
  // Check all questions answered
  const allAnswered = assessmentData.questions.every(q => answers[q.id] !== undefined);
  
  if (!allAnswered) {
    alert('Please answer all questions before submitting.');
    return;
  }
  
  // Calculate results
  const results = calculateResults();
  
  // Save results
  localStorage.setItem('lli_assessment_results', JSON.stringify(results));
  localStorage.setItem('lli_assessment_timestamp', new Date().toISOString());
  
  // Redirect to results
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
  
  // Calculate dimension scores
  assessmentData.questions.forEach(question => {
    const answer = answers[question.id];
    if (answer !== undefined) {
      dimensionScores[question.dimension] += answer;
    }
  });
  
  // Calculate overall score
  const overallScore = Math.round(
    (dimensionScores.leadership + dimensionScores.culture + dimensionScores.dei + 
     dimensionScores.change + dimensionScores.team) / 5
  );
  
  // Determine level
  let level;
  if (overallScore <= 40) level = 'critical';
  else if (overallScore <= 65) level = 'developing';
  else if (overallScore <= 85) level = 'strong';
  else level = 'exceptional';
  
  // Find top strengths and gaps
  const dimensions = Object.entries(dimensionScores).map(([key, score]) => ({ key, score }));
  dimensions.sort((a, b) => b.score - a.score);
  
  const topStrengths = dimensions.slice(0, 2);
  const topGaps = dimensions.slice(-2);
  
  return {
    overallScore,
    dimensionScores,
    level,
    topStrengths,
    topGaps,
    timestamp: new Date().toISOString(),
    answers
  };
}
