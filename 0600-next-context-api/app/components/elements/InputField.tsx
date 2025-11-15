import React from 'react';

interface InputFieldProps {
  defaultValue?: string;
  ref?: React.RefObject<HTMLInputElement | null>;
  placeholder?: string;
  isEdit?: boolean;
  onChange: (e: React.FocusEvent<HTMLInputElement>) => void | Promise<void>;
}
const InputField = ({
  defaultValue,
  ref,
  placeholder,
  isEdit,
  onChange,
}: InputFieldProps) => {
  return (
    <input
      type="text"
      defaultValue={defaultValue}
      ref={ref}
      className={`rounded-sm py-2 px-3 w-full font-light text-[12px] text-dark border-0 shadow-[0_0_4px_1px_#22222210] ${
        isEdit && 'bg-[#fafafa] min-w-full'
      }`}
      placeholder={placeholder}
      onBlur={(e) => onChange(e)}
    />
  );
};

export default InputField;
