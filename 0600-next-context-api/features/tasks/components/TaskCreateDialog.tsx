import { faCaretDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import DropDown from './DropDown';
import { now } from '@/api/datastore/models/date';
import DateDecorator from '@/api/datastore/models/date';
import { useProject } from '@/context/ProjectContext';

// 現在の日付
const today = now();

// 1週間後の日付を作る
const nextWeek = new DateDecorator(
  today.date!.add(7, 'day').format('YYYY-MM-DD')
).format();

interface TaskCreateDialogProps {
  onClose: Dispatch<SetStateAction<boolean>>;
}

const TaskCreateDialog = ({ onClose }: TaskCreateDialogProps) => {
  const [isClickProjectDropDown, setIsClickProjectDropDown] = useState(false);
  const [projectList, setProjectList] = useProject();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickInside = (e: MouseEvent) => {
      if (menuRef && !menuRef.current?.contains(e.target as Node)) {
        setIsClickProjectDropDown(false);
      }
    };
    document.addEventListener('mousedown', handleClickInside);
    return () => document.removeEventListener('mousedown', handleClickInside);
  }, []);

  return (
    <div className="block bg-overlay z-10 absolute top-0 w-full min-h-full">
      <div className="w-[60%] bg-light shadow-[1px_2px_6px_4px_#22222230] mt-[5%] mx-auto mb-auto ">
        <div className="p-4 flex justify-end">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-[16px] cursor-pointer w-[1em] h-[1em]"
          />
        </div>
        <div className="max-h-[80vh] overflow-y-scroll">
          <div className="p-16">
            <div className="m-auto w-160 font-light">
              <div className="mb-12">
                <h2 className="text-[14px] font-light">タスクを追加</h2>
              </div>
              {/* フォーム */}
              <div className="mb-12">
                {/* プロジェクト */}
                <div className="my-4 mx-0 " ref={menuRef}>
                  <div className="text-[12px] ">プロジェクト</div>
                  <div className="my-2 mx-0">
                    <div
                      className="flex justify-center items-center flex-col cursor-pointer"
                      onClick={() => setIsClickProjectDropDown(true)}
                    >
                      <div className="flex items-center bg-light2 rounded-sm p-2 justify-between w-full border-0 shadow-[0_0_4px_1px_#22222210]">
                        <p className="text-[12px]">
                          プログラムを選択してください
                        </p>
                        <div className="flex justify-center items-center h-full">
                          <FontAwesomeIcon
                            icon={faCaretDown}
                            className="w-[1em] h-[1em]"
                          />
                        </div>
                      </div>
                      {isClickProjectDropDown && (
                        <DropDown>
                          {projectList.map((project) => (
                            <li
                              key={project.id}
                              className="py-2 px-3 text-[12px] hover:bg-[#18e5af] hover:text-white hover:font-bold cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsClickProjectDropDown(false);
                              }}
                            >
                              {project.name}
                            </li>
                          ))}
                        </DropDown>
                      )}
                    </div>
                    {/* {謎のdiv} */}
                    <div></div>
                  </div>
                </div>
                {/* タスク */}
                <div className="my-4 mx-0">
                  <div className="text-[12px]">タスク</div>
                  <div className="my-2 mx-0">
                    <div>
                      <input
                        type="text"
                        className="rounded-sm py-2 px-3 w-full font-light text-[12px] text-dark border-0 shadow-[0_0_4px_1px_#22222210]"
                        placeholder="タスクを入力。 例)  英会話レッスンの予約、React公式ドキュメントを1ページ読む"
                      />
                    </div>
                    {/* {謎のdiv} */}
                    <div></div>
                  </div>
                </div>
                {/* 説明 */}
                <div className="my-4 mx-0">
                  <div className="text-[12px]">説明・メモ</div>
                  <div className="my-4 mx-0">
                    <div>
                      <textarea
                        rows={5}
                        placeholder="タスクの説明・メモ"
                        className="rounded-lg leading-[1.6em] p-4 w-full border-0 shadow-[0px_0px_4px_1px_#22222210] text-dark bg-light2"
                      ></textarea>
                    </div>
                  </div>
                </div>
                {/* 締切日 */}
                <div className="my-4 mx-0">
                  <div className="text-[12px]">締切日</div>
                  <div className="my-4 mx-0">
                    <div>
                      <input type="date" value={nextWeek} />
                    </div>
                    {/* {謎のdiv} */}
                    <div></div>
                  </div>
                </div>
                {/* ステータス */}
                <div className="my-4 mx-0">
                  <div className="text-[12px]">ステータス</div>
                  <div className="my-4 mx-0">
                    <div className="flex justify-center items-center flex-col cursor-pointer">
                      <div className="flex items-center bg-light2 rounded-sm p-2 justify-between w-full border-0 shadow-[0_0_4px_1px_#22222210]">
                        <p className="text-[12px]">未完了</p>
                        <div className="flex justify-center items-center h-full">
                          <FontAwesomeIcon
                            icon={faCaretDown}
                            className="w-[1em] h-[1em]"
                          />
                        </div>
                      </div>
                      {/* <DropDown>
                        {statusOptions.map(({ label, value }) => (
                          <li
                            key={value}
                            className="py-2 px-3 text-[12px] hover:bg-[#18e5af] hover:text-white hover:font-bold cursor-pointer"
                            onClick={() => handleChangeStatus(value)}
                          >
                            {label}
                          </li>
                        ))}
                      </DropDown> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* フッター */}
              <div className="flex">
                <div className="w-full flex h-12">
                  <button className="mr-4 bg-primary text-light shadow-[2px_2px_4px_1px_#1e514036] transition-colors duration-500 cursor-pointer border-0 py-2 px-4 rounded-sm tracking-[1.4px] text-[10px] w-full hover:bg-primary-darker hover:shadow-[2px_2px_4px_1px_#22222220]">
                    <span className="text-[14px]">作成</span>
                  </button>
                  <button className="mr-4 bg-secondary text-light shadow-[2px_2px_4px_1px_#1e514036] transition-shadow duration-500 cursor-pointer border-0 py-2 px-4 rounded-sm tracking-[1.4px] text-[10px] w-full hover:opacity-0.8 hover:shadow-[2px_2px_4px_1px_#22222220]">
                    キャンセル
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCreateDialog;
