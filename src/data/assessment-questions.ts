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
  // Leadership Effectiveness (5 questions)
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
  {
    id: 'L3',
    dimension: 'leadership',
    question: 'My team members would describe my leadership style as:',
    options: [
      { text: 'Empowering and developmental - I help them grow', score: 20 },
      { text: 'Supportive but sometimes I micromanage', score: 15 },
      { text: 'Directive - I tell them what needs to be done', score: 10 },
      { text: 'Hands-off - They figure things out on their own', score: 5 },
      { text: 'Inconsistent - It depends on the day', score: 0 }
    ]
  },
  {
    id: 'L4',
    dimension: 'leadership',
    question: 'When making decisions, I:',
    options: [
      { text: 'Seek input from diverse perspectives and explain my reasoning', score: 20 },
      { text: 'Consult a few trusted advisors', score: 15 },
      { text: 'Make decisions independently then communicate them', score: 10 },
      { text: 'Struggle with decision-making and often second-guess myself', score: 5 },
      { text: 'Avoid making difficult decisions when possible', score: 0 }
    ]
  },
  {
    id: 'L5',
    dimension: 'leadership',
    question: 'How do you develop leadership skills in others?',
    options: [
      { text: 'Active mentorship, coaching, and creating growth opportunities', score: 20 },
      { text: 'Provide occasional guidance when asked', score: 15 },
      { text: 'Send them to training programs', score: 10 },
      { text: 'Hope they learn by observing', score: 5 },
      { text: 'I don\'t focus on developing others', score: 0 }
    ]
  },

  // Culture Health (5 questions)
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
  {
    id: 'C3',
    dimension: 'culture',
    question: 'How would you rate employee engagement in your organization?',
    options: [
      { text: 'Exceptional - people are passionate and committed', score: 20 },
      { text: 'Good - most people are engaged and motivated', score: 15 },
      { text: 'Average - about half are engaged, half are just getting by', score: 10 },
      { text: 'Low - many people seem disengaged or unhappy', score: 5 },
      { text: 'Critical - high turnover and low morale', score: 0 }
    ]
  },
  {
    id: 'C4',
    dimension: 'culture',
    question: 'Conflict in our organization is:',
    options: [
      { text: 'Productive - we address issues directly and constructively', score: 20 },
      { text: 'Manageable - we work through disagreements eventually', score: 15 },
      { text: 'Avoided - we don\'t like confrontation', score: 10 },
      { text: 'Toxic - disagreements turn personal or political', score: 5 },
      { text: 'Destructive - conflict damages relationships and performance', score: 0 }
    ]
  },
  {
    id: 'C5',
    dimension: 'culture',
    question: 'Recognition and appreciation in our culture:',
    options: [
      { text: 'Is frequent, specific, and meaningful', score: 20 },
      { text: 'Happens regularly but could be more meaningful', score: 15 },
      { text: 'Is inconsistent - some get recognized, others don\'t', score: 10 },
      { text: 'Is rare - people don\'t feel valued', score: 5 },
      { text: 'Doesn\'t happen - contributions go unnoticed', score: 0 }
    ]
  },

  // DEI Readiness (5 questions)
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
  {
    id: 'D2',
    dimension: 'dei',
    question: 'We actively work to identify and reduce bias in our systems and processes:',
    options: [
      { text: 'Yes - we regularly audit hiring, promotion, and other key processes', score: 20 },
      { text: 'Sometimes - we\'ve made some changes but not systematically', score: 15 },
      { text: 'Minimally - we\'ve done training but haven\'t changed systems', score: 10 },
      { text: 'Rarely - we talk about bias but don\'t address it structurally', score: 5 },
      { text: 'No - we haven\'t examined our processes through an equity lens', score: 0 }
    ]
  },
  {
    id: 'D3',
    dimension: 'dei',
    question: 'People from underrepresented groups in our organization:',
    options: [
      { text: 'Feel valued, heard, and have equal opportunities to advance', score: 20 },
      { text: 'Generally feel included but face some barriers', score: 15 },
      { text: 'Experience mixed inclusion - depends on their team/manager', score: 10 },
      { text: 'Often feel like outsiders or face microaggressions', score: 5 },
      { text: 'Report feeling excluded or facing discrimination', score: 0 }
    ]
  },
  {
    id: 'D4',
    dimension: 'dei',
    question: 'Our DEI strategy:',
    options: [
      { text: 'Is integrated into all business functions with clear goals and accountability', score: 20 },
      { text: 'Exists with some initiatives and progress tracking', score: 15 },
      { text: 'Is mostly training and awareness events', score: 10 },
      { text: 'Is limited to statements and good intentions', score: 5 },
      { text: 'We don\'t have a formal DEI strategy', score: 0 }
    ]
  },
  {
    id: 'D5',
    dimension: 'dei',
    question: 'When someone raises a concern about bias or exclusion:',
    options: [
      { text: 'We investigate thoroughly and take meaningful action', score: 20 },
      { text: 'We address it but action is inconsistent', score: 15 },
      { text: 'We listen but often dismiss or minimize concerns', score: 10 },
      { text: 'People are afraid to raise concerns', score: 5 },
      { text: 'Concerns are ignored or the person faces retaliation', score: 0 }
    ]
  },

  // Change Capability (5 questions)
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
  {
    id: 'CH2',
    dimension: 'change',
    question: 'Our track record with change initiatives:',
    options: [
      { text: 'Most initiatives succeed and create lasting improvement', score: 20 },
      { text: 'Some succeed, others fizzle out', score: 15 },
      { text: 'We start strong but struggle to sustain momentum', score: 10 },
      { text: 'Most initiatives fail or are abandoned', score: 5 },
      { text: 'People are cynical - "this too shall pass"', score: 0 }
    ]
  },
  {
    id: 'CH3',
    dimension: 'change',
    question: 'Our approach to resistance:',
    options: [
      { text: 'We treat it as valuable feedback and address underlying concerns', score: 20 },
      { text: 'We acknowledge it and try to bring resisters along', score: 15 },
      { text: 'We try to convince people but get frustrated', score: 10 },
      { text: 'We view resistance as obstruction and push through', score: 5 },
      { text: 'Resistance derails our change efforts', score: 0 }
    ]
  },
  {
    id: 'CH4',
    dimension: 'change',
    question: 'During times of uncertainty or ambiguity:',
    options: [
      { text: 'Leaders communicate transparently and maintain trust', score: 20 },
      { text: 'We manage reasonably well but people get anxious', score: 15 },
      { text: 'Communication breaks down and rumors spread', score: 10 },
      { text: 'Leaders disappear or only share good news', score: 5 },
      { text: 'Uncertainty creates panic and paralysis', score: 0 }
    ]
  },
  {
    id: 'CH5',
    dimension: 'change',
    question: 'We build change capability by:',
    options: [
      { text: 'Developing change leadership skills at all levels', score: 20 },
      { text: 'Having some change champions or project managers', score: 15 },
      { text: 'Relying on consultants to manage change for us', score: 10 },
      { text: 'Assuming people will adapt on their own', score: 5 },
      { text: 'We don\'t invest in change capability', score: 0 }
    ]
  },

  // Team Performance (5 questions)
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
  },
  {
    id: 'T2',
    dimension: 'team',
    question: 'Accountability on our team:',
    options: [
      { text: 'Is clear, shared, and people follow through consistently', score: 20 },
      { text: 'Is defined but follow-through varies', score: 15 },
      { text: 'Is unclear - people aren\'t sure who\'s responsible', score: 10 },
      { text: 'Is avoided - no one holds anyone accountable', score: 5 },
      { text: 'Is a problem - missed commitments and finger-pointing', score: 0 }
    ]
  },
  {
    id: 'T3',
    dimension: 'team',
    question: 'Trust among team members:',
    options: [
      { text: 'Is strong - people rely on each other completely', score: 20 },
      { text: 'Is good - most people trust each other', score: 15 },
      { text: 'Is limited - trust exists within subgroups but not team-wide', score: 10 },
      { text: 'Is low - people are guarded and don\'t share openly', score: 5 },
      { text: 'Is broken - distrust impacts everything we do', score: 0 }
    ]
  },
  {
    id: 'T4',
    dimension: 'team',
    question: 'Our team\'s approach to innovation and risk-taking:',
    options: [
      { text: 'We experiment, learn from failure, and continuously improve', score: 20 },
      { text: 'We try new things but are cautious', score: 15 },
      { text: 'We talk about innovation but rarely act on it', score: 10 },
      { text: 'We avoid risk and stick to what\'s safe', score: 5 },
      { text: 'Failure is punished - people don\'t take risks', score: 0 }
    ]
  },
  {
    id: 'T5',
    dimension: 'team',
    question: 'Meeting effectiveness:',
    options: [
      { text: 'Meetings are focused, productive, and lead to clear decisions', score: 20 },
      { text: 'Most meetings are useful but could be better', score: 15 },
      { text: 'Half our meetings feel like a waste of time', score: 10 },
      { text: 'Meetings are poorly run and rarely productive', score: 5 },
      { text: 'People dread meetings and multitask through them', score: 0 }
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
