'use client';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from 'react';
import { TaskInfo } from '../types/tasks';
import { updateTask } from '../repository';
import DropDown from './DropDown';
import { useProject } from '@/context/ProjectContext';

interface ProjectColProps {
  task: TaskInfo;
  onUpdate: (task: TaskInfo) => void;
}

const ProjectCol = ({ task, onUpdate }: ProjectColProps) => {
  const [isOpenProjectDropDown, setIsOpenProjectDropDown] =
    useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [projectList] = useProject();

  // 外クリックを検知してドロップダウンを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpenProjectDropDown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChangeProject = async (value: string) => {
    try {
      const res = await updateTask(task.id, { project: { name: value } });
      onUpdate(res);
    } catch (err) {
      console.log(err);
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
        {isOpenProjectDropDown && (
          <DropDown>
            {projectList.map((project) => (
              <li
                key={project.id}
                className="py-2 px-3 text-[12px] hover:bg-[#18e5af] hover:text-white hover:font-bold cursor-pointer"
                onClick={() => handleChangeProject(project.name)}
              >
                {project.name}
              </li>
            ))}
          </DropDown>
        )}
      </div>
    </div>
  );
};

export default ProjectCol;
