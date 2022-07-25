import type { NextPage } from "next";
import Link from "next/link";
import { useRef, useState } from "react";
import InputGroup from "../../Components/Verification/InputGroup";
import NavBar from "../../Components/NavBar";
import Testimonials from '../../Components/Testimonials'
import Footer from '../../Components/FooterComplaints'

const LoginPage: NextPage = () => {
  const [fullName, setfullName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const addDocument = (e) => {
    setSelectedFile(e.target.files[0].name)
  };
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
            <div className="bg-[#F1F7FE]">
              <div className="w-full h-[571px] rounded-[12px] border-[#0B63C5] mt-[25px] border-2 border-dashed">
                <div className={`w-full mx-auto ${selectedFile ? "pt-[120px]" : "pt-[170px]"}`}>
                  <img src="icons/paste.svg" alt=""  className="mx-auto cursor-pointer"  onClick={() => filePickerRef.current.click()}/>
                  <input
                    type="file"
                    ref={filePickerRef}
                    hidden
                    onChange={addDocument}
                    id='inputfile'
                  />
                  <div className="text-center">
                    <p className="text-[20px] font-[400]">Drag and Drop your document here or <span className="text-[#0B63C5] cursor-pointer" onClick={() => filePickerRef.current.click()}>browse files</span></p>
                    <p className="text-[18px] mt-[22px]">Supported format: JPEG, PNG, PDF</p>
                  </div>
                  {
                    selectedFile && (
                      <div className="bg-[#0B63C5] h-[101px] w-[708px] mx-auto mt-[43px] rounded-[12px]">
                        <div className="ml-[33px] mr-[50px]">
                          <div className="pt-[27px] relative">
                            <div className="flex flex-row space-x-[37px]">
                              <img src="icons/file-check.svg" alt="" />
                              <p className="text-[20px] font-[600] text-white">{selectedFile}</p>
                            </div>
                            <img src="icons/close-1.svg" className=" absolute right-0 top-[27px] w-[18px] h-[18px] mt-[5px] cursor-pointer" onClick={() => setSelectedFile(null)} alt="" />
                          </div>
                          {/* <hr className="mt-[12.12px] border-[3.5px] rounded-full"/> */}
                          <div className="w-full mt-[12.12px] bg-[#C5C5C5] h-[5px] rounded-full">
                            <div className="bg-white h-[5px] rounded-full" style={{width: '70%'}}></div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div className="mx-[120px] mt-[63px]">
          <ul className="text-[20px] text-[#0B63C5] font-[600] space-y-[11px] -ml-[10px]">
            <li className="flex flex-row space-x-[37px]"> <img src="icons/check.svg" alt="" /> <p>Voter's Card</p></li>
            <li className="flex flex-row space-x-[37px]"> <img src="icons/check.svg" alt="" /> <p>International Passport</p></li>
            <li className="flex flex-row space-x-[37px]"> <img src="icons/check.svg" alt="" /> <p>National ID card</p></li>
            <li className="flex flex-row space-x-[37px]"> <img src="icons/check.svg" alt="" /> <p>National Identification Slip (NIN)</p></li>
            <li className="flex flex-row space-x-[37px]"> <img src="icons/check.svg" alt="" /> <p>Driver’s Licence</p></li>
          </ul>
        </div>
        <div className="mt-[63px] mx-auto rounded-[12px] bg-[#0B63C5] w-[587px]">
          <p className="py-[22px] px-[246.5px] text-center text-white text-[20px] font-[600] cursor-pointer">Continue</p>
        </div>
        <div className="mt-[118px]">
          <Testimonials/>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default LoginPage;
