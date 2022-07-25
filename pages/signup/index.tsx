import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import InputGroup from "../../Components/Login/InputGroup";

const SignupPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-screen h-screen poppinsFont grid grid-cols-[47%_53%] overflow-hidden">
      <div className="relative h-screen w-full bg-gradient-to-br from-[#0B63C5] to-[#073D79]">
        <img
          className="absolute bottom-0 z-10 w-[208.8px] xl:w-[261px]"
          src="/Images/triangle.svg"
        />
        <img
          className="absolute bottom-0 ml-[100px] w-[300px] xl:w-[374px]"
          src="/Images/triangle2.svg"
        />
        <img
          className="w-[98px] ml-[50px] pt-[55px]"
          src="./Images/whiteEccLogo.svg"
        />
        <img
          className="absolute w-full pt-[55px] bottom-[100px] xl:bottom-[60px] ml-[58px] max-w-[390px] xl:max-w-[500px] "
          src="./Images/avatars.png"
        />
        <div className="ml-[50px] mt-[120px] text-white">
          <p className="text-[40px] xl:text-[40px] font-bold">
            Join the Fight!
          </p>
          <p className="text-[17px] pr-[35px] xl:text-[17px] font-semibold max-w-[460px] mt-[15px]">
            Join others to help us eliminate online fraud by reporting a scam
          </p>
        </div>
      </div>
      <div className="w-full px-[90px] flex flex-col overflow-y-auto py-[73px]">
        <div>
          <p className="text-[36px] xl:text-[40px] text-center">
            Create your account
          </p>
          <p className="text-center mt-[20px] mb-[38px]">
            Already have an account?{" "}
            <Link href="/signup">
              <span className="text-[#0B63C5] cursor-pointer">Login</span>
            </Link>
          </p>
          <form>
            <div className="flex flex-col gap-y-[35px]">
              <InputGroup
                label="Email Address"
                placeholder="Enter Email"
                value={email}
                setValue={setEmail}
                type="text"
              />
              <InputGroup
                label="Password"
                placeholder="Enter Password"
                value={password}
                setValue={setPassword}
                type="password"
              />
              <InputGroup
                label="Password"
                placeholder="Enter Password"
                value={password}
                setValue={setPassword}
                type="password"
              />
              <InputGroup
                label="Password"
                placeholder="Enter Password"
                value={password}
                setValue={setPassword}
                type="password"
              />
            </div>
            <button
              onClick={(e) => e.preventDefault()}
              className="w-full text-[20px] text-white py-[18px] xl:py-[22px] rounded-[12px] bg-[#0B63C5] mt-[53px]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
