const TaskDescriptionField = () => {
  return (
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
  );
};

export default TaskDescriptionField;
