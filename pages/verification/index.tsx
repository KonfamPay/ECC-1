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
          <div className="grid grid-cols-2">
            <div>
              <InputGroup
                label="Email Address"
                placeholder="Enter Email"
                value={fullName}
                setValue={fullName}
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
