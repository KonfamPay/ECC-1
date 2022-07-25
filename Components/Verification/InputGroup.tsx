interface InputGroupProps {
  label: string;
  placeholder: string | null;
  value: string;
  setValue: any;
  type: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  placeholder,
  value,
  setValue,
  type,
}) => {
  return (
    <div>
      <p className="text-[20px]">{label} <span className="text-[#EF2E2E]">*</span></p>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="transition-[150ms] py-[20px] xl:py-[25px] px-[20px] focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] mt-[10px] w-full focus:border-[#0B63C5]"
        placeholder={(placeholder) ? (placeholder) : null}
        type={type}
      />
    </div>
  );
};
export default InputGroup;
