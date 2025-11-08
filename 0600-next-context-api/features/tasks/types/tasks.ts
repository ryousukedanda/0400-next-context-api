import { PageInfo } from '@/api/datastore/models/pagination';
import { ProjectInfo, ProjectName } from 'features/projects/types/projects';

export interface TaskInfo {
  id: string;
  title: string;
  description: string;
  status: 'scheduled' | 'completed' | 'archived';
  createdAt: string;
  updatedAt: string;
  finishedAt: string;
  startedAt: string;
  achievedAt: string;
  startingAt: string;
  deadline: string;
  project: ProjectInfo;
  parent: 'string';
  children: ['string'];
}

export interface Tasks {
  data: TaskInfo[];
  pageInfo: PageInfo;
}

export interface UpdateTask {
  project?: ProjectName;
  title?: string;
  description?: string;
  deadline?: string;
  status?: string;
}
