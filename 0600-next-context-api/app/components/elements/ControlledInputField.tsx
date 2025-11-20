import React from 'react';

interface ControlledInputFieldProps {
  value: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ControlledInputField = ({
  value,
  inputRef,
  placeholder,
  className,
  onChange,
}: ControlledInputFieldProps) => {
  return (
    <input
      type="text"
      value={value}
      ref={inputRef}
      className={`rounded-sm py-2 px-3 w-full font-light text-[12px] text-dark border-0 shadow-[0_0_4px_1px_#22222210] ${className}`}
      placeholder={placeholder}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e)}
    />
  );
};

export default ControlledInputField;
