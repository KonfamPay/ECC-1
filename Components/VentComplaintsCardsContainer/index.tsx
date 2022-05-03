import VentComplaintsCard from "../VentComplaintsCard";
import { useState } from 'react';

const VentComplaintsCardsContainer : React.FC = props => {
    const [VentComplaintsCardInfo, setVentComplainsCardInfo] = useState([
        {
            title: "E-Commerce Complaints", 
            description: "Delay in delivery, no delivery from vendors, blocked after payment"
        },
        {
            title: "Investment Scams", 
            description: "Ponzi-Scheme related issues, "
        },
        {
            title: "E-Commerce Complaints", 
            description: "Delay in delivery, no delivery from vendors, blocked after payment"
        },
        {
            title: "E-Commerce Complaints", 
            description: "Delay in delivery, no delivery from vendors, blocked after payment"
        },
        {
            title: "E-Commerce Complaints", 
            description: "Delay in delivery, no delivery from vendors, blocked after payment"
        },
    ])
    return (
        <div className="flex flex-col gap-[28px] max-w-[472px] pt-[120px] pb-[90px]">
            {VentComplaintsCardInfo.map(VentComplaintCard => <VentComplaintsCard title={VentComplaintCard.title} description={VentComplaintCard.description} opacity={(100 - (VentComplaintsCardInfo.indexOf(VentComplaintCard) * 19))/100}/>)}
        </div>
    )
}
export default VentComplaintsCardsContainer;