import {
  faArrowRight,
  faCalendar,
  faCodeCommit,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Chart from 'features/chart/components/Chart';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  return (
    <div className="p-8 w-full h-full overflow-scroll bg-content">
      <div className="w-full h-full">
        {/* dashboard */}
        <div className="p-8 flex justify-between bg-light2 ">
          {/* projectList */}
          <div className="grow shrink mr-8 ">
            <h2 className="flex justify-between text-[14px] font-thin items-center">
              プロジェクト
            </h2>
            <div className="py-4 px-0 ">
              <a href="/projects/programming">
                <div className="border-l-[5px] border-[rgba(0,0,140,0.6)] p-4 border-0 shadow-[1px_1px_3px_1px_#22222210] mb-4 bg-light2 transition-all duration-500 text-dark-week ">
                  <div className="flex justify-between items-center">
                    <h2 className="text-[rgba(0,0,140,0.6)] text-[10px] font-bold">
                      プログラミング
                    </h2>
                    <p className="flex items-center text-dark">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="w-2.5 h-2.5"
                      />
                      2025/11/02
                    </p>
                  </div>
                  <div className="py-4 px-0">
                    <div className="flex items-center mr-4 mb-2 text-[20px] text-dark font-bold">
                      <p>期日までにフロントエンジニアとして就職する。</p>
                    </div>
                    <div className="flex items-center text-[14px] font-thin text-dark-week ">
                      <p>エンジニアとしての学習習慣を身につけて生活する。</p>
                    </div>
                  </div>
                  <div className="flex justify-end text-dark-week">
                    <div className="flex items-center">
                      <p className="cursor-pointer flex items-center">
                        <span className="mr-1 ml-2">
                          <FontAwesomeIcon
                            icon={faCodeCommit}
                            className="w-3 h-3"
                          />
                        </span>
                        <span className="text-[12px] text-dark-week ">4</span>
                      </p>
                      <p className="cursor-pointer flex items-center">
                        <span className="mr-1 ml-2">
                          <FontAwesomeIcon
                            icon={faFileLines}
                            className="w-3 h-3"
                          />
                        </span>
                        <span className="text-[12px] text-dark-week">30</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/projects/english">
                <div className="border-l-[5px] border-[rgba(0,25,255,0.6)] p-4 border-0 shadow-[1px_1px_3px_1px_#22222210] mb-4 bg-light2 transition-all duration-500 text-dark-week ">
                  <div className="flex justify-between items-center">
                    <h2 className="text-[rgba(0,25,255,0.6)] text-[10px] font-bold">
                      英語
                    </h2>
                    <p className="flex items-center text-dark">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="w-2.5 h-2.5"
                      />
                      2025//11/09
                    </p>
                  </div>
                  <div className="py-4 px-0">
                    <div className="flex items-center mr-4 mb-2 text-[20px] text-dark font-bold">
                      <p>IELTS Ovarall 7.0を取得する。</p>
                    </div>
                    <div className="flex items-center text-[14px] font-thin text-dark-week ">
                      <p>英語に浸る。</p>
                    </div>
                  </div>
                  <div className="flex justify-end text-dark-week">
                    <div className="flex items-center">
                      <p className="cursor-pointer flex items-center">
                        <span className="mr-1 ml-2">
                          <FontAwesomeIcon
                            icon={faCodeCommit}
                            className="w-3 h-3"
                          />
                        </span>
                        <span className="text-[12px] text-dark-week ">4</span>
                      </p>
                      <p className="cursor-pointer flex items-center">
                        <span className="mr-1 ml-2">
                          <FontAwesomeIcon
                            icon={faFileLines}
                            className="w-3 h-3"
                          />
                        </span>
                        <span className="text-[12px] text-dark-week">30</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/projects/private">
                <div className="border-l-[5px] border-[rgba(0,165,255,0.6)] p-4 border-0 shadow-[1px_1px_3px_1px_#22222210] mb-4 bg-light2 transition-all duration-500 text-dark-week ">
                  <div className="flex justify-between items-center">
                    <h2 className="text-[rgba(0,165,255,0.6)] text-[10px] font-bold">
                      プライベート
                    </h2>
                    <p className="flex items-center text-dark">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="w-2.5 h-2.5"
                      />
                      2025//11/16
                    </p>
                  </div>
                  <div className="py-4 px-0">
                    <div className="flex items-center mr-4 mb-2 text-[20px] text-dark font-bold">
                      <p>長期休みに旅行をする。</p>
                    </div>
                  </div>
                  <div className="flex justify-end text-dark-week">
                    <div className="flex items-center">
                      <p className="cursor-pointer flex items-center">
                        <span className="mr-1 ml-2">
                          <FontAwesomeIcon
                            icon={faCodeCommit}
                            className="w-3 h-3"
                          />
                        </span>
                        <span className="text-[12px] text-dark-week ">4</span>
                      </p>
                      <p className="cursor-pointer flex items-center">
                        <span className="mr-1 ml-2">
                          <FontAwesomeIcon
                            icon={faFileLines}
                            className="w-3 h-3"
                          />
                        </span>
                        <span className="text-[12px] text-dark-week">30</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* chart */}
          <div className="grow shrink bg-light2 ">
            <h2 className="flex justify-between text-[14px] font-thin items-center">
              進捗
            </h2>
            <div className="py-4 px-0">
              <div className="h-full">
                <div className="h-full">
                  <div className="mt-16 w-full">
                    <Chart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* todoList */}
        <div className="p-8 bg-light2">
          {/* todoHeader */}
          <div className="flex justify-between">
            <h2>タスク</h2>
            <a
              href="/tasks"
              className="items-center flex text-primary tracking-[.1rem] text-[10px]"
            >
              タスク一覧
              <div className="flex justify-center items-center h-full">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-2.5 h-2.5 text-primary"
                />
              </div>
            </a>
          </div>
          {/* todoContent */}
          <div className="min-w-full py-4 px-0">
            <div className="w-full">
              <div className="w-full">
                <div className="flex border-b border-table-border">
                  <div className="w-1/2 p-1 text-[10px] font-bold">タスク</div>
                  <div className="w-[14%] p-1 text-[10px] font-bold">
                    プロジェクト
                  </div>
                  <div className="w-[12%] p-1 text-[10px] font-bold">
                    ステータス
                  </div>
                  <div className="p-1 text-[10px] font-bold">期限日</div>
                  <div className="border-r-0 w-2/25 p-1 text-[10px] font-bold"></div>
                </div>
                <div>
                  <div className="flex py-2 px-0 transition-all duration-500"></div>
                  {/* todoData */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <a
              href="/tasks"
              className="items-center flex text-primary tracking-[.1rem] text-[10px]"
            >
              あと4ページ
              <div className="flex justify-center items-center h-full">
                <FontAwesomeIcon icon={faArrowRight} className="w-2.5 h-2.5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
