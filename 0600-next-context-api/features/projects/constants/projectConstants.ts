import { ProjectInfo } from '../types/projects';
import { defaultTask } from './../../tasks/constants/taskConstants';
export const projectGetEroorMessage = 'プロジェクト一覧の取得に失敗しました。';

export const projectGetDetailErrorMessage =
  'プロジェクトの情報取得に失敗しました。';

export const defaultProject: ProjectInfo = {
  id: '',
  name: '',
  slug: '',
  goal: '',
  shouldbe: '',
  color: '',
  createdAt: '',
  updatedAt: '',
  deadline: '',
};
