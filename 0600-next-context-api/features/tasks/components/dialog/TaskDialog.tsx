import Modal from './Modal';
import TaskDialogContent from './TaskDialogContent';

interface TaskDialog {
  onClose: () => void;
}

const TaskDialog = ({ onClose }: TaskDialog) => {
  return (
    <Modal onClose={onClose}>
      <TaskDialogContent onClose={onClose} />
    </Modal>
  );
};

export default TaskDialog;
