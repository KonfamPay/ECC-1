import React from 'react'

const index : React.FC = () => {
  return (
    <div className="mt-48 bg-[#010C18] pt-10 h-[687px] w-full sm:w-full md:w-full xl:w-full lg:w-full">
      <p className="text-[40px] text-white text-center font-bold mt-[88px]">Our Numbers speak good deed about us</p>
      <div className="sm:space-x-10 md:space-x-10 lg:space-x-[120px] flex flex-row mx-auto items-center justify-center mt-[122px]">
        <div className="w-auto">
          <p className="text-white font-extrabold text-[30px] sm:text-[50px] md:text-[58px] xl:text-[72px]">75K+</p>
          <p className="text-white text-center font-extralight md:text-[15px] lg:text-[20px]">Complaints filled <br/>by customers</p>
        </div>
        <div className="w-auto">
          <p className="text-white font-extrabold text-[30px] sm:text-[50px] md:text-[58px] xl:text-[72px]">56K+</p>
          <p className="text-white text-center font-extralight md:text-[15px] lg:text-[20px]">Complains resolved <br/> by companies</p>
        </div>
        <div className="w-auto">
          <p className="text-white font-extrabold text-[30px] sm:text-[50px] md:text-[58px] xl:text-[72px]">200K+</p>
          <p className="text-white text-center w-auto font-extralight md:text-[15px] lg:text-[20px]">Ever Ready Law <br/> Practitioners</p>
        </div>
      </div>
    </div>
  )
}

export default index