import { useRef, useState } from 'react';
import UserMenuContent from './UserMenuContent';
import { useClickOutside } from 'features/tasks/hooks/useClickOutside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserMenu = () => {
  const [isClickUser, setIsClickUser] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  //外側クリック検知
  useClickOutside(menuRef, () => setIsClickUser(false), isClickUser);

  return (
    <>
      {isClickUser && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000005] z-10"></div>
      )}

      <div className="relative" ref={menuRef}>
        <div
          className="cursor-pointer"
          onClick={() => setIsClickUser((prev) => !prev)}
        >
          <div className="bg-[#e0e0e0] h-7 w-7 rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
          </div>
        </div>
        {isClickUser && <UserMenuContent />}
      </div>
    </>
  );
};

export default UserMenu;
