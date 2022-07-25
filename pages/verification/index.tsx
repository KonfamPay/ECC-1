import type { NextPage } from "next";
import Link from "next/link";
import { useRef, useState } from "react";
import InputGroup from "../../Components/Verification/InputGroup";
import NavBar from "../../Components/NavBar";

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
              <div className="w-full h-[571px] rounded-[12px] border-[#0B63C5] mt-[25px] border-2 border-dashed cursor-pointer" onClick={() => filePickerRef.current.click()}>
                <div className={`w-full mx-auto ${selectedFile ? "pt-[51px]" : "pt-[150px]"}`}>
                  <img src="icons/paste.svg" alt=""  className="mx-auto"/>
                  <input
                    type="file"
                    ref={filePickerRef}
                    hidden
                    onChange={addDocument}
                    id='inputfile'
                  />
                  <div className="text-center">
                    <p className="text-[20px] font-[400]">Drag and Drop your document here or <span className="text-[#0B63C5]">browse files</span></p>
                    <p className="text-[18px] mt-[22px]">Supported format: JPEG, PNG, PDF</p>
                  </div>
                  {
                    !selectedFile && (
                      <div className="bg-[#0B63C5] h-[101px] w-[708px] mx-auto mt-[43px] rounded-[12px]">
                        <div className="flex pt-[27px] pl-[32px]">
                          <img src="icons/file-check.svg" alt="" />
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default LoginPage;
