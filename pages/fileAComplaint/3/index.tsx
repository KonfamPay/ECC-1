import type { NextPage } from "next";
import { useState } from "react";
import FileAComplaintProcess from '../../../Components/FileAComplaintComponents/FileAComplaintProcess'
import NavBar from "../../../Components/NavBar";
import Footer from "../../../Components/FooterComplaints";
import FileAComplaintRadio from "../../../Components/FileAComplaintComponents/FileAComplaintRadio";


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
        <div className="mt-[90px]">
          <div>
            <p className="text-[24px] font-[400]">Kindly let us know what you want the end of this process .</p>
          </div>
          <form action="">
            <div className="grid grid-cols-2 mt-[60px]">
              <FileAComplaintRadio 
                iconPath={"refund"} 
                title={"A Refund"} 
                description={"All expenses incurred will be returned to you"} 
              />
              <FileAComplaintRadio 
                iconPath={"apology"} 
                title={"An Apology"} 
                description={"You will recieve a formal apology"} 
              />
              <FileAComplaintRadio 
                iconPath={"compensation"} 
                title={"A Compensation"} 
                description={"You will be compensated by the company"} 
              />
              <FileAComplaintRadio 
                iconPath={"replacement"} 
                title={"A Replacement"} 
                description={"Your item will be replaced with the right one"} 
              />
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default index;
