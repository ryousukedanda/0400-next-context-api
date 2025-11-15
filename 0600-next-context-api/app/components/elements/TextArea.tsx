interface TextAreaProps {
  rows?: number;
  placeholder?: string;
}

const TextArea = ({ rows, placeholder }: TextAreaProps) => {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className="rounded-lg leading-[1.6em] p-4 w-full border-0 shadow-[0px_0px_4px_1px_#22222210] text-dark bg-light2"
    ></textarea>
  );
};

export default TextArea;
