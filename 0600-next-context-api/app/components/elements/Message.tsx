import { useMessage } from '@/context/MessageProvider';
import {
  faCircleCheck,
  faCircleInfo,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  taskErrorMessage,
  taskSuccessMessage,
} from 'features/tasks/constants/taskConstants';

const Message = () => {
  const [messageState] = useMessage();
  return (
    <ul className="top-8 right-8 absolute">
      {messageState.type && (
        <li>
          <div
            className={`border-b-4 ${
              messageState.type === 'success'
                ? 'border-success text-success'
                : 'border-danger text-danger'
            } bg-[#fff] min-w-[300px] flex rounded-sm mb-4 shadow-[1px_1px_7px_1px_#22222230] text-[12px] w-full animate-message`}
          >
            <div className="w-full">
              <div className="flex justify-end pt-2 px-2 pb-0">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-[16px] cursor-pointer w-[1em] h-[1em]"
                />
              </div>
              <div className="flex items-center pt-0 pr-4 pb-4 pl-6">
                <div className="mr-4">
                  {messageState.type === 'success' ? (
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="relative top-0.5 text-[16px] h-[1em] w-[1em]"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      className="relative top-0.5 text-[16px] h-[1em] w-[1em]"
                    />
                  )}
                </div>
                <div>
                  {messageState.type === 'success'
                    ? taskSuccessMessage
                    : taskErrorMessage}
                </div>
              </div>
            </div>
          </div>
        </li>
      )}
    </ul>
  );
};

export default Message;
