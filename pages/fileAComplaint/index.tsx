import type { NextPage } from "next";
import FileAComplaintProcess from '../../Components/FileAComplaintProcess'
import FileAComplaintInput from '../../Components/FileAComplaintInput'
import { useState } from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/FooterComplaints";

const index: NextPage = () => {
  const [titleOfComplaint, setTitleOfComplaint] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [placeOfTransaction, setPlaceOfTransaction] = useState("");
  const [amountLost, setAmountLost] = useState("");
  const [complaintDetails, setComplaintDetails] = useState("");
  const [brandContact, setBrandContact] = useState("");
  const [brandHandle, setBrandHandle] = useState("");
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
            <FileAComplaintProcess number={2} text={'Upload Document'} active={false}/>
            <FileAComplaintProcess number={3} text={'Complaint Info'} active={false}/>
          </div>
        </div>
        <div className="mt-[90px]">
          <p className="text-[24px]">All form field with <span className="text-[#EF2E2E]">*</span> are important to proceed with your complaint</p>
          <form action="" className="mt-[88.71px]">
            <div className="grid grid-cols-2 gap-x-[66px] gap-y-[30px]">
              <FileAComplaintInput 
                label={'Title of your complaint'}
                placeholder={'e.g Package not delivered'}
                value={titleOfComplaint}
                setValue={titleOfComplaint}
                type="text"
                nairaSymbol={false}
              />
              <FileAComplaintInput 
                label={'Where did this transaction happen?'}
                placeholder={'e.g Facebook, Instagram, Twiiter, offline . If other please specify'}
                value={placeOfTransaction}
                setValue={placeOfTransaction}
                type="text"
                nairaSymbol={false}
              />
              <FileAComplaintInput 
                label={"Company’s/Brand’s name"}
                placeholder={'Enter Email Address'}
                value={companyName}
                setValue={companyName}
                type="text"
                nairaSymbol={false}
              />
              <div>
                <FileAComplaintInput 
                  label={'Total amount lost from this incident'}
                  placeholder={'Enter Amount'}
                  value={amountLost}
                  setValue={amountLost}
                  type="text"
                  nairaSymbol={true}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 grid-flow-row gap-x-[66px] gap-y-[30px] mt-[30px]">
              <div className="">
                <FileAComplaintInput 
                    label={'Company’s/Brand’s Contact (Email/Phone) *'}
                    placeholder={'Enter Contact'}
                    value={brandContact}
                    setValue={brandContact}
                    type="text"
                  />
              </div>
              <div className="row-span-2 col-span-1">
                <div className="flex flex-row space-x-[13px] pb-[10px]">
                  <p className="text-[20px]">Complaint details <span className="text-[#EF2E2E]">*</span></p>
                  <img src="./icons/fac-help.svg" alt="" className="cursor-pointer"/>
                </div>
                <textarea 
                  name={complaintDetails}
                  id="" 
                  className="transition-[150ms] pt-[25px] pb-[135px] xl:pt-[25px] xl:pb-[146px] focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] w-full focus:border-[#0B63C5] placeholder:text-[#C5C5C5] px-[20px] resize-none" 
                  placeholder="Explain in details your grievances, include Date, Location, Name of Item and any other vital information you think might help us resolve this complaint"
                />
              </div>
              <div className="">
                <FileAComplaintInput 
                    label={'Company’s/Brand’s Social media handle'}
                    placeholder={'e.g @itzadetunji on instagram'}
                    value={brandHandle}
                    setValue={brandHandle}
                    type="text"
                  />
              </div>
            </div>
            <div className="bg-[#0B63C5] mt-[110px] mx-auto w-[572.15px] rounded-[12px]">
              <p className="text-[20px] font-[600] text-center text-white py-[22px]">Continue</p>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default index;
