'use client';
import AppDate from '@/api/lib/date';
import { useError } from '@/context/ErrorProvider';
import { useMessage } from '@/context/MessageProvider';
import { faChevronLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TaskDeadlineField from 'features/tasks/components/dialog/TaskDeadlineField';
import TaskDescriptionField from 'features/tasks/components/dialog/TaskDescriptionField';
import TaskProjectField from 'features/tasks/components/dialog/TaskProjectField';
import TaskStatusField from 'features/tasks/components/dialog/TaskStatusField';
import EditableField from 'features/tasks/components/taskList/EditableField';
import {
  defaultTask,
  taskDeleteErrorMessage,
  taskDeleteSuccessMessage,
  taskGetErrorMessage,
  taskUpdateErrorMessage,
  taskUpdateSuccessMessage,
} from 'features/tasks/constants/taskConstants';
import {
  deleteTask,
  getTaskDetail,
  updateTask,
} from 'features/tasks/repository';
import { TaskInfo } from 'features/tasks/types/tasks';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';

const page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [updateTasks, setUpdateTasks] = useState<TaskInfo>(defaultTask);
  const router = useRouter();
  const { showMessage } = useMessage();
  const { validationError, validate } = useError();

  const fetchTaskDetail = async (id: string) => {
    try {
      const res = await getTaskDetail(id);
      setUpdateTasks(res);
    } catch (err) {
      showMessage('error', taskGetErrorMessage);
    }
  };

  useEffect(() => {
    fetchTaskDetail(id);
  }, []);

  //task更新ハンドラーメソッド
  const handleUpdateTask = async (newTask: TaskInfo) => {
    if (!validate(newTask)) return;

    try {
      //task登録
      await updateTask(id, newTask);
      //タスク成功メッセージ表示
      showMessage('success', taskUpdateSuccessMessage);
    } catch (err) {
      //タスク失敗メッセージ表示
      showMessage('error', taskUpdateErrorMessage);
    }
  };

  //task削除ハンドラーメソッド
  const handleDeleteTask = async (id: string) => {
    if (!confirm('このタスクを削除しますか')) return;

    try {
      //task削除
      await deleteTask(id);
      //タスク成功メッセージ表示
      showMessage('success', taskDeleteSuccessMessage);
      //dashboardにリダイレクト
      router.push('/');
    } catch (err) {
      //タスク失敗メッセージ表示
      showMessage('error', taskDeleteErrorMessage);
    }
  };

  //リセット
  const handleReset = async () => {
    const res = await getTaskDetail(id);
    setUpdateTasks(res);
  };

  return (
    <div className="p-8 w-full h-full overflow-scroll bg-light2">
      <div className="p-16">
        <div className="m-auto w-160">
          {/* header */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              <h2 className="text-[20px] font-medium">
                <EditableField
                  type="text"
                  task={updateTasks}
                  onBlur={setUpdateTasks}
                />
              </h2>
              <div
                className="cursor-pointer"
                onClick={() => handleDeleteTask(id)}
              >
                <div className="flex justify-center items-center h-full">
                  <FontAwesomeIcon icon={faTrash} className="h-[1em] w-[1em]" />
                </div>
              </div>
            </div>
            <div className="flex text-[12px] my-2 mx-0">
              <div className="mr-4">
                <div>
                  作成日時:
                  {updateTasks?.createdAt
                    ? AppDate.parse(updateTasks.createdAt)?.toString()
                    : ''}
                </div>
              </div>
              <div className="mr-4">
                <div>
                  更新日時:
                  {updateTasks?.updatedAt
                    ? AppDate.parse(updateTasks.updatedAt)?.toString()
                    : ''}
                </div>
              </div>
            </div>
          </div>
          {/* form */}
          <div className="mb-12">
            <TaskProjectField
              newTask={updateTasks}
              onChange={setUpdateTasks}
              validationError={validationError}
            />
            <TaskDeadlineField
              newTask={updateTasks}
              onChange={setUpdateTasks}
              validationError={validationError}
            />
            <TaskStatusField newTask={updateTasks} onChange={setUpdateTasks} />

            <TaskDescriptionField
              value={updateTasks.description}
              onChange={setUpdateTasks}
            />
          </div>
          {/* footer(button) */}
          <div>
            <div className="w-full flex h-12">
              <button
                className="mr-4 bg-primary text-light shadow-[2px_2px_4px_1px_#1e514036] transition-colors duration-500 cursor-pointer border-0 py-2 px-4 rounded-sm tracking-[1.4px] text-[10px] w-full hover:bg-primary-darker hover:shadow-[2px_2px_4px_1px_#22222220]"
                onClick={() => handleUpdateTask(updateTasks)}
              >
                <span className="text-[14px]">更新</span>
              </button>
              <button
                className="mr-4 bg-secondary text-light shadow-[2px_2px_4px_1px_#1e514036] transition-shadow duration-500 cursor-pointer border-0 py-2 px-4 rounded-sm tracking-[1.4px] text-[10px] w-full hover:opacity-0.8 hover:shadow-[2px_2px_4px_1px_#22222220]"
                onClick={() => handleReset()}
              >
                <span className="text-[14px]">リセット</span>
              </button>
            </div>
            <div
              className="cursor-pointer pt-8 px-0 pb-4"
              onClick={() => router.back()}
            >
              <div className="text-primary flex items-center">
                <div className="flex justify-center items-center h-full">
                  <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
                </div>
                戻る
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
