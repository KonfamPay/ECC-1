import type { NextPage } from "next";

interface fileAComplaintProcessProps {
  number: number;
  text: string
}

const index: React.FC<fileAComplaintProcessProps> = ({number, text}) => {
  return (
    <div className="flex space-x-[18px] space-y-[17px]">
      <div className="text-[32px] w-[70px] h-[70px] bg-gradient-to-b from-[#0B63C5] to-[#073D79] rounded-full items-center justify-center">
        <p className="text-center text-white mx-auto py-[11px]">{number}</p>
      </div>
      <p className="font-[500] text-[24px]">{text}</p>
    </div>  
  );
};

export default index;
