import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import InputGroup from "../../Components/Login/InputGroup";

const SignupPage: NextPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="w-screen h-screen poppinsFont lg:grid grid-cols-[47%_53%] overflow-hidden hidden ">
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
              <Link href="/login">
                <span className="text-[#0B63C5] cursor-pointer">Login</span>
              </Link>
            </p>
            <form>
              <div className="flex flex-col gap-y-[35px]">
                <InputGroup
                  label="First Name"
                  placeholder="Enter Legal First Name"
                  value={firstName}
                  setValue={setFirstName}
                  type="text"
                />
                <InputGroup
                  label="Last Name"
                  placeholder="Enter Legal Last Name"
                  value={lastName}
                  setValue={setLastName}
                  type="text"
                />
                <InputGroup
                  label="Email"
                  placeholder="Enter Valid Email Address"
                  value={email}
                  setValue={setEmail}
                  type="email"
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
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* MOBILE VERSION */}
      <div className="lg:hidden bg-[#0B63C5] w-full min-h-screen poppinsFont pb-[70px] relative">
        <img
          className="w-[50px] ml-[15px] pt-[30px]"
          src="./Images/whiteEccLogo.svg"
        />
        <div className="pl-[17px] w-full">
          <div className="w-full text-white max-w-[467px] mx-auto">
            <p className="text-[24px] font-bold mt-[27px] max-w-[500px] mx-auto">
              Join the Fight!
            </p>
            <p className="text-[14px] pr-[35px] xl:text-[17px] font-medium max-w-[460px] mt-[8px]">
              Join others to help us eliminate online fraud by reporting a scam
            </p>
          </div>
        </div>
        <div className="px-[9px] mt-[30px] max-w-[500px] mx-auto">
          <div className="w-full px-[14px] flex flex-col overflow-y-auto py-[22px] bg-white rounded-[20px]">
            <div>
              <p className="text-[18px] text-center font-semibold">
                Create your account
              </p>
              <p className="text-center mt-[2px] mb-[30px]">
                Already have an account?{" "}
                <Link href="/login">
                  <span className="text-[#0B63C5] cursor-pointer">Login</span>
                </Link>
              </p>
              <form>
                <div className="flex flex-col gap-y-[15px]">
                  <InputGroup
                    label="First Name"
                    placeholder="Enter Legal First Name"
                    value={firstName}
                    setValue={setFirstName}
                    type="text"
                  />
                  <InputGroup
                    label="Last Name"
                    placeholder="Enter Legal Last Name"
                    value={lastName}
                    setValue={setLastName}
                    type="text"
                  />
                  <InputGroup
                    label="Email"
                    placeholder="Enter Valid Email Address"
                    value={email}
                    setValue={setEmail}
                    type="email"
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
                  className="w-full text-[14px] md:text-[20px] text-white py-[14px] md:py-[18px] xl:py-[22px] rounded-[12px] bg-[#0B63C5] mt-[30px]"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
        <img className="absolute bottom-0" src="/Images/polygons.svg" />
      </div>
    </>
  );
};

export default SignupPage;
