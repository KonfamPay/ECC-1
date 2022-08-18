interface InputGroupProps {
  label: string;
  placeholder: string;
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
      <p className="text-[14px] md:text-[16px] lg:text-[20px]">{label}</p>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="transition-[150ms] text-[11px] placeholder:text-[11px] md:text-[14px] md:placeholder:text-[14px] lg:text-[16px] lg:placeholder:text-[16px] py-[13px] md:py-[20px] xl:py-[25px] px-[15px] lg:px-[20px] focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] mt-[10px] w-full focus:border-[#0B63C5]"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
export default InputGroup;
