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
      <div className='mx-[27px] mt-[52px]'>
        <div className='flex flex-row space-x-[304.95px]'>
          <div className='flex space-x-[10.89px]'>
            <p className='text-[20px] text-[#0B63C5] font-[600]'>Greviance ID: 423576275442ecc</p>
            <img src="../icons/dashboard-icons/copy.svg" className='w-[26.15px] h-[26.15px]' alt="" />
          </div>
          <div className='w-[348px] h-[93.88px] -mt-[33px]'>
            <p className='text-[20px] font-[500] float-right'>Has this complaint been resolved?</p>
            <div className='bg-[#0B63C5] rounded-[9.375px] w-[150px] float-right mt-[17px]'>
              <p className='text-[14.06px] text-white py-[12.935px] font-[600] mx-auto text-center'>Mark as resolved</p>
            </div>
          </div>
        </div>
        <div className='mt-[14.13px]'>
          <p>Purchase of fake product from <span className='text-[#0B63C5]'>Jumia</span></p>
        </div>
      </div>
    </div>
  )
}

export default mycomplaints