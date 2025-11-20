import React from 'react';

interface ControlledDateInputProps {
  value: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ControlledDateInput = ({
  value,
  inputRef,
  onChange,
  className,
}: ControlledDateInputProps) => {
  return (
    <input
      type="date"
      value={value}
      ref={inputRef}
      className={`rounded-sm py-2 px-3 font-light text-dark border-0 shadow-[0_0_4px_1px_#22222210] ${className}`}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e)}
    />
  );
};

export default ControlledDateInput;
