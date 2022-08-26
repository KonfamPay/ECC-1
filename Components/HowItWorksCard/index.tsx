import React from "react";
import IconContainer from "../IconContainer";

interface GoalCardProps {
	title: string;
	description: string;
	icon: string;
	bgIcon: string;
}

const HowItWorksCard: React.FC<GoalCardProps> = ({
	title,
	description,
	icon,
	bgIcon,
}) => {
	return (
		<>
			<div className="bg-[#0B63C5] w-[395px] h-[416px] flex flex-col items-center justify-center text-white text-center px-[27px] rounded-[12px] relative">
				<div className="w-[114px] h-[114px] rounded-full bg-[] flex items-center justify-center absolute top-[-50px] z-10">
					<img
						src={`../icons/how-it-works-icons/${icon}.svg`}
						className=""
						alt=""
					/>
				</div>
				<div className="w-[120px] h-[120px] absolute top-[-53px] bg-white rounded-full z-[1]" />
        <div className="flex items-center justify-center w-[68px] h-[68px] pointerShadow bg-white rounded-full absolute right-[-33px]">
          <img src="../icons/how-it-works-icons/pointer.svg" alt="" />
        </div>
				<div className="">
					<p className="text-[24px] font-[600]">{title}</p>
					<p className="text-[20px] mt-[40px] leading-[30px]">
						{description}
					</p>
				</div>
			</div>
			{/* <div className="howDoesItWorkCard bg-cover w-full h-full relative">
				<div className="top-1/2 left-1/2">
					<p className="text-[24px] font-[600]">{title}</p>
					<p className="text-[20px] mt-[40px] leading-[30px]">
						{description}
					</p>
				</div>
			</div> */}
		</>
	);
};

export default HowItWorksCard;
