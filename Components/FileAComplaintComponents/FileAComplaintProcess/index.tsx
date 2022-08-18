import type { NextPage } from "next";

interface FileAComplaintProcessProps {
  number: number;
  text: string;
  active: boolean
}

const index: React.FC<FileAComplaintProcessProps> = ({number, text, active}) => {
  return (
    <div className="flex space-x-[6.31px] lg:space-x-[18px] lg:space-y-[17px] items-center justify-center" style={{ flex: "1 0 auto" }}>
      <div className={`text-[11.22px] lg:text-[32px] w-[24.54px] h-[24.54px] lg:w-[70px] lg:h-[70px] ${active ? 'bg-gradient-to-b from-[#0B63C5] to-[#073D79] text-white' : 'border-[0.7px] lg:border-[2px] text-[#C5C5C5]'} rounded-full flex items-center justify-center`}>
        <p>{number}</p>
      </div>
      <p className="font-[500] text-[10.42px] lg:text-[24px]">{text}</p>
    </div>  
  );
  
};

export default index;
