import { useState } from 'react';
import UserMenuContent from './UserMenuContent';

const UserMenu = () => {
  const [isClickUser, setIsClickUser] = useState(false);

  return (
    <>
      {isClickUser && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000005] z-10"></div>
      )}
      <UserMenuContent isClickUser={isClickUser} onClick={setIsClickUser} />
    </>
  );
};

export default UserMenu;
