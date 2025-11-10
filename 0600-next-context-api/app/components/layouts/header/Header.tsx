'use client';

import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faCircleInfo,
  faBell,
  faUser,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  onClick: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ onClick }: HeaderProps) => {
  const [isClickUser, setIsClickUser] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // プラスボタンの外側クリック検知
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsClickUser(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <li className="mr-4" onClick={() => onClick(true)}>
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

          {/* ユーザーアイコンとドロップダウン */}
          <div className="relative" ref={menuRef}>
            <div
              className="cursor-pointer"
              onClick={() => setIsClickUser((prev) => !prev)}
            >
              <div className="bg-[#e0e0e0] h-7 w-7 rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
              </div>
            </div>

            {isClickUser && (
              <ul className="py-2 px-0 absolute z-10 right-0 mt-2 shadow-[1px_1px_4px_4px_#22222240] bg-light2 text-dark rounded-md">
                <li className="min-w-[200px] cursor-pointer hover:bg-hover">
                  <a className="flex p-4">
                    <div className="mr-2 flex justify-center items-center">
                      <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                    </div>
                    プロフィール
                  </a>
                </li>

                <li>
                  <div className="h-px w-[80%] m-auto bg-border"></div>
                </li>

                <li className="min-w-[200px] cursor-pointer hover:bg-hover">
                  <div className="flex p-4">
                    <div className="mr-2 flex justify-center items-center">
                      <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        className="h-5 w-5 text-danger"
                      />
                    </div>
                    <p className="text-danger">ログアウト</p>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
