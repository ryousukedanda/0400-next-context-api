import { Dispatch, SetStateAction } from 'react';
import { ValidationErrorState } from './TaskDialogContent';
import { TaskCreateState } from 'features/tasks/types/tasks';
import { getNextWeek } from 'features/tasks/constants/taskConstants';
import DateInput from '@/components/elements/DateInput';

interface TaskDeadlineFieldProps {
  onChange: Dispatch<SetStateAction<TaskCreateState>>;
  validationError: ValidationErrorState;
}
const TaskDeadlineField = ({
  onChange,
  validationError,
}: TaskDeadlineFieldProps) => {
  const handleChangeTaskDeadline = (e: React.FocusEvent<HTMLInputElement>) => {
    onChange((prev) => ({
      ...prev,
      deadline: e.target.value,
    }));
  };
  return (
    <div className="my-4 mx-0">
      <div className="text-[12px]">締切日</div>
      <div className="my-2 mx-0">
        <div>
          <DateInput
            defaultValue={getNextWeek()}
            // onChange={handleChangeTaskDeadline}
          />
        </div>
        <div className={`${validationError.deadline ? 'block' : 'invisible'}`}>
          <p className="text-danger">締切日を設定してください</p>
        </div>
      </div>
    </div>
  );
};

export default TaskDeadlineField;
