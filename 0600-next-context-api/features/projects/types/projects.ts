import { PageInfoParams } from '@/api/datastore/models/pagination';

interface Kinds {
  milestone: number;
  task: number;
  total: number;
}

interface States {
  scheduled: number;
  completed: number;
  archived: number;
}

interface ProjectStats {
  total: number;
  kinds: Kinds;
  states: States;
}

export interface ProjectInfo {
  id: string;
  name: string;
  slug: string;
  goal: string;
  shouldbe: string;
  color: string;
  stats: ProjectStats;
  createdAt: string;
  updatedAt: string;
  deadline: string;
  startedAt: string;
  finishedAt: string;
}

export interface Projects {
  data: ProjectInfo[];
  pageInfo: PageInfoParams;
}

export interface ProjectName {
  name: string;
}
