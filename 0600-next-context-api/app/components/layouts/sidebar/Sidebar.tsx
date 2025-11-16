import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import SidebarRow from './SidebarRow';
const activeClass = 'text-dark font-bold';
const Sidebar = () => {
  //クリックした時のイベントハンドラー
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  return (
    <div
      className={`${
        isOpenSidebar ? 'w-90' : 'transition-all duration-200 w-9'
      } bg-light3 h-full`}
    >
      <div className="h-[calc(100%-80px)]">
        {/* sidebar-header */}
        <div
          className={`flex h-10 p-4 ${
            isOpenSidebar ? 'justify-end' : 'justify-center'
          }`}
          onClick={() => setIsOpenSidebar((prev) => !prev)}
        >
          <span className="cursor-pointer transition-all duration-200 hover:scale-130">
            {isOpenSidebar ? (
              <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
            ) : (
              <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
            )}
          </span>
        </div>
        {/* sidebar-body */}
        <div className="h-full">{isOpenSidebar ? <SidebarRow /> : null}</div>
      </div>
    </div>
  );
};

export default Sidebar;
