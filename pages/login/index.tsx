import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import InputGroup from "../../Components/Login/InputGroup";

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="w-screen h-screen poppinsFont hidden lg:grid grid-cols-[47%_53%]">
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
          <div className="ml-[50px] mt-[120px] text-white">
            <p className="text-[40px] xl:text-[40px] font-bold">
              Welcome Back!
            </p>
            <p className="text-[17px] pr-[35px] xl:text-[17px] font-semibold max-w-[460px] mt-[15px]">
              Login to you your account to file a complaint or proceed with
              others submitted
            </p>
          </div>
        </div>
        <div className="w-full px-[90px] flex flex-col justify-center">
          <div>
            <p className="text-[36px] xl:text-[40px] text-center">
              Login to your account
            </p>
            <p className="text-center mt-[20px] mb-[38px]">
              Don't have an account?{" "}
              <Link href="/signup">
                <span className="text-[#0B63C5] cursor-pointer">
                  Create an account
                </span>
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
              </div>
              <p className="text-center my-[38px]">Forgot Password?</p>
              <button
                onClick={(e) => e.preventDefault()}
                className="w-full text-[20px] text-white py-[18px] xl:py-[22px] rounded-[12px] bg-[#0B63C5]"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="lg:hidden bg-[#0B63C5] w-full min-h-screen poppinsFont pb-[70px] relative flex flex-col justify-center">
        <img
          className="absolute w-[50px] left-[15px] top-[30px]"
          src="./Images/whiteEccLogo.svg"
        />
        <div className="pl-[17px] w-full">
          <div className="w-full text-white max-w-[467px] mx-auto">
            <p className="text-[24px] font-bold mt-[60px] max-w-[500px] mx-auto">
              Join the Fight!
            </p>
            <p className="text-[14px] pr-[35px] xl:text-[17px] font-medium max-w-[460px] mt-[8px]">
              Join others to help us eliminate online fraud by reporting a scam
            </p>
          </div>
        </div>
        <div className="px-[9px] mt-[30px] max-w-[500px] mx-auto w-full">
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
                <div className="text-[#0B63C5] text-right font-medium text-[12px] mt-[11px]">
                  Forgot Password?
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

export default LoginPage;
