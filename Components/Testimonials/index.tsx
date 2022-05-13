import React from 'react'
import IconContainer from '../IconContainer'

const index : React.FC = ()  => {
  return (
    <div className="mt-48 relative xl:w-full h-full xl:h-[960px]">
      <img src="./Images/hourglass.svg" className="xl:w-full h-full xl:h-[960px]"/> 
      <div className="absolute top-1 sm:top-1 md:top-8 lg:top-1 xl:top-10 left-10 md:left-[90px] lg:left-[140px]">
        <div className="pt-[30px] lg:pt-[40px] xl:pt-[72px]">
          <p className="uppercase font-regular text-[13px] xl:text-[16px]">Testimonials</p>
          <p className="font-medium pt-[4px] text-[20px] xl:text-[40px]">Testimonies from vindicated customers</p>
        </div>
        <div className="top-5 md:top-9 lg:top-32 xl:top-40 left-10 md:left-36 flex flex-row space-x-10 pt-[15px] md:pt-[20px] lg:pt-[55px]">
          <div className="">
            <div className="relative">
              <img src="./Images/man.png" alt="" className="rounded-[15px] w-[200px] md:w-[250px] lg:w-[300px] xl:w-[467px] h-[300px] md:h-[350px] lg:h-[450px] xl:h-[650px]"/>
              <div className="absolute bottom-5 md:bottom-5 lg:bottom-10 xl:bottom-20 px-[28px]"> 
                <p className="text-[10px] md:text-[13px] lg:text-[15px] xl:text-2xl [1px] font-bold text-white left-8 right-4 pb-[2px] md:pb-1 lg:pb-3">Danny Brown</p>
                <p className="text-[8px] md:text-[10px] lg:text-[15px] xl:text-1xl font-extralight left-8 right-4 pb-2 md:pb-3 lg:pb-7 text-[#AFAFAF]">Danny Brown</p>
                <p className="text-[11px] md:text-[10px] lg:text-[15px] xl:text-2xl [1px] font-light text-white left-8 right-4">In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.</p>
              </div>
              <div className="absolute -top-10 left-[30%] md:left-[35%] lg:left-[37%] xl:left-[42%]">
                <IconContainer iconPath={"/Images/shield.svg"} size="80"></IconContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
    }

export default index