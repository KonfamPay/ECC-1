import React from 'react'
import IconContainer from '../IconContainer'

const index : React.FC = ()  => {
  return (
    <div className="mt-48 relative xl:w-full xl:h-[960px]">
      <img src="./Images/hourglass.svg" alt="" className="xl:w-full xl:h-[960px]"/> 
      <div className="absolute lg:top-1 xl:top-10 sm:left-10 md:left-[140px]">
        <div className="lg:pt-[40px] xl:pt-[72px]">
          <p className="uppercase font-regular">Testimonials</p>
          <p className="text-4xl font-medium pt-[4px]">Testimonies from vindicated customers</p>
        </div>
        <div className="lg:top-32 xl:top-40 sm:left-10 md:left-36 flex flex-row space-x-10 pt-[55px]">
        <div className="">
          <div className="relative">
            <img src="./Images/man.png" alt="" className="rounded-[15px] lg:w-[300px] xl:w-[467px] lg:h-[450px] xl:h-[650px]"/>
            <div className="absolute lg:bottom-10 xl:bottom-20 px-[28px]"> 
              <p className="lg:text-[15px] xl:text-2xl sm:[1px] font-bold text-white left-8 right-4 pb-3">Danny Brown</p>
              <p className="lg:text-[15px] xl:text-1xl font-extralight left-8 right-4 pb-7 text-[#AFAFAF]">Danny Brown</p>
              <p className="lg:text-[15px] xl:text-2xl sm:[1px] font-light text-white left-8 right-4">In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.</p>
            </div>
            <div className="absolute -top-10 lg:left-[37%] xl:left-[42%]">
              <IconContainer iconPath={"/Images/shield.svg"}></IconContainer>
            </div>
          </div>
        </div>
        {/* <div className="">
          <div className="relative">
            <img src="./Images/man.png" alt="" className="rounded-[15px] lg:w-[300px] xl:w-[467px] lg:h-[450px] xl:h-[650px]"/>
            <div className="absolute lg:bottom-10 xl:bottom-20 px-[28px]"> 
              <p className="lg:text-[15px] xl:text-2xl sm:[1px] font-bold text-white left-8 right-4 pb-3">Danny Brown</p>
              <p className="lg:text-[15px] xl:text-1xl font-extralight text-white left-8 right-4 pb-7">Danny Brown</p>
              <p className="lg:text-[15px] xl:text-2xl sm:[1px] font-light text-white left-8 right-4">In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.</p>
            </div>
            <div className="absolute -top-10" style={{left: "42%"}}>
              <IconContainer iconPath={"/Images/shield.svg"}></IconContainer>
            </div>
          </div>
        </div> */}
      </div>
      </div>
    </div>
  )
}

export default index