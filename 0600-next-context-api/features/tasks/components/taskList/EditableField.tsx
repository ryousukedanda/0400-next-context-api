'use client';
import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { TaskInfo } from '../../types/tasks';
import { updateTask } from '../../repository';
import AppDate from '@/api/lib/date';
import { useMessage } from '@/context/MessageProvider';
import { taskUpdateErrorMessage } from 'features/tasks/constants/taskConstants';
import DateInput from '@/components/elements/DataInput';
import InputField from '@/components/elements/InputField';

interface EditableFieldProps {
  type: string;
  task: TaskInfo;
  onBlur?: Dispatch<SetStateAction<TaskInfo>>;
  onUpdate?: (task: TaskInfo) => void;
}

const EditableField = ({
  type,
  task,
  onBlur,
  onUpdate,
}: EditableFieldProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { showMessage } = useMessage();
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
    const newValue = e.target.value;
    if (!newValue) {
      setIsEditing(false);
      return;
    }

    //編集完了してもまだdbのtaskは更新しない
    //更新ボタン押下でdb更新(tasks/[id])
    if (onBlur) {
      onBlur?.((prev) => ({
        ...prev,
        title: e.target.value,
      }));
      setIsEditing(false);
      return;
    }

    //task更新
    try {
      const key = type === 'text' ? 'title' : 'deadline';
      const res = await updateTask(task.id, { ...task, [key]: newValue });
      onUpdate?.(res);
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
            inputRef={inputRef}
            onBlur={handleBlur}
            className={'bg-[#fafafa] min-w-full'}
          />
        ) : (
          <DateInput
            defaultValue={value}
            inputRef={inputRef}
            onBlur={handleBlur}
            className={'bg-[#fafafa] min-w-full'}
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
