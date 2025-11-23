import { Dispatch, SetStateAction } from 'react';
import { TaskInfo } from 'features/tasks/types/tasks';
import { ValidationErrorState } from '@/context/ErrorProvider';
import AppDate from '@/api/lib/date';
import DateInput from '@/components/elements/DataInput';

interface TaskDeadlineFieldProps {
  newTask: TaskInfo;
  onChange: Dispatch<SetStateAction<TaskInfo>>;
  validationError: ValidationErrorState;
}
const TaskDeadlineField = ({
  newTask,
  onChange,
  validationError,
}: TaskDeadlineFieldProps) => {
  const handleChangeTaskDeadline = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            onChange={handleChangeTaskDeadline}
            value={
              newTask.deadline
                ? AppDate.parse(newTask.deadline)?.toString() ?? ''
                : ''
            }
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
