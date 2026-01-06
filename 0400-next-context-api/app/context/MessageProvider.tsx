'use client';
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

type showMessageType = (type: 'success' | 'error', message: string) => void;

interface MessageContextType {
  messageState: MessageState;
  setMessageState: Dispatch<SetStateAction<MessageState>>;
  showMessage: showMessageType;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

const MessageProvider = ({ children }: MessageProviderProps) => {
  const [messageState, setMessageState] = useState<MessageState>({
    type: null,
    message: '',
  });

  const showMessage = (type: 'success' | 'error', message: string) => {
    setMessageState({
      type,
      message,
    });

    setTimeout(() => {
      setMessageState({
        type: null,
        message: '',
      });
    }, 3000);
  };

  return (
    <MessageContext.Provider
      value={{ messageState, setMessageState, showMessage }}
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
