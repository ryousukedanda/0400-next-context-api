'use client';
import React, { useRef, useState } from 'react';
import { TaskInfo } from '../../types/tasks';
import { updateTask } from '../../repository';
import AppDate from '@/api/lib/date';
import { useTask } from '../../context/TaskProvider';
import { useMessage } from '@/context/MessageProvider';
import { taskUpdateErrorMessage } from 'features/tasks/constants/taskConstants';
import InputField from '@/components/elements/InputField';
import DateInput from '@/components/elements/DateInput';

interface EditableFieldProps {
  type: string;
  task: TaskInfo;
}

const EditableField = ({ type, task }: EditableFieldProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [, , onUpdateTask] = useTask();
  const [, , showMessage] = useMessage();
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

    //task更新
    try {
      const key = type === 'text' ? 'title' : 'deadline';
      const res = await updateTask(task.id, { [key]: e.target.value });
      onUpdateTask(res);
    } catch (err) {
      showMessage('error', taskUpdateErrorMessage);
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
        {type === 'text' ? (
          <InputField
            defaultValue={value}
            ref={inputRef}
            onChange={handleBlur}
            isEdit={true}
          />
        ) : (
          <DateInput
            defaultValue={value}
            ref={inputRef}
            onChange={handleBlur}
            isEdit={true}
          />
        )}
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
