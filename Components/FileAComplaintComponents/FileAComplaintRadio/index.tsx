import type { NextPage } from "next";

interface fileAComplaintProcessProps {
  number: number;
  text: string;
  active: boolean
}

const index: React.FC<fileAComplaintProcessProps> = ({number, text, active}) => {
  return (
    <div className="flex space-x-[18px] space-y-[17px]">
      <div className={`text-[32px] w-[70px] h-[70px] ${active ? 'bg-gradient-to-b from-[#0B63C5] to-[#073D79] text-white' : 'border-[2px] text-[#C5C5C5]'} rounded-full items-center justify-center`}>
        <p className="text-center mx-auto py-[11px]">{number}</p>
      </div>
      <p className="font-[500] text-[24px]">{text}</p>
    </div>  
  );
  <div className='border border-[#0B63C5] w-[610px] rounded-[12px]'>
                <div className='py-[29px] flex space-x-[44px] space-y-[12px]'>
                  <div className='flex space-x-[17.31px]'>
                    <div className='flex space-x-[10px] ml-[14.42px] mt-[5px]'>
                      <img src="../icons/dashboard-icons/refund.svg" className="w-[40px] h-[40px]" alt="" />
                      <div className='border-r-[2px] border-r-[#0B63C5] h-[23px] mt-[10px]'/>
                    </div>
                    <div>
                      <p className='text-[#0B63C5] text-[20px] font-[700]'>A Refund</p>
                      <p className='text-[18px] font-[400]'>All expenses incurred will be returned to you</p>
                    </div>
                  </div>
                  <input type="radio" name="" id="" className="w-[30px] h-[30px]"/>
                </div>
              </div>
};

export default index;
