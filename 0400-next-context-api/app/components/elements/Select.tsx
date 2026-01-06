import { OptionsType } from '@/types';

interface SelectProps {
  options: OptionsType[];
  label: string;
  name?: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Select = ({ options, label, name, id, onChange }: SelectProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        name={name}
        id={id}
        className="py-1 px-2 border-0 bg-[rgb(59, 59, 59)]"
        onChange={(e) => onChange(e)}
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
