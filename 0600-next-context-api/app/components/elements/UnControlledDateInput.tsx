import React from 'react';

interface UnControlledDateInputProps {
  defaultValue?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  className?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void | Promise<void>;
}

const UnControlledDateInput = ({
  defaultValue,
  inputRef,
  className,
  onBlur,
}: UnControlledDateInputProps) => {
  return (
    <input
      type="date"
      defaultValue={defaultValue}
      ref={inputRef}
      className={`rounded-sm py-2 px-3 font-light text-dark border-0 shadow-[0_0_4px_1px_#22222210] ${className}`}
      onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur?.(e)}
    />
  );
};

export default UnControlledDateInput;
