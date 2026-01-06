import Link from 'next/link';
import SidebarProjectRow from './SidebarProjectRow';
import { sidebarList } from '@/constants';
import { usePathname } from 'next/navigation';
import useFetchProjects from 'features/projects/hooks/useFetchProjects';
import { useEffect, useState } from 'react';

const SidebarRow = () => {
  const pathName = usePathname();

  return (
    <ul>
      {sidebarList.map((sidebarItem) => {
        const isActive = pathName === sidebarItem.path;

        return (
          <li
            key={sidebarItem.name}
            className={`${isActive ? 'bg-hover text-dark' : ''}`}
          >
            <Link
              href={sidebarItem.path}
              className="cursor-pointer block py-4 pr-4 pl-8 text-[14px] whitespace-nowrap hover:bg-[#8fe3c740]"
            >
              <div
                className={`tracking-[0.8px] flex items-center justify-between ${
                  isActive ? 'text-dark font-bold' : 'text-dark font-medium'
                }`}
              >
                {sidebarItem.name}
              </div>
            </Link>
          </li>
        );
      })}
      <SidebarProjectRow pathName={pathName} />
    </ul>
  );
};

export default SidebarRow;
