import {
  faArrowRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClickOutside } from 'features/tasks/hooks/useClickOutside';
import { Dispatch, SetStateAction, useRef } from 'react';

interface UserMenuContentProps {
  isClickUser: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
}
const UserMenuContent = ({ isClickUser, onClick }: UserMenuContentProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  //外側クリック検知
  useClickOutside(menuRef, () => onClick(false));

  return (
    <div className="relative" ref={menuRef}>
      <div
        className="cursor-pointer"
        onClick={() => {
          onClick(true);
        }}
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
  );
};

export default UserMenuContent;
