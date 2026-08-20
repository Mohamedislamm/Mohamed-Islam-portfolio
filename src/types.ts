export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Autonomous AI & Agents' | 'Full-Stack & Web Apps' | 'ML, Data & Algorithms' | 'Enterprise & Systems';
  featured: boolean;
  badge?: string;
  metrics: ProjectMetric[];
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  interactiveDemoType: 'computer-use' | 'google-adk' | 'tetris-ai' | 'task-tracker' | 'library-mgmt' | 'dbscan-forecasting';
  architectureDetails: {
    problem: string;
    solution: string;
    keyInnovations: string[];
    performanceGains: string;
  };
  sampleCodeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface SkillItem {
  name: string;
  level: 'Core' | 'Advanced' | 'Proficient';
  context: string;
  category: string;
  iconType?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Full-time' | 'Certification & Training' | 'Education';
  highlights: string[];
  skills: string[];
  logoText: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  description: string;
  skills: string[];
  credentialBadge?: string;
}
