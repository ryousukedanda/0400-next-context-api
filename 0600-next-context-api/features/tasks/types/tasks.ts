import { PageInfoParams } from '@/api/datastore/models/pagination';
import { ProjectInfo } from 'features/projects/types/projects';

export type StatusType = 'scheduled' | 'completed' | 'archived';

export interface TaskInfo {
  id: string;
  title: string;
  description: string;
  status: StatusType;
  createdAt: string;
  updatedAt: string;
  finishedAt?: string;
  startedAt?: string;
  achievedAt?: string;
  startingAt?: string;
  deadline: string;
  project: ProjectInfo;
  parent?: 'string';
  children?: ['string'];
}

export interface Tasks {
  data: TaskInfo[];
  pageInfo: PageInfoParams;
}
