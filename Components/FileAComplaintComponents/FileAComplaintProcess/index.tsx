import type { NextPage } from "next";

interface FileAComplaintProcessProps {
  number: number;
  text: string;
  active: boolean
}

const index: React.FC<FileAComplaintProcessProps> = ({number, text, active}) => {
  return (
    <div className="flex space-x-[18px] space-y-[17px]">
      <div className={`text-[32px] w-[70px] h-[70px] ${active ? 'bg-gradient-to-b from-[#0B63C5] to-[#073D79] text-white' : 'border-[2px] text-[#C5C5C5]'} rounded-full items-center justify-center`}>
        <p className="text-center mx-auto py-[11px]">{number}</p>
      </div>
      <p className="font-[500] text-[24px]">{text}</p>
    </div>  
  );
  
};

export default index;
