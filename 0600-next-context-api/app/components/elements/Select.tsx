import { OptionsType } from '@/types';

interface SelectProps {
  options: OptionsType[];
  label: string;
  name?: string;
  id: string;
  onChange: (page?: number, limit?: number) => void;
  currentPage?: number;
}
const Select = ({
  options,
  label,
  name,
  id,
  onChange,
  currentPage,
}: SelectProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        name={name}
        id={id}
        className="py-1 px-2 border-0 bg-[rgb(59, 59, 59)]"
        onChange={(e) => onChange(currentPage, Number(e.target.value))}
      >
        {options.map((option) => {
          return (
            <option key={option.id} value={option.value}>
              {option.display}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
