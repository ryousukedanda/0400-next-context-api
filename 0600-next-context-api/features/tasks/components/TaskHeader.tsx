import React from 'react';

const TaskHeader = () => {
  return (
    <div className="flex border-b border-table-border">
      <div className="w-1/2 p-1 text-[10px] font-bold">タスク</div>
      <div className="w-[14%] p-1 text-[10px] font-bold">プロジェクト</div>
      <div className="w-[12%] p-1 text-[10px] font-bold">ステータス</div>
      <div className="p-1 text-[10px] font-bold">期限日</div>
      <div className="border-r-0 w-2/25 p-1 text-[10px] font-bold"></div>
    </div>
  );
};

export default TaskHeader;
