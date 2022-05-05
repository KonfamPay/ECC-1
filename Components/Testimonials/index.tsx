import React from 'react'

const index : React.FC = ()  => {
  return (
    <div className="mt-48 relative w-full">
      <img src="./Images/hourglass.svg" alt="" className=""/> 
      <div className='absolute top-10 left-36 mb-32'>
        <p className="uppercase font-light">Testimonials</p>
        <p className="text-4xl font-semibold">Testimonies from vindicated customers</p>
      </div>
      <div className="absolute top-40 left-36">
        <div className="relative">
          <img src="./Images/man.png" alt="" className="rounded-[15px] w-full"/>
          <p className="absolute text-2xl font-bold bottom-[230px] text-white left-8 right-4">Danny Brown</p>
          <p className="absolute text-1xl font-extralight bottom-[200px] text-white left-8 right-4">Danny Brown</p>
          <p className="absolute text-2xl font-light bottom-12 text-white left-8 right-4">In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.</p>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default index