'use client';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef } from 'react';
import { StatusType, TaskInfo } from '../../types/tasks';
import { updateTask } from '../../repository';
import DropDown from '../../../../app/components/elements/DropDown';
import { useTask } from '../../context/TaskProvider';
import {
  statusOptions,
  taskUpdateErrorMessage,
} from 'features/tasks/constants/taskConstants';
import { useClickOutside } from 'features/tasks/hooks/useClickOutside';
import { useMessage } from '@/context/MessageProvider';

interface StatusColProps {
  task: TaskInfo;
}

const StatusCol = ({ task }: StatusColProps) => {
  const [isOpenStatusDropDown, setIsOpenStatusDropDown] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { onUpdateTask } = useTask();
  const { showMessage } = useMessage();

  const statusLabel =
    statusOptions.find((s) => s.value === task.status)?.label ?? '不明';

  useClickOutside(
    menuRef,
    () => setIsOpenStatusDropDown(false),
    isOpenStatusDropDown
  );

  const handleChangeStatus = async (value: StatusType) => {
    try {
      const res = await updateTask(task.id, { ...task, status: value });
      onUpdateTask(res);
    } catch (err) {
      showMessage('error', taskUpdateErrorMessage);
    } finally {
      setIsOpenStatusDropDown(false);
    }
  };

  return (
    <div className="w-[12%] flex p-0 items-center text-[12px]" ref={menuRef}>
      <div
        className="w-full flex flex-col items-center cursor-pointer"
        onClick={() => setIsOpenStatusDropDown((prev) => !prev)}
      >
        {/* 現在のステータス表示 */}
        <div className="flex items-center justify-between bg-light2 rounded-sm p-2 w-full border-0 shadow-none">
          <p className="text-[12px]">{statusLabel}</p>
          <FontAwesomeIcon icon={faCaretDown} className="w-[1em] h-[1em]" />
        </div>
        {/* ドロップダウンメニュー */}

        <DropDown
          isOpen={isOpenStatusDropDown}
          options={statusOptions}
          onSelect={(value, _label) => handleChangeStatus(value)}
          onClickOutside={() => setIsOpenStatusDropDown(false)}
        />
      </div>
    </div>
  );
};

export default StatusCol;
