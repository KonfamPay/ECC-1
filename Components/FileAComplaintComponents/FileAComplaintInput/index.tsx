interface FileAComplaintInputProps {
  label: string;
  placeholder: string | null;
  value: string;
  setValue: any;
  type: string;
  nairaSymbol: boolean | null;
}

const FileAComplaintInput: React.FC<FileAComplaintInputProps> = ({
  label,
  placeholder,
  value,
  setValue,
  type,
  nairaSymbol,
}) => {
  return (
    <div>
      <div className="flex items-center space-x-[13px]">
        <p className="text-[14px] lg:text-[20px]">{label}</p>
        <img src="./icons/fac-help.svg" alt="" />
      </div>
      <div className="relative">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`transition-[150ms] py-[12.5px] lg:py-[20px] xl:py-[25px] ${
            nairaSymbol ? "" : ""
          } focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] mt-[10px] w-full focus:border-[#0B63C5] placeholder:text-[12px] lg:placeholder:text-[16px] placeholder:text-[#C5C5C5] cursor-pointer ${
            nairaSymbol ? "px-[52px]" : "px-[20px] "
          }`}
          placeholder={placeholder ? placeholder : null}
          type={type}
        />
        {nairaSymbol && (
          <img
            src="./icons/naira.svg"
            alt=""
            className="w-[22px] h-[22px] absolute left-[20px] bottom-[25%] lg:bottom-[33%]"
          />
        )}
      </div>
    </div>
  );
};
export default FileAComplaintInput;
