import { useClickOutside } from 'features/tasks/hooks/useClickOutside';
import { useRef } from 'react';

interface option {
  label: string;
  value: string;
}
interface DropDownProps {
  isOpen: boolean;
  options: option[];
  onSelect: (
    value: string,
    label: string,
    e?: React.MouseEvent<HTMLLIElement>
  ) => void;
  onClickOutside: () => void;
}

const DropDown = ({
  options,
  onSelect,
  onClickOutside,
  isOpen,
}: DropDownProps) => {
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropDownRef, onClickOutside, isOpen);

  return (
    <div
      className={`relative w-full ${isOpen ? 'block' : 'hidden'}`}
      ref={dropDownRef}
    >
      <ul className="absolute z-10 shadow-[2px_2px_4px_4px_#22222210] bg-white min-w-[120px] w-full py-2 px-0 rounded-md border border-[#e0e0e0]">
        {options.map(({ label, value }) => (
          <li
            key={value}
            className="py-2 px-3 text-[12px] hover:bg-[#18e5af] hover:text-white hover:font-bold cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(value, label);
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
