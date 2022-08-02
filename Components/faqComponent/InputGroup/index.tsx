interface InputGroupProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: any;
  type: string;
}

const index: React.FC<InputGroupProps> = ({
  label,
  placeholder,
  value,
  setValue,
  type,
}) => {
  return (
    <div>
      <p className="text-[20px]">{label}</p>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="transition-[150ms] py-[20px] xl:py-[25px] px-[20px] focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] mt-[10px] w-full focus:border-[#0B63C5]"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
export default index;
