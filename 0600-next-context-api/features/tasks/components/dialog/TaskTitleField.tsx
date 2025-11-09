import { TaskCreateState } from 'features/tasks/types/tasks';
import { Dispatch, SetStateAction } from 'react';
import { ValidationErrorState } from './TaskCreateDialog';

interface TaskTitleFieldProps {
  onClick: Dispatch<SetStateAction<TaskCreateState>>;
  validationError: ValidationErrorState;
}

const TaskTitleField = ({ onClick, validationError }: TaskTitleFieldProps) => {
  return (
    <div className="my-4 mx-0">
      <div className="text-[12px]">タスク</div>
      <div className="my-2 mx-0">
        <div>
          <input
            type="text"
            className="rounded-sm py-2 px-3 w-full font-light text-[12px] text-dark border-0 shadow-[0_0_4px_1px_#22222210]"
            placeholder="タスクを入力。 例)  英会話レッスンの予約、React公式ドキュメントを1ページ読む"
            onBlur={(e) =>
              onClick((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
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
