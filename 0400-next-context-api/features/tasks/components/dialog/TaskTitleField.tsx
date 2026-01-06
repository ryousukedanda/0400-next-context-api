import { Dispatch, SetStateAction } from 'react';
import { titleFieldPlaceholder } from 'features/tasks/constants/taskConstants';
import { ValidationErrorState } from '@/context/ErrorProvider';
import { TaskInfo } from 'features/tasks/types/tasks';
import InputField from '@/components/elements/InputField';

interface TaskTitleFieldProps {
  newTask: TaskInfo;
  onChange: Dispatch<SetStateAction<TaskInfo>>;
  validationError: ValidationErrorState;
}

const TaskTitleField = ({
  newTask,
  onChange,
  validationError,
}: TaskTitleFieldProps) => {
  const handleChangeTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  return (
    <div className="my-4 mx-0">
      <div className="text-[12px]">タスク</div>
      <div className="my-2 mx-0">
        <div>
          <InputField
            value={newTask.title}
            placeholder={titleFieldPlaceholder}
            onChange={handleChangeTaskTitle}
          />
        </div>
        <div className={`${validationError.title ? 'block' : 'invisible'}`}>
          <p className="text-danger">タイトルを設定してください</p>
        </div>
      </div>
    </div>
  );
};

export default TaskTitleField;
