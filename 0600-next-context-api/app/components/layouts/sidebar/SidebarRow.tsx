import Link from 'next/link';
import SidebarProjectRow from './SidebarProjectRow';
import { sidebarList } from '@/constants/constatns';

const SidebarRow = () => {
  return (
    <ul>
      {sidebarList.map((sidebarItem) => {
        return (
          <li key={sidebarItem.name}>
            <Link
              href={sidebarItem.path}
              className="cursor-pointer block py-4 pr-4 pl-8 text-[14px] whitespace-nowrap hover:bg-[#8fe3c740]"
            >
              <div className="text-dark font-medium tracking-[0.8px] flex items-center justify-between">
                {sidebarItem.name}
              </div>
            </Link>
          </li>
        );
      })}
      <SidebarProjectRow />
    </ul>
  );
};

export default SidebarRow;
