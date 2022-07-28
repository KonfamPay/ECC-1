import type { NextPage } from "next";
import { useState } from "react";
import FileAComplaintProcess from '../../../Components/FileAComplaintProcess'
import NavBar from "../../../Components/NavBar";
import Footer from "../../../Components/FooterComplaints";


const index: NextPage = () => {
  const [resolution, setResolution] = useState("");
  return (
    <>
      <NavBar/>
      <div className="mx-[100px] mt-[72px] mb-[147px]">
        <div className="mx-auto text-center">
          <p className="text-[40px] font-[500]">File a Complaint</p>
          <p className="text-[#0B63C5] text-[20px] mt-[20px]">Allow ecommerce complaint help you in your fight aginst online fraud </p>
        </div>
        <div className="mt-[90px] mx-[112.25px]">
          <div className="flex flex-row space-x-[100px]">
            <FileAComplaintProcess number={1} text={'Complaint Info'} active={true}/>
            <FileAComplaintProcess number={2} text={'Upload Document'} active={true}/>
            <FileAComplaintProcess number={3} text={'Complaint Info'} active={true}/>
          </div>
        </div>
        <div className="mt-[90px]">
          <div>
            <p className="text-[24px] font-[400]">Kindly let us know what you want the end of this process .</p>
          </div>
          <form action="">
            <div className="grid grid-cols-2">
              <div className='mt-[21.27px]'>
                <div className='border border-[#0B63C5] w-[610px] rounded-[12px]'>
                  <div className='pt-[16.73px] pb-[15.68px] flex space-x-[44px] space-y-[12px]'>
                    <div className='flex space-x-[17.31px]'>
                      <div className='flex space-x-[10px] ml-[14.42px] mt-[5px]'>
                        <img src="../icons/dashboard-icons/refund.svg" className="w-[40px] h-[40px]" alt="" />
                        <div className='border-r-[2px] border-r-[#0B63C5] h-[23px] mt-[10px]'/>
                      </div>
                      <div>
                        <p className='text-[#0B63C5] text-[20px] font-[700]'>A Refund</p>
                        <p className='text-[18px] font-[400]'>All expenses incurred will be returned to you</p>
                      </div>
                    </div>
                    <input type="radio" name="" id="" className="w-[30px] h-[30px]"/>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default index;
