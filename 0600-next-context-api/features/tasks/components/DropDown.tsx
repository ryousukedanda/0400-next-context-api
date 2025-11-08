import { ReactNode } from 'react';

interface DropDownProps {
  children: ReactNode;
}

const DropDown = ({ children }: DropDownProps) => {
  return (
    <div className="relative w-full">
      <ul className="absolute z-10 shadow-[2px_2px_4px_4px_#22222210] bg-white min-w-[120px] w-full py-2 px-0 rounded-md border border-[#e0e0e0]">
        {children}
      </ul>
    </div>
  );
};

export default DropDown;
