import { TaskCreateState } from 'features/tasks/types/tasks';
import { Dispatch, SetStateAction } from 'react';
import { ValidationErrorState } from './TaskDialogContent';
import InputField from '@/components/elements/InputField';
import { titleFieldPlaceholder } from 'features/tasks/constants/taskConstants';

interface TaskTitleFieldProps {
  onChange: Dispatch<SetStateAction<TaskCreateState>>;
  validationError: ValidationErrorState;
}

const TaskTitleField = ({ onChange, validationError }: TaskTitleFieldProps) => {
  const handleChangeTaskTitle = (e: React.FocusEvent<HTMLInputElement>) => {
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
