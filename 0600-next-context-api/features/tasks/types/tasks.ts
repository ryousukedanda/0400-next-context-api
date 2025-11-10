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

//update関数の引数
export interface UpdateTask {
  project?: ProjectName;
  title?: string;
  description?: string;
  deadline?: string;
  status?: string;
}

//create関数の引数
export interface CreateTask {
  projectId: string | null;
  title: string | null;
  description: string;
  deadline: string;
  status: string | null;
}

//
export interface TaskCreateState {
  projectId: string | null;
  projectName: string | null;
  title: string | null;
  description: string;
  deadline: string;
  status: string;
}
