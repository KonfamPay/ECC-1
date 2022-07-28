import type { NextPage } from "next";

interface FileAComplaintRadioProps {
  iconPath: string;
  title: string;
  description: string;
}

const index: React.FC<FileAComplaintRadioProps> = ({iconPath, title, description}) => {
  return (
    <div className='border border-[#0B63C5] w-[610px] rounded-[12px]'>
      <div className='py-[29px] flex space-x-[44px] space-y-[12px]'>
        <div className='flex space-x-[17.31px]'>
          <div className='flex space-x-[10px] ml-[14.42px] mt-[5px]'>
            <img src={`../icons/${iconPath}.svg`} className="w-[40px] h-[40px]" alt="" />
            <div className='border-r-[2px] border-r-[#0B63C5] h-[23px] mt-[10px]'/>
          </div>
          <div>
            <p className='text-[#0B63C5] text-[20px] font-[700]'>{title}</p>
            <p className='text-[18px] font-[400]'>{description}</p>
          </div>
        </div>
        <input type="radio" name="" id="" className="w-[30px] h-[30px]"/>
      </div>
    </div>
  );
};

export default index;
