import React from 'react';

interface faqComponentProps {
  iconPath: string;
  title: string;
  text: string;
}

const index : React.FC<faqComponentProps>= ({iconPath, title, text}) => {
    return (
    <div>
      <div className='bg-[#F1F7FE] w-[70px] h-[70px] flex rounded-full'>
        <img src="../icons/faq-1.svg" className='my-[17px] mx-[17px]' alt="" />
      </div>
      <div className='mt-[36px] text-white '>
        <p className='text-[22px] font-bold'>How do i access saved  complains? </p>
        <p className='mt-[11px] w-[364px] text-[20px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.</p>
      </div>
    </div>
  )
}

export default index