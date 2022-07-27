import type { NextPage } from "next";
import FileAComplaintProcess from '../../Components/FileAComplaintProcess'
import FileAComplaintInput from '../../Components/FileAComplaintInput'
import { useState } from "react";

const index: NextPage = () => {
  const [titleOfComplaint, setTitleOfComplaint] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [placeOfTransaction, setPlaceOfTransaction] = useState("");
  const [amountLost, setAmountLost] = useState("");
  return (
    <div className="mx-[100px]">
      <div className="mx-auto text-center mt-[72px]">
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
        </form>
      </div>
    </div>
  );
};

export default index;
