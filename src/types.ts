export interface LearningResource {
  id: string;
  title: string;
  src: string;
  type: string;
  url: string;
  embed?: string;
}

export interface LearningPhase {
  id: string;
  title: string;
  desc: string;
  resources: LearningResource[];
}

export type ProjectStatus = 'BUILDING' | 'ACTIVE' | 'LIVE';

export interface Project {
  title: string;
  status: ProjectStatus;
  desc: string;
  tags: string[];
}

export interface TimelineItem {
  role: string;
  org: string;
  desc?: string;
  bullets?: string[];
}

export interface ContactLink {
  label: string;
  url: string | null;
}
