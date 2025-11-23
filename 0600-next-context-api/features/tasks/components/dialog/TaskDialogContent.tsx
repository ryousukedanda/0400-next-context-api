import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { createTask } from '../../repository';
import {
  defaultTask,
  getNextWeek,
  taskAddErrorMessage,
  taskAddSuccessMessage,
} from '../../constants/taskConstants';
import TaskProjectField from './TaskProjectField';
import TaskTitleField from './TaskTitleField';
import TaskDescriptionField from './TaskDescriptionField';
import TaskDeadlineField from './TaskDeadlineField';
import TaskStatusField from './TaskStatusField';
import { useMessage } from '@/context/MessageProvider';
import { useModal } from '@/context/ModalProvider';
import { useError } from '@/context/ErrorProvider';
import { TaskInfo } from 'features/tasks/types/tasks';

const TaskDialogContent = () => {
  const [newTask, setNewTask] = useState<TaskInfo>({
    ...defaultTask,
    deadline: getNextWeek(),
  });
  const { showMessage } = useMessage();
  const { closeModal } = useModal();
  const { validate, validationError } = useError();

  //task登録ハンドラーメソッド
  const handleCreateTask = async (newTask: TaskInfo) => {
    if (!validate(newTask)) return;

    try {
      //task登録
      await createTask(newTask);
      //タスク成功メッセージ表示
      showMessage('success', taskAddSuccessMessage);
      //ダイアログを閉ざす
      closeModal();
    } catch (err) {
      //タスク失敗メッセージ表示
      showMessage('error', taskAddErrorMessage);
    }
  };

  return (
    <>
      {/* ×ボタン */}
      <div className="p-4 flex justify-end" onClick={closeModal}>
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
                onChange={setNewTask}
                validationError={validationError}
              />
              <TaskTitleField
                newTask={newTask}
                onChange={setNewTask}
                validationError={validationError}
              />
              <TaskDescriptionField
                value={newTask.description}
                onChange={setNewTask}
              />
              <TaskDeadlineField
                newTask={newTask}
                onChange={setNewTask}
                validationError={validationError}
              />
              <TaskStatusField newTask={newTask} onChange={setNewTask} />
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
                  onClick={closeModal}
                >
                  <span className="text-[14px]">キャンセル</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDialogContent;
