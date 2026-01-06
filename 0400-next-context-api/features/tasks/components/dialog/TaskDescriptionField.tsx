import TextArea from '@/components/elements/TextArea';
import { descriptionFieldPlaceholder } from 'features/tasks/constants/taskConstants';
import { TaskInfo } from 'features/tasks/types/tasks';
import { Dispatch, SetStateAction } from 'react';

interface TaskDescriptionFieldProps {
  onChange: Dispatch<SetStateAction<TaskInfo>>;
  value: string;
}

const TaskDescriptionField = ({
  onChange,
  value,
}: TaskDescriptionFieldProps) => {
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
            value={value}
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
