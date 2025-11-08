'use client';
import React, { useRef, useState } from 'react';
import { TaskInfo } from '../types/tasks';
import { updateTask } from '../repository';
import AppDate from '@/api/lib/date';

interface EditableFieldProps {
  type: string;
  task: TaskInfo;
  onUpdate: (task: TaskInfo) => void;
}

const EditableField = ({ type, task, onUpdate }: EditableFieldProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const value =
    type === 'text'
      ? task.title
      : AppDate.parse(task.deadline)?.toString() ?? '';

  //編集開始時
  const handleStartEditing = () => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  //編集完了時
  const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setIsEditing(false);
      return;
    }

    //データ登録
    try {
      const key = type === 'text' ? 'title' : 'deadline';
      const res = await updateTask(task.id, { [key]: e.target.value });
      onUpdate(res);
    } catch (err) {
      console.log(err);
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <div className="cursor-pointer w-full" onClick={handleStartEditing}>
      <div
        className={`${
          isEditing ? `visible h-auto w-auto` : `invisible h-0 w-0`
        } bg-[#fafafa] rounded-sm min-w-full border-0`}
      >
        <input
          type={type}
          className="rounded-sm py-2 px-3 w-full font-light text-[12px] text-dark border-0 shadow-[0_0_4px_1px_#22222210] bg-[#fafafa min-w-full]"
          defaultValue={value}
          ref={inputRef}
          onBlur={handleBlur}
        />
      </div>
      <p
        className={`${
          isEditing ? `invisible h-0 w-0` : `visible h-auto w-auto`
        } min-w-full`}
      >
        {value}
      </p>
    </div>
  );
};

export default EditableField;
