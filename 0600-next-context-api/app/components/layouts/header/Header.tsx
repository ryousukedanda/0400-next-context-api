'use client';

import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faCircleInfo,
  faBell,
  faUser,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useClickOutside } from 'features/tasks/hooks/useClickOutside';
import UserMenu from './UserMenu';

interface HeaderProps {
  onClick: () => void;
}

const Header = ({ onClick }: HeaderProps) => {
  return (
    <header className="bg-primary text-light">
      <div className="p-4 flex justify-between items-center">
        {/* 左 */}

        <div className="flex items-center cursor-pointer">
          <a>
            <div className="mr-8">
              <h2 className="text-[16px]">Turvo</h2>
            </div>
          </a>
        </div>

        {/* 右 */}
        <div className="mr-8 flex items-center">
          <ul className="flex mr-4 items-center">
            <li className="mr-4" onClick={() => onClick()}>
              <div className="transition-colors duration-500 cursor-pointer flex justify-center items-center h-full hover:text-[#eeeeee60]">
                <FontAwesomeIcon icon={faPlus} className="w-6 h-6" />
              </div>
            </li>
            <li className="mr-4">
              <div className="transition-colors duration-500 cursor-pointer flex justify-center items-center h-full hover:text-[#eeeeee60]">
                <FontAwesomeIcon icon={faCircleInfo} className="w-6 h-6" />
              </div>
            </li>
            <li className="mr-4">
              <div className="transition-colors duration-500 cursor-pointer flex justify-center items-center h-full hover:text-[#eeeeee60]">
                <FontAwesomeIcon icon={faBell} className="w-6 h-6" />
              </div>
            </li>
          </ul>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
