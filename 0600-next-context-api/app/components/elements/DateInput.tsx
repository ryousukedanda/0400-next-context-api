import React from 'react';

interface DateInputProps {
  defaultValue?: string;
  ref?: React.RefObject<HTMLInputElement | null>;
  isEdit?: boolean;
  onChange: (e: React.FocusEvent<HTMLInputElement>) => void | Promise<void>;
}

const DateInput = ({ defaultValue, ref, isEdit, onChange }: DateInputProps) => {
  return (
    <input
      type="date"
      defaultValue={defaultValue}
      ref={ref}
      className={`rounded-sm py-2 px-3 font-light text-dark border-0 shadow-[0_0_4px_1px_#22222210] ${
        isEdit && 'bg-[#fafafa] min-w-full'
      }`}
      onBlur={(e) => onChange(e)}
    />
  );
};

export default DateInput;
