'use client';
import { Task } from '@/api/datastore/models/task';
import { TaskInfo } from 'features/tasks/types/tasks';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

export interface ValidationErrorState {
  project: boolean;
  title: boolean;
  deadline: boolean;
}

interface ErrorContextType {
  validationError: ValidationErrorState;
  validate: (newTask: TaskInfo) => boolean;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

interface ErrorProviderProps {
  children: ReactNode;
}

export const ErrorProvider = ({ children }: ErrorProviderProps) => {
  const [validationError, setValidationError] = useState<ValidationErrorState>({
    project: false,
    title: false,
    deadline: false,
  });

  //フォームのバリデーション
  const validate = (newTask: TaskInfo): boolean => {
    let valid = true;
    const errors: ValidationErrorState = {
      project: false,
      title: false,
      deadline: false,
    };

    if (!newTask.project.id) {
      errors.project = true;
      valid = false;
    }

    if (!newTask.title) {
      errors.title = true;
      valid = false;
    }

    if (!newTask.deadline) {
      errors.deadline = true;
      valid = false;
    }

    setValidationError(errors);
    return valid;
  };

  return (
    <ErrorContext.Provider value={{ validationError, validate }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const ctx = useContext(ErrorContext);
  if (!ctx) {
    throw new Error('ErrorContextがundefinedかnullです。');
  }
  return ctx;
};
