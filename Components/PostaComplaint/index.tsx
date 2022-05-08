import React from 'react'

const index : React.FC = () => {
  return (
    <div className="mt-48 bg-white items-center justify-center text-center relative">
      <img src="./Images/rectangle2.svg" alt="" className="w-full h-auto"/>
      <div className="absolute w-full h-full items-center justify-center text-center top-0 flex flex-col">
        <p className="text-white xl:text-[48px] font-semibold">Not getting refund response or <br/>replacement?</p>
        <button className="items-center justify-center text-center bg-blue-600 rounded-[10px] py-4 px-[45px] mt-10 xl:w-[275px] xl:h-[72px]"><p className="mx-auto items-center justify-center text-center text-white font-semibold xl:text-[18px]">Post a complaint</p></button>
      </div>  
    </div>
  )
}

export default index