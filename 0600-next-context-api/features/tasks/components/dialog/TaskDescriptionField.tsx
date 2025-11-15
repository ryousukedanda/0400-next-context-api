import TextArea from '@/components/elements/TextArea';
import { descriptionFieldPlaceholder } from 'features/tasks/constants/taskConstants';

const TaskDescriptionField = () => {
  return (
    <div className="my-4 mx-0">
      <div className="text-[12px]">説明・メモ</div>
      <div className="my-4 mx-0">
        <div>
          <TextArea rows={5} placeholder={descriptionFieldPlaceholder} />
        </div>
      </div>
    </div>
  );
};

export default TaskDescriptionField;
