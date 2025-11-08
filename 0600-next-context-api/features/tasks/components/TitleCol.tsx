'use client';
import React from 'react';
import EditableField from './EditableField';
import { TaskInfo } from '../types/tasks';

interface TitleColProps {
  task: TaskInfo;
  onUpdate: (task: TaskInfo) => void;
}

const TitleCol = ({ task, onUpdate }: TitleColProps) => {
  return (
    <div className="w-1/2 pl-4 flex items-center py-2 px-0 text-[12px]">
      <EditableField type={'text'} task={task} onUpdate={onUpdate} />
    </div>
  );
};

export default TitleCol;
