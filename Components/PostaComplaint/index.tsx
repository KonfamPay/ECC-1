import React from 'react'

const index : React.FC = () => {
  return (
    <div className="mt-48 bg-white items-center justify-center text-center relative">
      <img src="./Images/rectangle2.svg" alt="" className="absolute w-full h-auto"/>
      <div className="absolute items-center justify-center text-center top-2/4 left-2/4">
        <p className="text-white text-4xl font-semibold top-[200px] left-[300px]">Not getting refund response or <br/>replacement?</p>
        <button className="items-center justify-center text-center bg-blue-600 rounded-[10px] py-4 px-[45px] mt-10 top-[250px] left-[300px]"><p className="mx-auto items-center justify-center text-center text-white font-semibold">Post a complaint</p></button>
      </div>  
    </div>
  )
}

export default index