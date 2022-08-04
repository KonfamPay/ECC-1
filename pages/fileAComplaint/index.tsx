import type { NextPage } from "next";
import FileAComplaintProcess from "../../Components/FileAComplaintComponents/FileAComplaintProcess";
import FileAComplaintInput from "../../Components/FileAComplaintComponents/FileAComplaintInput";
import { useState } from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/FooterComplaints";
import Page1 from "../../Components/FileAComplaintComponents/Page1";
import Page2 from "../../Components/FileAComplaintComponents/Page2";
import Page3 from "../../Components/FileAComplaintComponents/Page3";
import ComplaintLetterSection from "../../Components/FileAComplaintComponents/ComplaintLetterSection";

const index: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [titleOfComplaint, setTitleOfComplaint] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [placeOfTransaction, setPlaceOfTransaction] = useState("");
  const [amountLost, setAmountLost] = useState("");
  const [complaintDetails, setComplaintDetails] = useState("");
  const [brandContact, setBrandContact] = useState("");
  const [brandHandle, setBrandHandle] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [wantsRefund, setWantsRefund] = useState(false);
  const [wantsCompensation, setWantsCompensation] = useState(false);
  const [wantsApology, setWantsApology] = useState(false);
  const [wantsReplacement, setWantsReplacement] = useState(false);
  const [termsAndConditions, setTermsAndConditions] = useState(true);
  return (
    <>
      <NavBar />
      <ComplaintLetterSection />
      <div className="px-[100px] mt-[72px] mb-[147px] max-w-[1536px] mx-auto">
        <div className="mx-auto text-center">
          <p className="text-[40px] font-[500]">File a Complaint</p>
          <p className="text-[#0B63C5] text-[20px] mt-[20px]">
            Allow ecommerce complaint help you in your fight aginst online fraud{" "}
          </p>
        </div>
        <div className="mt-[90px] mx-auto">
          <div className="flex flex-row space-x-[100px] justify-center">
            <FileAComplaintProcess
              number={1}
              text={"Complaint Info"}
              active={currentPage >= 1}
            />
            <FileAComplaintProcess
              number={2}
              text={"Upload Document"}
              active={currentPage >= 2}
            />
            <FileAComplaintProcess
              number={3}
              text={"Complaint Info"}
              active={currentPage >= 3}
            />
          </div>
        </div>
        <div>
          {currentPage == 1 && (
            <Page1
              setCurrentPage={setCurrentPage}
              titleOfComplaint={titleOfComplaint}
              setTitleOfComplaint={setTitleOfComplaint}
              companyName={companyName}
              setCompanyName={setCompanyName}
              placeOfTransaction={placeOfTransaction}
              setPlaceOfTransaction={setPlaceOfTransaction}
              amountLost={amountLost}
              setAmountLost={setAmountLost}
              complaintDetails={complaintDetails}
              setComplaintDetails={setComplaintDetails}
              brandContact={brandContact}
              setBrandContact={setBrandContact}
              brandHandle={brandHandle}
              setBrandHandle={setBrandHandle}
            />
          )}
          {currentPage == 2 && (
            <Page2
              setCurrentPage={setCurrentPage}
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            />
          )}
          {currentPage == 3 && (
            <Page3
              wantsRefund={wantsRefund}
              setWantsRefund={setWantsRefund}
              wantsCompensation={wantsCompensation}
              setWantsCompensation={setWantsCompensation}
              wantsApology={wantsApology}
              setWantsApology={setWantsApology}
              wantsReplacement={wantsReplacement}
              setWantsReplacement={setWantsReplacement}
              termsAndConditions={termsAndConditions}
              setTermsAndConditions={setTermsAndConditions}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
