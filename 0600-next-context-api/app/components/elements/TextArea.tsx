interface TextAreaProps {
  value: string;
  onChange: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  placeholder?: string;
}

const TextArea = ({ value, onChange, rows, placeholder }: TextAreaProps) => {
  return (
    <textarea
      value={value}
      rows={rows}
      placeholder={placeholder}
      onChange={(e: React.FocusEvent<HTMLTextAreaElement>) => onChange(e)}
      className="rounded-lg leading-[1.6em] p-4 w-full border-0 shadow-[0px_0px_4px_1px_#22222210] text-dark bg-light2"
    ></textarea>
  );
};

export default TextArea;
