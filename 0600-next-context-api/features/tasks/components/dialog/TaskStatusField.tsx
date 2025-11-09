import { TaskCreateState } from 'features/tasks/types/tasks';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { ValidationErrorState } from './TaskCreateDialog';
import { statusOptions } from 'features/tasks/constants/taskConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import DropDown from '@/components/elements/DropDown';

interface TaskProjectFieldProps {
  newTask: TaskCreateState;
  onClick: Dispatch<SetStateAction<TaskCreateState>>;
}
const TaskStatusField = ({ newTask, onClick }: TaskProjectFieldProps) => {
  const [isOpenStatusDropDown, setIsOpenStatusDropDown] =
    useState<boolean>(false);

  const statusLabel =
    statusOptions.find((s) => s.value === newTask.status)?.label ?? '不明';

  return (
    <div className="my-4 mx-0">
      <div className="text-[12px]">ステータス</div>
      <div className="my-2 mx-0">
        <div
          className="flex justify-center items-center flex-col cursor-pointer"
          onClick={() => setIsOpenStatusDropDown(true)}
        >
          <div className="flex items-center bg-light2 rounded-sm p-2 justify-between w-full border-0 shadow-[0_0_4px_1px_#22222210]">
            <p className="text-[12px]">
              {newTask.status === '' ? '未完了' : statusLabel}
            </p>
            <div className="flex justify-center items-center h-full">
              <FontAwesomeIcon icon={faCaretDown} className="w-[1em] h-[1em]" />
            </div>
          </div>
          {isOpenStatusDropDown && (
            <DropDown
              options={statusOptions}
              onSelect={(value, _label, e) => {
                e?.stopPropagation();
                onClick((prev) => ({
                  ...prev,
                  status: value,
                }));
                setIsOpenStatusDropDown(false);
              }}
              onClickOutside={() => setIsOpenStatusDropDown(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskStatusField;
