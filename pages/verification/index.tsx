import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import InputGroup from "../../Components/Verification/InputGroup";
import NavBar from "../../Components/NavBar";

const LoginPage: NextPage = () => {
  const [fullName, setfullName] = useState("");
  return (
    <>
      <NavBar/>
      <div className="mt-[198px]">
        <div className="">
          <p className="text-center text-[40px] font-[500]">You will have to verify yourself before you continue </p>
          <p className="text-center text-[20px] font-[300] mt-[30px]">Already have an account? <a className="text-[#0B63C5] cursor-pointer">Login</a></p>
        </div>
        <div className="mt-[99px] mx-[109px]">
          <div className="grid grid-cols-2 gap-x-[65px] gap-y-[52px]">
            <InputGroup
              label="First Name"
              placeholder="Enter First Legal Name"
              value={fullName}
              setValue={fullName}
              type="text"
            />
            <InputGroup
              label="Date Of Birth"
              placeholder="DD/MM/YYYY"
              value={fullName}
              setValue={fullName}
              type="date"
            />
            <InputGroup
              label="Adress Line"
              placeholder="Enter Valid Email Address"
              value={fullName}
              setValue={fullName}
              type="text"
            />
            <InputGroup
              label="Phone Number"
              placeholder="Enter Phone Number"
              value={fullName}
              setValue={fullName}
              type="tel"
            />
            <InputGroup
              label="State"
              placeholder="Enter Your Residential State"
              value={fullName}
              setValue={fullName}
              type="text"
            />
            <InputGroup
              label="L.G.A"
              placeholder="Enter Your Local Government Area"
              value={fullName}
              setValue={fullName}
              type="text"
            />
          </div> 
          <div className="mt-[66px]">
            <div>
              <p className="text-[20px]">Upload ID <span className="text-[#EF2E2E]">*</span></p>
            </div>
            <div className="w-full h-[571px] rounded-[12px] border-[#0B63C5] mt-[25px] border-2 border-dashed">
              <div className="mx-auto ">
                <img src="icons/paste.svg" alt="" />
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default LoginPage;
