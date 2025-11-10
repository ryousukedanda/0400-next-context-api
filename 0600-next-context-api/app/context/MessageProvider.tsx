import {
  taskErrorMessage,
  taskSuccessMessage,
} from 'features/tasks/constants/taskConstants';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface MessageProviderProps {
  children: ReactNode;
}

export interface MessageState {
  type: 'success' | 'error' | null;
  message: string;
}

type showMessageType = (type: 'success' | 'error') => void;

type hideMessageType = () => void;

type MessageContextType = [
  MessageState,
  Dispatch<SetStateAction<MessageState>>,
  showMessageType,
  hideMessageType
];

const MessageContext = createContext<MessageContextType | undefined>(undefined);

const MessageProvider = ({ children }: MessageProviderProps) => {
  const [messageState, setMessageState] = useState<MessageState>({
    type: null,
    message: '',
  });

  const showMessage = (type: 'success' | 'error') => {
    const message = type === 'success' ? taskSuccessMessage : taskErrorMessage;
    setMessageState({
      type,
      message,
    });
  };

  const hideMessage = () => {
    setTimeout(() => {
      setMessageState({
        type: null,
        message: '',
      });
    }, 3000);
  };
  return (
    <MessageContext.Provider
      value={[messageState, setMessageState, showMessage, hideMessage]}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw Error('MessageContextがありません。');
  }
  return context;
};

export default MessageProvider;
