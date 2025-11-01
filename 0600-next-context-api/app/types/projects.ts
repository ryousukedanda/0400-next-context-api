export interface Kinds {
  milestone: number;
  task: number;
  total: number;
}

export interface States {
  scheduled: number;
  completed: number;
  archived: number;
}

export interface ProjectStats {
  total: number;
  kinds: Kinds;
  states: States;
}
export interface Project {
  id: string;
  name: string;
  slug: string;
  goal: string;
  shoudbe: string;
  color: string;
  stats: ProjectStats;
  createdAt: string;
  updaatedAt: string;
  deadline: string;
  startedAt: string;
  finishedAt: string;
}

export interface PageInfo {
  totalCount: number;
  limit: number;
  page: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface ProjectInfo {
  data: Project[];
  pageInfo?: PageInfo;
}
