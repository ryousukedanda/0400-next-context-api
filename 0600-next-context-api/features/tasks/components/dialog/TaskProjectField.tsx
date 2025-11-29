import DropDown from '@/components/elements/DropDown';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskInfo } from 'features/tasks/types/tasks';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { noSlectOption } from 'features/tasks/constants/taskConstants';
import useFetchProjects from 'features/projects/hooks/useFetchProjects';
import { ValidationErrorState } from '@/context/ErrorProvider';

interface TaskProjectFieldProps {
  newTask: TaskInfo;
  onChange: Dispatch<SetStateAction<TaskInfo>>;
  validationError: ValidationErrorState;
}

const TaskProjectField = ({
  newTask,
  onChange,
  validationError,
}: TaskProjectFieldProps) => {
  const [isOpenProjectDropDown, setIsOpenProjectDropDown] = useState(false);
  const { projectList } = useFetchProjects();
  const ignoreRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="my-4 mx-0 ">
      <div className="text-[12px] ">プロジェクト</div>
      <div className="my-2 mx-0">
        <div
          className="flex justify-center items-center flex-col cursor-pointer"
          onClick={() =>
            setIsOpenProjectDropDown((prev) => {
              return !prev;
            })
          }
          ref={ignoreRef}
        >
          <div className="flex items-center bg-light2 rounded-sm p-2 justify-between w-full border-0 shadow-[0_0_4px_1px_#22222210]">
            <p className="text-[12px]">
              {!newTask?.project.name
                ? noSlectOption[0].label
                : newTask.project.name}
            </p>
            <div className="flex justify-center items-center h-full">
              <FontAwesomeIcon icon={faCaretDown} className="w-[1em] h-[1em]" />
            </div>
          </div>
          <DropDown
            isOpen={isOpenProjectDropDown}
            options={noSlectOption.concat(
              projectList.map((project) => ({
                label: project.name,
                value: project.id,
              }))
            )}
            onSelect={(value, label) => {
              onChange((prev) => ({
                ...prev,
                project: { name: label, id: value },
              }));
              setIsOpenProjectDropDown(false);
            }}
            onClickOutside={() => setIsOpenProjectDropDown(false)}
          />
        </div>
        <div className={`${validationError.project ? 'block' : 'invisible'}`}>
          <p className="text-danger">プロジェクトを設定してください</p>
        </div>
      </div>
    </div>
  );
};

export default TaskProjectField;
