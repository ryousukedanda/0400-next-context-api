import TextArea from '@/components/elements/TextArea';
import { descriptionFieldPlaceholder } from 'features/tasks/constants/taskConstants';
import { TaskCreateState } from 'features/tasks/types/tasks';
import { Dispatch, SetStateAction } from 'react';

interface TaskDescriptionFieldProps {
  onChange: Dispatch<SetStateAction<TaskCreateState>>;
}
const TaskDescriptionField = ({ onChange }: TaskDescriptionFieldProps) => {
  const handleChangeTaskDescription = (
    e: React.FocusEvent<HTMLTextAreaElement>
  ) => {
    onChange((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  };
  return (
    <div className="my-4 mx-0">
      <div className="text-[12px]">説明・メモ</div>
      <div className="my-4 mx-0">
        <div>
          <TextArea
            rows={5}
            placeholder={descriptionFieldPlaceholder}
            onChange={handleChangeTaskDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskDescriptionField;
