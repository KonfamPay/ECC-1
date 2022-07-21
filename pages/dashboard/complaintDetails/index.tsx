import type { NextPage } from 'next';

const mycomplaints : NextPage = props => {
  return (
    <div className="mx-[35px] mt-[60px] w-[1079px] h-[827px] rounded-[20px]">
      <div className='bg-[#0B63C5] rounded-t-[20px] h-[78px]'>
        <div className='flex flex-row space-x-[40px]  ml-[27px] py-[17px]'>
          <img src="/icons/dashboard-icons/arrow.svg" className='w-[36px] h-[36px]' alt="" />
          <p className='text-[24px] text-white'>Complaint Details</p>
        </div>  
      </div>
      <div className='mx-[27px]'>
        <p>Greviance ID: 423576275442ecc</p>
      </div>
    </div>
  )
}

export default mycomplaints