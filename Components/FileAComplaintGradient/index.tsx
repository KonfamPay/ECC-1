import type { NextPage } from "next";

interface fileAComplaintGradientProps {
  number: number;
}

const index: React.FC<fileAComplaintGradientProps> = ({number}) => {
  return (
    <div className="text-[32px] w-[70px] h-[70px] bg-gradient-to-b from-[#0B63C5] to-[#073D79] rounded-full items-center justify-center">
      <p className="text-center text-white mx-auto py-[11px]">{number}</p>
    </div>
  );
};

export default index;
