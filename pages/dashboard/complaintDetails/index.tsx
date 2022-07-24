import type { NextPage } from 'next';
import React from 'react';

const mycomplaints : NextPage = props => {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <div className="mx-[35px] mt-[60px] w-[1079px] h-[827px] rounded-[20px]">
      <div className='bg-[#0B63C5] rounded-t-[20px] h-[78px]'>
        <div className='flex flex-row space-x-[40px]  ml-[27px] py-[17px]'>
          <img src="/icons/dashboard-icons/arrow.svg" className='w-[36px] h-[36px]' alt="" />
          <p className='text-[24px] text-white'>Complaint Details</p>
        </div>  
      </div>
      <div className='ml-[27px] mr-[40px] mt-[52px]'>
        <div className='flex flex-row space-x-[304.95px]'>
          <div className='flex space-x-[10.89px]'>
            <p className='text-[20px] text-[#0B63C5] font-[600]'>Greviance ID: 423576275442ecc</p>
            <img src="../icons/dashboard-icons/copy.svg" className='w-[26.15px] h-[26.15px]' alt="" />
          </div>
          <div className='w-[348px] h-[93.88px] -mt-[33px]'>
            <p className='text-[20px] font-[500] float-right'>Has this complaint been resolved?</p>
            <div className='bg-[#0B63C5] rounded-[9.375px] w-[150px] float-right mt-[17px]'>
              <div onClick={() => setShowModal(true)}>
                <p className='text-[14.06px] text-white py-[12.935px] font-[600] mx-auto text-center'>Mark as resolved</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[14.13px]'>
          <div>
            <p className='text-[22px] font-[500]'>Purchase of fake product from <span className='text-[#0B63C5]'>Jumia</span></p>
            <p className='text-[20px] mt-[15px] font-[500]'>You filed this case against <span className='text-[#0B63C5]'>Jumia</span> on 02/06/2022</p>
          </div>
          <div className='mt-[30px]'>
            <p className='text-[20px] leading-[37px] font-[400]'>As of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of themas of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce</p>
          </div>
        </div>
        <div className='mt-[52px]'>
          <p className='text-[#0B63C5] text-[19.64px]'>Resolution wanted:</p>
          <div className='flex space-x-[28.25px]'>
            <div>   
              <div className='mt-[21.27px]'>
                <div className='border border-[#0B63C5] w-[312.8px] rounded-[6.92px]'>
                  <div className='pt-[16.73px] pb-[15.68px]'>
                    <div className='flex space-x-[17.31px]'>
                      <div className='flex space-x-[5.77px] ml-[14.42px]'>
                        <img src="../icons/dashboard-icons/refund.svg" alt="" />
                        <div className='border-r-[1px] border-r-[#0B63C5] h-[16.62px] mt-[10px]'/>
                      </div>
                      <div>
                        <p className='text-[#0B63C5] text-[11.54px] font-[700]'>A Refund</p>
                        <p className='text-[10.39px] font-[400]'>All expenses incurred will be returned to you</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
            <div>
              <div className='mt-[21.27px]'>
                <div className='border border-[#0B63C5] w-[312.8px] rounded-[6.92px]'>
                  <div className='pt-[16.73px] pb-[15.68px]'>
                    <div className='flex space-x-[17.31px]'>
                      <div className='flex space-x-[5.77px] ml-[14.42px]'>
                        <img src="../icons/dashboard-icons/compensation.svg" alt="" />
                        <div className='border-r-[1px] border-r-[#0B63C5] h-[16.62px] mt-[10px]'/>
                      </div>
                      <div>
                        <p className='text-[#0B63C5] text-[11.54px] font-[700]'>A Compensation</p>
                        <p className='text-[10.39px] font-[400]'>You will be compensated by the company</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#F1F7FE] outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-[20px] font-[400] leading-relaxed">
                    Are you sure you want to mark this complaint as resolved?
                  </p>
                </div>
                <div className="flex space-x-[48px] items-center justify-end p-6">
                  <button
                    className="text-[#0B63C5] background-transparent px-6 py-2 font-[400] text-[16px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-[#0B63C5] text-white active:bg-[#0B63C5] font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}

export default mycomplaints