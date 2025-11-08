'use client';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from 'react';
import { TaskInfo } from '../types/tasks';
import { updateTask } from '../repository';
import PullDown from './DropDown';
import DropDown from './DropDown';

interface StatusColProps {
  task: TaskInfo;
  onUpdate: (task: TaskInfo) => void;
}

const statusOptions = [
  { label: '未完了', value: 'scheduled' },
  { label: '完了', value: 'completed' },
  { label: 'アーカイブ済み', value: 'archived' },
];

const StatusCol = ({ task, onUpdate }: StatusColProps) => {
  const [isOpenStatusDropDown, setIsOpenStatusDropDown] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const statusLabel =
    statusOptions.find((s) => s.value === task.status)?.label ?? '不明';

  // 外クリック検知で閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpenStatusDropDown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChangeStatus = async (value: string) => {
    try {
      const res = await updateTask(task.id, { status: value });
      onUpdate(res);
    } catch (err) {
      console.log(err);
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
        {isOpenStatusDropDown && (
          <DropDown>
            {statusOptions.map(({ label, value }) => (
              <li
                key={value}
                className="py-2 px-3 text-[12px] hover:bg-[#18e5af] hover:text-white hover:font-bold cursor-pointer"
                onClick={() => handleChangeStatus(value)}
              >
                {label}
              </li>
            ))}
          </DropDown>
        )}
      </div>
    </div>
  );
};

export default StatusCol;
