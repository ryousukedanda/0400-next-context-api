import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { createTask } from '../../repository';
import { TaskCreateState } from '../../types/tasks';
import {
  initialNewTask,
  taskErrorMessage,
  taskSuccessMessage,
} from '../../constants/taskConstants';
import TaskProjectField from './TaskProjectField';
import TaskTitleField from './TaskTitleField';
import TaskDescriptionField from './TaskDescriptionField';
import TaskDeadlineField from './TaskDeadlineField';
import TaskStatusField from './TaskStatusField';
import { useClickOutside } from 'features/tasks/hooks/useClickOutside';
import { useMessage } from '@/context/MessageProvider';

export interface ValidationErrorState {
  project: boolean;
  title: boolean;
  deadline: boolean;
}

interface TaskCreateDialogProps {
  onCloseDialog: Dispatch<SetStateAction<boolean>>;
}

const TaskCreateDialog = ({ onCloseDialog }: TaskCreateDialogProps) => {
  const [newTask, setNewTask] = useState<TaskCreateState>(initialNewTask);
  const DialogRef = useRef<HTMLDivElement | null>(null);
  const [validationError, setValidationError] = useState<ValidationErrorState>({
    project: false,
    title: false,
    deadline: false,
  });
  const [, setMessageState] = useMessage();

  useClickOutside(DialogRef, () => onCloseDialog(false));

  //バリデーション
  const validate = (newTask: TaskCreateState): boolean => {
    let valid = true;
    const errors: ValidationErrorState = {
      project: false,
      title: false,
      deadline: false,
    };

    if (!newTask.projectId) {
      errors.project = true;
      valid = false;
    }

    if (!newTask.title) {
      errors.title = true;
      valid = false;
    }

    if (!newTask.deadline) {
      errors.deadline = true;
      valid = false;
    }

    setValidationError(errors);
    return valid;
  };

  //task登録関数
  const handleCreateTask = async (newTask: TaskCreateState) => {
    //入力値のバリデーション
    if (!validate(newTask)) return;

    try {
      //task登録
      await createTask(newTask);
      //タスク成功メッセージ表示
      setMessageState((prev) => ({
        ...prev,
        type: 'success',
        message: taskSuccessMessage,
      }));
      //ダスク成功メッセージ非表示
      setTimeout(() => {
        setMessageState((prev) => ({
          ...prev,
          type: null,
          message: '',
        }));
      }, 3000);
      //ダイアログを閉ざす
      onCloseDialog(false);
    } catch (err) {
      //タスク失敗メッセージ表示
      setMessageState((prev) => ({
        ...prev,
        type: 'error',
        message: taskErrorMessage,
      }));
      //タスク失敗メッセージ非表示
      setTimeout(() => {
        setMessageState((prev) => ({
          ...prev,
          type: null,
          message: '',
        }));
      }, 3000);
    }
  };

  // TODO:コンポーネントでまとめれる
  return (
    <div className="block bg-overlay z-10 absolute top-0 w-full min-h-full">
      <div
        className="w-[60%] bg-light shadow-[1px_2px_6px_4px_#22222230] mt-[5%] mx-auto mb-auto "
        ref={DialogRef}
      >
        {/* ×ボタン */}
        <div
          className="p-4 flex justify-end"
          onClick={() => onCloseDialog(false)}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="text-[16px] cursor-pointer w-[1em] h-[1em]"
          />
        </div>
        {/* フォーム */}
        <div className="max-h-[80vh] overflow-y-scroll">
          <div className="p-16">
            <div className="m-auto w-160 font-light">
              <div className="mb-12">
                <h2 className="text-[14px] font-light">タスクを追加</h2>
              </div>
              <div className="mb-12">
                <TaskProjectField
                  newTask={newTask}
                  onClick={setNewTask}
                  validationError={validationError}
                />
                <TaskTitleField
                  onClick={setNewTask}
                  validationError={validationError}
                />
                <TaskDescriptionField />
                <TaskDeadlineField
                  onClick={setNewTask}
                  validationError={validationError}
                />
                <TaskStatusField newTask={newTask} onClick={setNewTask} />
              </div>
              {/* フッター */}
              <div className="flex">
                <div className="w-full flex h-12">
                  <button
                    className="mr-4 bg-primary text-light shadow-[2px_2px_4px_1px_#1e514036] transition-colors duration-500 cursor-pointer border-0 py-2 px-4 rounded-sm tracking-[1.4px] text-[10px] w-full hover:bg-primary-darker hover:shadow-[2px_2px_4px_1px_#22222220]"
                    onClick={() => handleCreateTask(newTask)}
                  >
                    <span className="text-[14px]">作成</span>
                  </button>
                  <button
                    className="mr-4 bg-secondary text-light shadow-[2px_2px_4px_1px_#1e514036] transition-shadow duration-500 cursor-pointer border-0 py-2 px-4 rounded-sm tracking-[1.4px] text-[10px] w-full hover:opacity-0.8 hover:shadow-[2px_2px_4px_1px_#22222220]"
                    onClick={() => onCloseDialog(false)}
                  >
                    キャンセル
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCreateDialog;
