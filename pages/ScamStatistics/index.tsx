import React from 'react'
import type { NextPage } from 'next';
import FooterComplaints from '../../Components/FooterComplaints';
import NavBar from '../../Components/NavBar';

const index : NextPage = props => {
  return (
    <>
      <NavBar hasWhiteText={true}/>
      <div className="pt-48 mx-auto items-center justify-center text-center bg-[#031830]">
        <p className="mx-auto text-[30px] sm:text-4xl font-bold text-white">Be informed, stay woke,<br/> stay smart!</p>
        <img src="./Images/look.png" alt="" className="mx-auto z-10"/>
      </div>
      <div className="w-auto h-auto rounded-[12px] mx-[141px] bg-[#fff] -mt-16">
        <form>
          <div className='flex flex-row'>
            <div>
              <p className='font-medium pl-[28px] pt-[27px]'>Scam Category</p>
              <input type="text" className='mt-[12px] ml-[28px] mb-[27px] bg-[#F0F0F0] rounded-[12px] px-[190px] py-5 text-left text-[#666666] outline-dashed' placeholder='All scam types'/>
            </div>
            <div>
              <p className='font-medium pl-[28px] pt-[27px]'>Scam Year / Season</p>
              <input type="text" className='mt-[12px] ml-[28px] mb-[27px] bg-[#F0F0F0] rounded-[12px] px-[86px] py-5 text-left text-[#666666]' placeholder='2022(Present Year)'/>
            </div>
            <div className='pt-[51px]'>
              <input type="button" className='mt-[12px] ml-[28px] mb-[27px] bg-[#031830] rounded-[12px] px-[44px] py-5 text-left text-white cursor-pointer' value={'View Stats'}/>
            </div>
          </div>
        </form>
      </div>
      <div className='bg-[#F1F7FE] -mt-[90px]'>
        <div className='pt-[90px] pl-[140px]'>
          <div>
            <p className='text-[24px]'>Showing <span className='text-[#0B63C5]'>All Scam types</span>  stats for <span className='text-[#0B63C5]'>2022</span></p>
          </div>
          <div className='flex flex-row w-auto h-auto bg-white mr-[141px] rounded-[12px] mt-[20px] pb-[39px]'>
            <div>
              <p className='text-[25px] font-semibold pt-[40px] pl-[25px]'>$350,000,000</p>
              <p className='pl-[25px] font-light pt-[12px]'>Amount Lost</p>
            </div>
            <div>
              <p className='text-[25px] font-semibold pt-[40px] pl-[25px]'>$350,000,000</p>
              <p className='pl-[25px] font-light pt-[12px]'>Amount Lost</p>
            </div>
            <div>
              <p className='text-[25px] font-semibold pt-[40px] pl-[25px]'>$350,000,000</p>
              <p className='pl-[25px] font-light pt-[12px]'>Amount Lost</p>
            </div>
          </div>
        </div>
      </div>
      <FooterComplaints/>
    </>
  )
}


export default index