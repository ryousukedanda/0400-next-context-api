import { useModal } from '@/context/ModalProvider';
import Modal from './Modal';
import TaskDialogContent from './TaskDialogContent';

const TaskDialog = () => {
  const { openModal } = useModal();

  return openModal === 'task' ? (
    <Modal>
      <TaskDialogContent />
    </Modal>
  ) : null;
};

export default TaskDialog;
