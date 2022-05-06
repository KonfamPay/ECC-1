import React from 'react'

const index : React.FC = () => {
  return (
    <div className="mt-48 bg-[#010C18] pt-10 w-auto h-[687px]">
      <p className="text-[40px] text-white text-center font-bold mt-[88px]">Our Numbers speak good deed about us</p>
      <div className="space-x-[120px] flex flex-row mx-auto items-center justify-center mt-[122px] space">
        <div className="w-auto">
          <p className="text-white font-extrabold text-[72px]">75K+</p>
          <p className="text-white">Complaints filled by customers</p>
        </div>
        <div className="w-auto">
          <p className="text-white font-extrabold text-[72px]">56K+</p>
          <p className="text-white">Complaints filled by customers</p>
        </div>
        <div className="w-auto">
          <p className="text-white font-extrabold text-[72px]">200K+</p>
          <p className="text-white">Complaints filled by customers</p>
        </div>
      </div>
    </div>
  )
}

export default index