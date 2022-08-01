import { useState } from "react";
import FileAComplaintRadio from "../FileAComplaintRadio";
import SuccessModal from "../SuccessModal";

const Page3: React.FC = () => {
  const [successModalShowing, setSuccessModalShowing] = useState(false);
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSuccessModalShowing(true);
  };
  return (
    <div className="mt-[90px]">
      {successModalShowing && (
        <SuccessModal
          setSuccessModalShowing={setSuccessModalShowing}
          grievanceId="423576275442ecc"
        />
      )}
      <div>
        <p className="text-[24px] font-[400]">
          Kindly let us know what you want the end of this process.
        </p>
      </div>
      <form action="">
        <div className="grid grid-cols-2 gap-x-[20px] gap-y-[58px] mt-[60px]">
          <div className="relative">
            <FileAComplaintRadio
              iconPath={"refund"}
              title={"A Refund"}
              description={"All expenses incurred will be returned to you"}
            />
            <input
              type="radio"
              name=""
              id=""
              className="w-[30px] h-[30px] absolute right-[30px] bottom-[35%]"
            />
          </div>
          <div className="relative">
            <FileAComplaintRadio
              iconPath={"compensation"}
              title={"A Compensation"}
              description={"You will be compensated by the company"}
            />
            <input
              type="radio"
              name=""
              id=""
              className="w-[30px] h-[30px] absolute right-[30px] bottom-[35%]"
            />
          </div>
          <div className="relative">
            <FileAComplaintRadio
              iconPath={"apology"}
              title={"An Apology"}
              description={"You will recieve a formal apology"}
            />
            <input
              type="radio"
              name=""
              id=""
              className="w-[30px] h-[30px] absolute right-[30px] bottom-[35%]"
            />
          </div>
          <div className="relative">
            <FileAComplaintRadio
              iconPath={"replacement"}
              title={"A Replacement"}
              description={"Your item will be replaced with the right one"}
            />
            <input
              type="radio"
              name=""
              id=""
              className="w-[30px] h-[30px] absolute right-[30px] bottom-[35%]"
            />
          </div>
        </div>
        <div className="flex space-x-[26px] mt-[71px]">
          <input
            type="radio"
            name=""
            id=""
            className="w-[24px] h-[24px] mt-[3px]"
          />
          <p className="text-[20px]">
            I agree with the{" "}
            <span className="text-[#0B63C5]"> Terms & Conditions</span>
          </p>
        </div>
        <button
          className="bg-[#0B63C5] mt-[110px] mx-[334px] w-[572.15px] rounded-[12px] text-[20px] font-[600] text-white py-[22px]"
          type="submit"
          onClick={onSubmit}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Page3;
