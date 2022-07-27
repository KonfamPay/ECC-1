import type { NextPage } from "next";
import DashboardCard from "../../Components/DashboardComponents/DashboardCard";
import NavWrapper from "../../Components/DashboardNav/NavWrapper";
import ComplaintsCardSection from "../../Sections/ComplaintsCardSection";

const index: NextPage = () => {
  return (
    <div>
      <div>
        <p className="text-[40px] font-[500]">File A Complaint</p>
      </div>
    </div>
  );
};

export default index;
