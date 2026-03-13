// Leadership Readiness Assessment Questions and Scoring

export interface AssessmentQuestion {
  id: string;
  dimension: 'leadership' | 'culture' | 'dei' | 'change' | 'team';
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface AssessmentDimension {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const dimensions: AssessmentDimension[] = [
  {
    id: 'leadership',
    name: 'Leadership Effectiveness',
    description: 'Your ability to inspire, guide, and develop others',
    icon: 'fa-user-tie',
    color: 'lli-orange'
  },
  {
    id: 'culture',
    name: 'Culture Health',
    description: 'The strength and alignment of your organizational culture',
    icon: 'fa-heart-pulse',
    color: 'lli-teal'
  },
  {
    id: 'dei',
    name: 'DEI Readiness',
    description: 'Your commitment to diversity, equity, and inclusion',
    icon: 'fa-users',
    color: 'lli-orange'
  },
  {
    id: 'change',
    name: 'Change Capability',
    description: 'Your capacity to lead and adapt through transformation',
    icon: 'fa-arrows-rotate',
    color: 'lli-teal'
  },
  {
    id: 'team',
    name: 'Team Performance',
    description: 'How effectively your team collaborates and delivers',
    icon: 'fa-people-group',
    color: 'lli-orange'
  }
];

export const assessmentQuestions: AssessmentQuestion[] = [
  // Leadership Effectiveness (2 questions)
  {
    id: 'L1',
    dimension: 'leadership',
    question: 'How often do you have meaningful one-on-one conversations with your direct reports?',
    options: [
      { text: 'Weekly or more often', score: 20 },
      { text: 'Bi-weekly', score: 15 },
      { text: 'Monthly', score: 10 },
      { text: 'Quarterly or less', score: 5 },
      { text: 'Rarely or never', score: 0 }
    ]
  },
  {
    id: 'L2',
    dimension: 'leadership',
    question: 'When giving feedback, I:',
    options: [
      { text: 'Provide specific, timely, and actionable guidance regularly', score: 20 },
      { text: 'Give feedback but sometimes delay or sugarcoat difficult messages', score: 15 },
      { text: 'Wait for formal review cycles to provide feedback', score: 10 },
      { text: 'Struggle to give constructive feedback effectively', score: 5 },
      { text: 'Avoid difficult feedback conversations', score: 0 }
    ]
  },

  // Culture Health (2 questions)
  {
    id: 'C1',
    dimension: 'culture',
    question: 'People in our organization feel safe speaking up about problems or concerns:',
    options: [
      { text: 'Strongly agree - dissent is welcomed and valued', score: 20 },
      { text: 'Agree - most people feel comfortable speaking up', score: 15 },
      { text: 'Somewhat - depends on the topic and who\'s listening', score: 10 },
      { text: 'Disagree - people stay quiet to avoid backlash', score: 5 },
      { text: 'Strongly disagree - speaking up is risky here', score: 0 }
    ]
  },
  {
    id: 'C2',
    dimension: 'culture',
    question: 'Our stated values align with our actual behaviors:',
    options: [
      { text: 'Yes - we live our values daily and hold each other accountable', score: 20 },
      { text: 'Mostly - we try but sometimes fall short', score: 15 },
      { text: 'Partially - there\'s a gap between what we say and do', score: 10 },
      { text: 'Rarely - our values are just words on a wall', score: 5 },
      { text: 'No - significant disconnect between stated and actual culture', score: 0 }
    ]
  },

  // DEI Readiness (1 question)
  {
    id: 'D1',
    dimension: 'dei',
    question: 'Our leadership and decision-making teams reflect the diversity of those we serve:',
    options: [
      { text: 'Yes - we have strong representation across multiple dimensions', score: 20 },
      { text: 'Somewhat - we\'re making progress but have gaps', score: 15 },
      { text: 'Limited - diversity exists at lower levels but not in leadership', score: 10 },
      { text: 'No - our leadership lacks diversity', score: 5 },
      { text: 'We haven\'t measured or prioritized this', score: 0 }
    ]
  },

  // Change Capability (1 question)
  {
    id: 'CH1',
    dimension: 'change',
    question: 'When we announce organizational changes:',
    options: [
      { text: 'We communicate clearly, explain why, and support people through transition', score: 20 },
      { text: 'We communicate the change but implementation is bumpy', score: 15 },
      { text: 'We announce it and expect people to adapt', score: 10 },
      { text: 'Communication is unclear and people are confused', score: 5 },
      { text: 'Change is poorly communicated and met with resistance', score: 0 }
    ]
  },

  // Team Performance (1 question)
  {
    id: 'T1',
    dimension: 'team',
    question: 'Our team collaborates across functions/departments:',
    options: [
      { text: 'Seamlessly - collaboration is natural and effective', score: 20 },
      { text: 'Well - we work together when needed', score: 15 },
      { text: 'Sometimes - collaboration is inconsistent', score: 10 },
      { text: 'Poorly - silos and turf protection are common', score: 5 },
      { text: 'Rarely - we operate in complete silos', score: 0 }
    ]
  }
];

export interface AssessmentResult {
  overallScore: number;
  dimensionScores: {
    leadership: number;
    culture: number;
    dei: number;
    change: number;
    team: number;
  };
  level: 'critical' | 'developing' | 'strong' | 'exceptional';
  topStrengths: string[];
  topGaps: string[];
  recommendations: string[];
}

export function calculateResults(answers: Record<string, number>): AssessmentResult {
  const dimensionScores = {
    leadership: 0,
    culture: 0,
    dei: 0,
    change: 0,
    team: 0
  };

  // Calculate dimension scores
  assessmentQuestions.forEach((question) => {
    const answer = answers[question.id];
    if (answer !== undefined) {
      dimensionScores[question.dimension] += answer;
    }
  });

  // Calculate overall score (average of all dimensions)
  const overallScore = Math.round(
    (dimensionScores.leadership + 
     dimensionScores.culture + 
     dimensionScores.dei + 
     dimensionScores.change + 
     dimensionScores.team) / 5
  );

  // Determine level
  let level: 'critical' | 'developing' | 'strong' | 'exceptional';
  if (overallScore <= 40) level = 'critical';
  else if (overallScore <= 65) level = 'developing';
  else if (overallScore <= 85) level = 'strong';
  else level = 'exceptional';

  // Identify top strengths and gaps
  const dimensions = Object.entries(dimensionScores).map(([key, score]) => ({
    key: key as keyof typeof dimensionScores,
    score
  }));

  dimensions.sort((a, b) => b.score - a.score);
  const topStrengths = dimensions.slice(0, 2).map(d => 
    dimensions.find(dim => dim.key === d.key)?.key || ''
  );
  const topGaps = dimensions.slice(-2).map(d => 
    dimensions.find(dim => dim.key === d.key)?.key || ''
  );

  // Generate recommendations based on gaps
  const recommendations = topGaps.map(gap => {
    switch(gap) {
      case 'leadership':
        return 'Focus on developing your leadership effectiveness through coaching and feedback skills';
      case 'culture':
        return 'Invest in building psychological safety and values alignment';
      case 'dei':
        return 'Create a systematic DEI strategy with clear goals and accountability';
      case 'change':
        return 'Build change management capability and transparent communication';
      case 'team':
        return 'Strengthen team collaboration, trust, and accountability systems';
      default:
        return 'Continue building organizational capability';
    }
  });

  return {
    overallScore,
    dimensionScores,
    level,
    topStrengths,
    topGaps,
    recommendations
  };
}

export function getLevelDescription(level: string): { title: string; description: string; color: string } {
  switch(level) {
    case 'critical':
      return {
        title: 'Critical - Immediate Action Needed',
        description: 'Your organization faces significant challenges that require immediate intervention. These gaps are likely impacting performance, retention, and culture.',
        color: 'red'
      };
    case 'developing':
      return {
        title: 'Developing - On the Right Track',
        description: 'You\'re making progress but significant gaps remain. With focused effort, you can move to the next level.',
        color: 'yellow'
      };
    case 'strong':
      return {
        title: 'Strong - Above Average',
        description: 'You\'re performing well above average. Continue building on your strengths while addressing remaining gaps.',
        color: 'green'
      };
    case 'exceptional':
      return {
        title: 'Exceptional - Model Organization',
        description: 'You\'re operating at the highest level. Share your practices with others and sustain your excellence.',
        color: 'gold'
      };
    default:
      return {
        title: 'Unknown',
        description: '',
        color: 'gray'
      };
  }
}
