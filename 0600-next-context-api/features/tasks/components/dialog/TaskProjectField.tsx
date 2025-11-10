import DropDown from '@/components/elements/DropDown';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskCreateState } from 'features/tasks/types/tasks';
import { Dispatch, SetStateAction, useState } from 'react';
import { ValidationErrorState } from './TaskCreateDialog';
import { useProject } from 'features/projects/context/ProjectProvider';

interface TaskProjectFieldProps {
  newTask: TaskCreateState;
  onClick: Dispatch<SetStateAction<TaskCreateState>>;
  validationError: ValidationErrorState;
}

const TaskProjectField = ({
  newTask,
  onClick,
  validationError,
}: TaskProjectFieldProps) => {
  const [isOpenProjectDropDown, setIsOpenProjectDropDown] =
    useState<boolean>(false);
  const [projectList] = useProject();

  return (
    <div className="my-4 mx-0 ">
      <div className="text-[12px] ">プロジェクト</div>
      <div className="my-2 mx-0">
        <div
          className="flex justify-center items-center flex-col cursor-pointer"
          onClick={() => setIsOpenProjectDropDown(true)}
        >
          <div className="flex items-center bg-light2 rounded-sm p-2 justify-between w-full border-0 shadow-[0_0_4px_1px_#22222210]">
            <p className="text-[12px]">
              {!newTask.projectName
                ? 'プログラムを選択してください'
                : newTask.projectName}
            </p>
            <div className="flex justify-center items-center h-full">
              <FontAwesomeIcon icon={faCaretDown} className="w-[1em] h-[1em]" />
            </div>
          </div>
          {isOpenProjectDropDown && (
            <DropDown
              options={projectList.map((project) => ({
                label: project.name,
                value: project.id,
              }))}
              onSelect={(value, label, e) => {
                e?.stopPropagation();
                onClick((prev) => ({
                  ...prev,
                  projectName: label,
                  projectId: value,
                }));
                setIsOpenProjectDropDown(false);
              }}
              onClickOutside={() => setIsOpenProjectDropDown(false)}
            />
          )}
        </div>
        {/* {謎のdiv} */}
        <div className={`${validationError.project ? 'block' : 'invisible'}`}>
          <p className="text-danger">プロジェクトを設定してください</p>
        </div>
      </div>
    </div>
  );
};

export default TaskProjectField;
