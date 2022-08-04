import type { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";

interface FileAComplaintRadioProps {
  iconPath: string;
  title: string;
  description: string;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}

const index: React.FC<FileAComplaintRadioProps> = ({
  iconPath,
  title,
  description,
  value,
  setValue,
}) => {
  return (
    <div
      onClick={() => setValue(!value)}
      style={{ backgroundColor: value ? "#F1F7FE" : "white" }}
      className="transition-[80ms] cursor-pointer relative border border-[#0B63C5] w-[full] rounded-[12px]"
    >
      <div className="py-[29px] flex space-x-[17.31px]">
        <div className="flex space-x-[10px] ml-[14.42px] mt-[5px]">
          <img
            src={`../icons/${iconPath}.svg`}
            className="w-[40px] h-[40px]"
            alt=""
          />
          <div className="border-r-[2px] border-r-[#0B63C5] h-[23px] mt-[10px]" />
        </div>
        <div>
          <p className="text-[#0B63C5] text-[20px] font-[700]">{title}</p>
          <p className="text-[18px] font-[400]">{description}</p>
        </div>
      </div>
      <div
        onClick={() => setValue(!value)}
        style={{ borderColor: value ? "#005cc8" : "#4f4f4f" }}
        className="transition-[80ms] cursor-pointer w-[30px] h-[30px] absolute right-[30px] bottom-[35%] border rounded-full bg-transparent flex items-center justify-center"
      >
        <div
          style={{ opacity: value ? 1 : 0 }}
          className="transition-[80ms] w-[18px] h-[18px] bg-[#005cc8] rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default index;
