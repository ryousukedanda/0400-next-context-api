import { Dispatch, SetStateAction } from 'react';
import { ValidationErrorState } from './TaskCreateDialog';
import { TaskCreateState } from 'features/tasks/types/tasks';
import { nextWeek } from 'features/tasks/constants/taskConstants';

interface TaskDeadlineFieldProps {
  onClick: Dispatch<SetStateAction<TaskCreateState>>;
  validationError: ValidationErrorState;
}
const TaskDeadlineField = ({
  onClick,
  validationError,
}: TaskDeadlineFieldProps) => {
  return (
    <div className="my-4 mx-0">
      <div className="text-[12px]">締切日</div>
      <div className="my-2 mx-0">
        <div>
          <input
            type="date"
            defaultValue={nextWeek}
            onBlur={(e) =>
              onClick((prev) => ({
                ...prev,
                deadline: e.target.value,
              }))
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
