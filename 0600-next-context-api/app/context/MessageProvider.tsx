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

type MessageContextType = [
  MessageState,
  Dispatch<SetStateAction<MessageState>>
];

const MessageContext = createContext<MessageContextType | undefined>(undefined);

const MessageProvider = ({ children }: MessageProviderProps) => {
  const [messageState, setMessageState] = useState<MessageState>({
    type: null,
    message: '',
  });
  return (
    <MessageContext.Provider value={[messageState, setMessageState]}>
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
