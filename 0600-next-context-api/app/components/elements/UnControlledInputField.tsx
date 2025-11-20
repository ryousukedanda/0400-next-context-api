import React from 'react';

interface UnControlledInputFieldProps {
  defaultValue: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  placeholder?: string;
  className?: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void | Promise<void>;
}
const UnControlledInputField = ({
  defaultValue,
  inputRef,
  placeholder,
  className,
  onBlur,
}: UnControlledInputFieldProps) => {
  return (
    <input
      type="text"
      defaultValue={defaultValue}
      ref={inputRef}
      className={`rounded-sm py-2 px-3 w-full font-light text-[12px] text-dark border-0 shadow-[0_0_4px_1px_#22222210] ${className}`}
      placeholder={placeholder}
      onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur?.(e)}
    />
  );
};

export default UnControlledInputField;
