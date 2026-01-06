import {
  faArrowRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserMenuContent = () => {
  return (
    <ul className="py-2 px-0 absolute z-10 -right-4 mt-2 shadow-[1px_1px_4px_4px_#22222240] bg-light2 text-dark rounded-md">
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
  );
};

export default UserMenuContent;
