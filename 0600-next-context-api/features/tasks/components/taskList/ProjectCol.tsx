'use client';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef } from 'react';
import { TaskInfo } from '../../types/tasks';
import { updateTask } from '../../repository';
import DropDown from '../../../../app/components/elements/DropDown';
import { useTask } from '../../context/TaskProvider';
import { useClickOutside } from 'features/tasks/hooks/useClickOutside';
import { taskUpdateErrorMessage } from 'features/tasks/constants/taskConstants';
import { useMessage } from '@/context/MessageProvider';
import useFetchProjects from 'features/projects/hooks/useFetchProjects';

interface ProjectColProps {
  task: TaskInfo;
}

const ProjectCol = ({ task }: ProjectColProps) => {
  const [isOpenProjectDropDown, setIsOpenProjectDropDown] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { showMessage } = useMessage();
  const { onUpdateTask } = useTask();
  const projectList = useFetchProjects();

  useClickOutside(
    menuRef,
    () => setIsOpenProjectDropDown(false),
    isOpenProjectDropDown
  );

  const handleUpdateTask = async (value: string) => {
    try {
      const res = await updateTask(task.id, {
        ...task,
        project: { name: value, id: '' },
      });
      onUpdateTask(res);
    } catch (err) {
      showMessage('error', taskUpdateErrorMessage);
    } finally {
      setIsOpenProjectDropDown(false);
    }
  };

  return (
    <div
      className="w-[14%] flex items-center py-2 px-0 text-[12px]"
      ref={menuRef}
    >
      <div
        className="border-0 w-full min-h-full flex justify-center items-center flex-col cursor-pointer"
        onClick={() => setIsOpenProjectDropDown((prev) => !prev)}
      >
        {/* 選択中のプロジェクト */}
        <div className="shadow-none flex items-center bg-light2 rounded-sm p-2 justify-between w-full border-0">
          <p className="text-[12px] truncate">{task.project.name}</p>
          <FontAwesomeIcon icon={faCaretDown} className="w-[1em] h-[1em]" />
        </div>

        {/* ドロップダウン */}
        <DropDown
          isOpen={isOpenProjectDropDown}
          options={projectList.map((project) => ({
            label: project.name,
            value: project.id,
          }))}
          onSelect={(_value, label) => handleUpdateTask(label)}
          onClickOutside={() => setIsOpenProjectDropDown}
        />
      </div>
    </div>
  );
};

export default ProjectCol;
