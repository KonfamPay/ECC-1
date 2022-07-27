import type { NextPage } from "next";

const index: NextPage = () => {
  return (
    <div className="">
      <div className="mx-auto text-center mt-[72px]">
        <p className="text-[40px] font-[500]">File a Complaint</p>
        <p className="text-[#0B63C5] text-[20px] mt-[20px]">Allow ecommerce complaint help you in your fight aginst online fraud </p>
      </div>
      <div className="mt-[90px] gird grid-cols-3 gap-x-[100px] mx-[224.5px]">
        <div>
          <div className="text-[32px] w-[70px] h-[70px] bg-gradient-to-r from-indigo-500 rounded-full items-center justify-center">
            <p className="text-center text-white mx-auto py-[11px]">1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
