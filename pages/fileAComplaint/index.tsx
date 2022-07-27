import type { NextPage } from "next";
import FileAComplaintGradient from '../../Components/FileAComplaintProcess'

const index: NextPage = () => {
  return (
    <div className="">
      <div className="mx-auto text-center mt-[72px]">
        <p className="text-[40px] font-[500]">File a Complaint</p>
        <p className="text-[#0B63C5] text-[20px] mt-[20px]">Allow ecommerce complaint help you in your fight aginst online fraud </p>
      </div>
      <div className="mt-[90px] gird grid-cols-3 gap-x-[100px] mx-[224.5px]">
        <div>
          <FileAComplaintGradient number={1} text={'Complaint Info'}/>
        </div>
      </div>
    </div>
  );
};

export default index;
