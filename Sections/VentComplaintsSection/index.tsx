import React from "react";
import VentComplaintsCard from "../../Components/VentComplaintsCard";

const VentComplaintsSection : React.FC = (props) => {
    return (
        <div className="bg-gradient-to-br from-[#0B63C5] to-[#0953A4] h-[800px]">
            <VentComplaintsCard />
        </div>
    )
};

export default VentComplaintsSection;