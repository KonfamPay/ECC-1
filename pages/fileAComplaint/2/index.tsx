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
      </div>
      <Footer/>
    </>
  );
};

export default index;
