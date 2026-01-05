// Resource Library data with accessible images (using Unsplash - no CORS issues)

export interface Resource {
  title: string;
  description: string;
  type: 'PDF' | 'Video';
  duration: string;
  category: string;
  image: string;
}

// Leadership Development Resources with Unsplash images
export const leadershipResources: Resource[] = [
  {
    title: "Emotional Intelligence for Leaders",
    description: "Guide to developing EQ competencies for effective leadership",
    type: "PDF",
    duration: "8 pages",
    category: "Leadership Development",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
  },
  {
    title: "Feedback Framework",
    description: "Master the art of giving and receiving constructive feedback",
    type: "PDF",
    duration: "6 pages",
    category: "Leadership Development",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
  },
  {
    title: "Decision-Making Under Pressure",
    description: "Strategic frameworks for critical decisions in high-stakes situations",
    type: "PDF",
    duration: "10 pages",
    category: "Leadership Development",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
  },
  {
    title: "Authentic Leadership Series",
    description: "4-part guide on leading with authenticity and vulnerability",
    type: "PDF",
    duration: "18 pages",
    category: "Leadership Development",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
  },
  {
    title: "Delegation Mastery Workbook",
    description: "Learn to delegate effectively and empower your team members",
    type: "PDF",
    duration: "12 pages",
    category: "Leadership Development",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop"
  },
  {
    title: "Coaching Conversation Guide",
    description: "Proven templates for powerful, transformative coaching conversations",
    type: "PDF",
    duration: "7 pages",
    category: "Leadership Development",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
  },
  {
    title: "Executive Presence Blueprint",
    description: "Build commanding presence and influential communication skills",
    type: "PDF",
    duration: "9 pages",
    category: "Leadership Development",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop"
  },
  {
    title: "Team Dynamics Assessment",
    description: "Evaluate and improve your team's collaboration patterns",
    type: "PDF",
    duration: "11 pages",
    category: "Leadership Development",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
  },
  {
    title: "Strategic Thinking Toolkit",
    description: "Develop long-term strategic thinking capabilities",
    type: "PDF",
    duration: "14 pages",
    category: "Leadership Development",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
  },
  {
    title: "Conflict Resolution Playbook",
    description: "Navigate workplace conflicts with confidence and skill",
    type: "PDF",
    duration: "13 pages",
    category: "Leadership Development",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop"
  },
  {
    title: "Leadership Communication Essentials",
    description: "Master the core communication skills every leader needs",
    type: "PDF",
    duration: "10 pages",
    category: "Leadership Development",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop"
  },
  {
    title: "Innovation Leadership Workshop",
    description: "Foster innovation and creative problem-solving in your team",
    type: "PDF",
    duration: "16 pages",
    category: "Leadership Development",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
  }
];

export const deiResources: Resource[] = [
  {
    title: "Unconscious Bias Training Module",
    description: "Recognize and mitigate unconscious biases in decision-making",
    type: "PDF",
    duration: "24 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
  },
  {
    title: "Inclusive Language Handbook",
    description: "Comprehensive guide to inclusive and respectful communication",
    type: "PDF",
    duration: "15 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop"
  },
  {
    title: "Microaggression Awareness Guide",
    description: "Identify and address subtle forms of discrimination",
    type: "PDF",
    duration: "9 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
  },
  {
    title: "Allyship Action Plan",
    description: "Move from awareness to meaningful allyship actions",
    type: "PDF",
    duration: "12 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop"
  },
  {
    title: "Psychological Safety Assessment",
    description: "Measure and improve team psychological safety",
    type: "PDF",
    duration: "8 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
  },
  {
    title: "DEI Metrics Dashboard",
    description: "Track meaningful diversity and inclusion indicators",
    type: "PDF",
    duration: "11 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    title: "Equity Audit Framework",
    description: "Conduct comprehensive equity assessments in your organization",
    type: "PDF",
    duration: "18 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
  },
  {
    title: "Intersectionality Workshop Series",
    description: "Understanding overlapping identities and experiences",
    type: "PDF",
    duration: "28 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
  },
  {
    title: "Disability Inclusion Toolkit",
    description: "Create accessible and inclusive workplaces",
    type: "PDF",
    duration: "16 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=800&h=600&fit=crop"
  },
  {
    title: "LGBTQ+ Workplace Inclusion Guide",
    description: "Foster belonging for LGBTQ+ employees year-round",
    type: "PDF",
    duration: "13 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
  },
  {
    title: "Cultural Competency Training",
    description: "Develop cross-cultural awareness and sensitivity",
    type: "PDF",
    duration: "22 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop"
  },
  {
    title: "Racial Equity Framework",
    description: "Address systemic racism in organizational practices",
    type: "PDF",
    duration: "20 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
  },
  {
    title: "Gender Equity in the Workplace",
    description: "Strategies to close gender gaps and promote equity",
    type: "PDF",
    duration: "14 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=800&h=600&fit=crop"
  },
  {
    title: "Inclusive Recruitment Strategies",
    description: "Build diverse talent pipelines and reduce hiring bias",
    type: "PDF",
    duration: "17 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop"
  },
  {
    title: "Religious Diversity & Accommodation",
    description: "Respect and support diverse faith practices at work",
    type: "PDF",
    duration: "10 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
  },
  {
    title: "Generational Diversity Workshop",
    description: "Bridge generational gaps and leverage diverse perspectives",
    type: "PDF",
    duration: "19 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
  },
  {
    title: "Neurodiversity Inclusion Guide",
    description: "Support neurodivergent employees and create inclusive environments",
    type: "PDF",
    duration: "12 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop"
  },
  {
    title: "DEI Storytelling Workshop",
    description: "Share authentic stories to drive cultural transformation",
    type: "PDF",
    duration: "15 pages",
    category: "DEI & Culture",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
  }
];

