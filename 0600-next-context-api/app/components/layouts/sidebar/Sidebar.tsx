import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
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
        <div className="h-full">
          {isOpenSidebar ? (
            <ul>
              {/* TODO:sidebarRowでまとめれる */}
              <li>
                <Link
                  href="/"
                  className="cursor-pointer block py-4 pr-4 pl-8 text-[14px] whitespace-nowrap hover:bg-[#8fe3c740]"
                >
                  <div className="text-dark font-medium tracking-[0.8px] flex items-center justify-between">
                    ダッシュボード
                  </div>
                </Link>
              </li>
              <li>
                <div className=" cursor-pointer block py-4 pr-4 pl-8 text-[14px] whitespace-nowrap hover:bg-[#8fe3c740]">
                  <div className="text-dark font-medium tracking-[0.8px] flex items-center justify-between">
                    タスク
                  </div>
                </div>
              </li>
              <li>
                <div className="cursor-pointer block py-4 pr-4 pl-8 text-[14px] whitespace-nowrap hover:bg-[#8fe3c740]">
                  <div className="text-dark font-medium tracking-[0.8px] flex items-center justify-between">
                    <div>プロジェクト</div>
                  </div>
                </div>
              </li>
              <ul className="my-4 mr-0 ml-8">
                {/* TODO:projectRowでまとめれる */}
                <li className="cursor-pointer block py-4 pr-4 pl-8 text-[14px] whitespace-nowrap hover:bg-[#8fe3c740]">
                  <div className="flex justify-between items-end text-dark">
                    <div>
                      <span
                        className="bg-[rgba(0,0,140,0.6)] inline-block
                     h-2 w-2 rounded-sm mr-2"
                      ></span>
                      プログラミング
                    </div>
                    <span className="inline-block text-[10px] ml-8">
                      2025/11/02
                    </span>
                  </div>
                </li>
                <li className="cursor-pointer block py-4 pr-4 pl-8 text-[14px] whitespace-nowrap hover:bg-[#8fe3c740]">
                  <div className="flex justify-between items-end text-dark">
                    <div>
                      <span
                        className="bg-[rgba(0,25,255,0.6)] inline-block
                     h-2 w-2 rounded-sm mr-2"
                      ></span>
                      英語
                    </div>
                    <span className="inline-block text-[10px] ml-8">
                      2025/11/09
                    </span>
                  </div>
                </li>
                <li className="cursor-pointer block py-4 pr-4 pl-8 text-[14px] whitespace-nowrap hover:bg-[#8fe3c740]">
                  <div className="flex justify-between items-end text-dark">
                    <div>
                      <span
                        className="bg-[rgba(0,165,255,0.6)] inline-block
                     h-2 w-2 rounded-sm mr-2"
                      ></span>
                      プライベート
                    </div>
                    <span className="inline-block text-[10px] ml-8">
                      2025/11/16
                    </span>
                  </div>
                </li>
              </ul>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
