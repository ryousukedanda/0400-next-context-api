import React from 'react';

interface InputFieldProps {
  value?: string;
  defaultValue?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void | Promise<void>;
}
const InputField = ({
  value,
  defaultValue,
  inputRef,
  placeholder,
  className,
  onChange,
  onBlur,
}: InputFieldProps) => {
  return (
    <input
      type="text"
      value={value}
      defaultValue={defaultValue}
      ref={inputRef}
      className={`rounded-sm py-2 px-3 w-full font-light text-[12px] text-dark border-0 shadow-[0_0_4px_1px_#22222210] ${className}`}
      placeholder={placeholder}
      onChange={(e: React.FocusEvent<HTMLInputElement>) => onChange?.(e)}
      onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur?.(e)}
    />
  );
};

export default InputField;
