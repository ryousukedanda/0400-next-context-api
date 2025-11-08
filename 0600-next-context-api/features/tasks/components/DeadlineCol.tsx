'use client';
import React from 'react';
import EditableField from './EditableField';
import { TaskInfo } from '../types/tasks';

interface DeadlineColColProps {
  task: TaskInfo;
  onUpdate: (task: TaskInfo) => void;
}

const DeadlineCol = ({ task, onUpdate }: DeadlineColColProps) => {
  return (
    <div className="w-1/10 flex items-center py-2 px-0 text-[12px]">
      <EditableField type={'date'} task={task} onUpdate={onUpdate} />
    </div>
  );
};

export default DeadlineCol;
