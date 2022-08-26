import React from "react";
import IconContainer from "../IconContainer";

interface GoalCardProps {
	title: string;
	description: string;
	icon: string;
}

const HowItWorksCard: React.FC<GoalCardProps> = ({
	title,
	description,
	icon,
}) => {
	return (
		<div>
			<p className="text-[24px] font-[600] text-white">{title}</p>
		</div>
	);
};

export default HowItWorksCard;
