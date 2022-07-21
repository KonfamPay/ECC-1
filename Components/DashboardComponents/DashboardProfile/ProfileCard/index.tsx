import type { NextPage } from 'next';
import DashboardCard from '../../DashboardCard';

const profile : NextPage = props => {
  return (
    <div className="ml-[31px] mt-[58px] w-[592px] bg-white rounded-[20px]">
      <img src="/icons/dashboard-icons/profile-header.svg" className='rounded-t-[20px]' alt="" />
      <div className='text-center'>
        <p className='mt-[94px] text-[24px] font-[500]'>Voke Onoriode</p>
        <p className='mt-[10px] text-[18px] font-[500]'>Vokeonoriode@gmail.com</p>
      </div>
      <div className='mx-[74.5px] mt-[29px] grid grid-cols-2 gap-y-[86px]'>
        <div>
          <div className='border-b-[0.5px] border-b-[#C5C5C5] w-[165px]'>
            <p className='text-[#0B63C5] text-[16px]'>Phone Number</p>
          </div>
          <div className='mt-[10px]'>
            <p className='text-[18px]'>09065748390</p>
          </div>
        </div>
        <div>
          <div className='border-b-[0.5px] border-b-[#C5C5C5] w-[165px]'>
            <p className='text-[#0B63C5] text-[16px]'>Date of Birth</p>
          </div>
          <div className='mt-[10px]'>
            <p className='text-[18px]'>12-01-2001</p>
          </div>
        </div>
        <div>
          <div className='border-b-[0.5px] border-b-[#C5C5C5] w-[165px]'>
            <p className='text-[#0B63C5] text-[16px]'>Address</p>
          </div>
          <div className='mt-[10px]'>
            <p className='text-[18px]'>4. jubril Adejumobi Street
Lagos, Nigeria</p>
          </div>
        </div>
        <div>
          <div className='border-b-[0.5px] border-b-[#C5C5C5] w-[165px]'>
            <p className='text-[#0B63C5] text-[16px]'>State</p>
          </div>
          <div className='mt-[10px]'>
            <p className='text-[18px]'>Lagos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profile