export const changeResources: Resource[] = [
  {
    title: "Change Readiness Assessment",
    description: "Evaluate organizational readiness for transformation",
    type: "PDF",
    duration: "10 pages",
    category: "Change Management",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop"
  },
  {
    title: "Stakeholder Mapping Template",
    description: "Identify and analyze key stakeholders for change initiatives",
    type: "PDF",
    duration: "7 pages",
    category: "Change Management",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop"
  },
  {
    title: "Communication Plan Builder",
    description: "Create effective change communication strategies",
    type: "PDF",
    duration: "13 pages",
    category: "Change Management",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
  },
  {
    title: "Resistance Management Strategies",
    description: "Address and overcome resistance to organizational change",
    type: "PDF",
    duration: "15 pages",
    category: "Change Management",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop"
  },
  {
    title: "Change Impact Analysis",
    description: "Assess and plan for the ripple effects of organizational change",
    type: "PDF",
    duration: "11 pages",
    category: "Change Management",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop"
  },
  {
    title: "Pilot Program Framework",
    description: "Test changes on a small scale before full implementation",
    type: "PDF",
    duration: "9 pages",
    category: "Change Management",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
  },
  {
    title: "Change Champion Training",
    description: "Develop internal advocates to support change initiatives",
    type: "PDF",
    duration: "23 pages",
    category: "Change Management",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
  },
  {
    title: "Organizational Culture Shift Guide",
    description: "Navigate deep cultural transformation systematically",
    type: "PDF",
    duration: "22 pages",
    category: "Change Management",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&h=600&fit=crop"
  },
  {
    title: "Transition Management Toolkit",
    description: "Support individuals through organizational transitions",
    type: "PDF",
    duration: "14 pages",
    category: "Change Management",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
  }
];

export const strategicResources: Resource[] = [
  {
    title: "Strategic Planning Canvas",
    description: "Visual framework for developing organizational strategy",
    type: "PDF",
    duration: "6 pages",
    category: "Strategic Planning",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
  },
  {
    title: "Vision & Mission Workbook",
    description: "Craft compelling vision and mission statements",
    type: "PDF",
    duration: "8 pages",
    category: "Strategic Planning",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
  },
  {
    title: "SWOT Analysis Template",
    description: "Comprehensive strengths, weaknesses, opportunities, threats analysis",
    type: "PDF",
    duration: "5 pages",
    category: "Strategic Planning",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop"
  },
  {
    title: "Goal Setting Framework",
    description: "SMART goals and OKR implementation guide",
    type: "PDF",
    duration: "12 pages",
    category: "Strategic Planning",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
  },
  {
    title: "Scenario Planning Workshop",
    description: "Prepare for multiple possible futures through scenario analysis",
    type: "PDF",
    duration: "26 pages",
    category: "Strategic Planning",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop"
  },
  {
    title: "Competitive Analysis Framework",
    description: "Analyze market position and competitive advantages",
    type: "PDF",
    duration: "14 pages",
    category: "Strategic Planning",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    title: "Resource Allocation Model",
    description: "Optimize allocation of financial and human resources",
    type: "PDF",
    duration: "10 pages",
    category: "Strategic Planning",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
  }
];

// Helper function to get all resources
export const getAllResources = (): Resource[] => {
  return [
    ...leadershipResources,
    ...deiResources,
    ...changeResources,
    ...strategicResources
  ];
};

// Helper function to get resources by category
export const getResourcesByCategory = (category: string): Resource[] => {
  switch (category) {
    case 'leadership':
      return leadershipResources;
    case 'dei':
      return deiResources;
    case 'change':
      return changeResources;
    case 'strategic':
      return strategicResources;
    default:
      return [];
  }
};
