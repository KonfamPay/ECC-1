import React from 'react'
import IconContainer from '../IconContainer'

const index : React.FC = ()  => {
  return (
    <div className="mt-48 relative w-full">
      <img src="./Images/hourglass.svg" alt="" className=""/> 
      <div className="absolute top-10 left-36 mb-48">
        <p className="uppercase font-light">Testimonials</p>
        <p className="text-4xl font-semibold">Testimonies from vindicated customers</p>
      </div>
      <div className="absolute top-40 left-36 flex flex-row space-x-10">
        <div className="">
          <div className="relative">
            <img src="./Images/man.png" alt="" className="rounded-[15px] w-[500px]"/>
            <div className="absolute bottom-20 px-[28px]"> 
              <p className="text-2xl font-bold text-white left-8 right-4 pb-3">Danny Brown</p>
              <p className="text-1xl font-extralight text-white left-8 right-4 pb-7">Danny Brown</p>
              <p className="text-2xl font-light text-white left-8 right-4">In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.</p>
            </div>
            <div className="absolute -top-10" style={{left: "42%"}}>
              <IconContainer iconPath={"/Images/shield.svg"}></IconContainer>
            </div>
          </div>
        </div>
        <div className="">
          <div className="relative">
            <img src="./Images/man.png" alt="" className="rounded-[15px] w-[500px]"/>
            <div className="absolute bottom-20 px-[28px]"> 
              <p className="text-2xl font-bold text-white left-8 right-4 pb-3">Danny Brown</p>
              <p className="text-1xl font-extralight text-white left-8 right-4 pb-7">Danny Brown</p>
              <p className="text-2xl font-light text-white left-8 right-4">In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.</p>
            </div>
            <div className="absolute -top-10" style={{left: "42%"}}>
              <IconContainer iconPath={"/Images/shield.svg"}></IconContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index