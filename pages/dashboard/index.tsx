import type { NextPage } from 'next';
import DashboardCard from '../../Components/DashboardComponents/DashboardCard';

const index : NextPage = props => {
  return (
    <div className="">
      <div className='bg-[#020D1B] mx-[28.5px] w-[1091px] h-[255px] rounded-[20px] flex flex-row relative'>
        <div className='text-white pl-[43px] py-[58.5px]'>
          <p className='text-[40px] leading-[60px] font-[600]'>Hi, Voke</p>
          <p className='text-[24px] leading-[36px] font-[600] w-[503px]'>Vendor don do you strong thing again? We are ready to listen to your complaints</p>
        </div>
        <div>
          <img src="./Images/man-freaked-out.png" className='absolute right-[21.28px] -top-[30.54px] h-[285.54px] w-[377.72px]' alt="" />
        </div>
      </div>
      <div className='mt-[59px]'>
        <DashboardCard/>
      </div>
    </div>
  )
}

export default index