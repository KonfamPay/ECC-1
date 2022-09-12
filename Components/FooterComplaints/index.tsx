import React from "react";
import Image from "next/image";

export const FooterComplaints: React.FC = () => {
	return (
		<div className="h-[710px] w-auto bg-[#ECF4FE]">
			<div className="">
				<div className="pl-[140px] pt-10">
					<img
						src="/Images/logo.svg"
						alt=""
						className="h-32 w-32"
					/>
				</div>
				<div className="pl-[568px] -mt-[75px]">
					<div className="">
						<p className="eccBlue uppercase tracking-widest">Navigate Through</p>
						<p className="font-extralight text-[14px] pt-9 tracking-wider">Home</p>
						<p className="font-extralight text-[14px] pt-4 tracking-wider">Complaints</p>
						<p className="font-extralight text-[14px] pt-4 tracking-wider">Scam Statistics</p>
						<p className="font-extralight text-[14px] pt-4 pb-[150px] tracking-wider">For Law Practicioners</p>
						<button className="bg-eccblue mt-4 py-[13px] px-[27px] rounded-[10px] font-normal text-white">
							<span style={{ color: "white" }}>Post a complaint</span>
						</button>
					</div>
				</div>
				<div className="pl-[800px] -mt-[408px]">
					<div className="">
						<p className="eccBlue uppercase tracking-widest">Support</p>
						<p className="font-extralight text-[14px] pt-9 tracking-wider">Contact Us</p>
						<p className="font-extralight text-[14px] pt-4 pb-[224px] tracking-wider">FAQs</p>
						<button className="bg-[#ECF4FE] mt-4 py-[13px] px-[27px] rounded-[10px] font-normal text-white">
							<span style={{ color: "black" }}>Talk to our lawyers</span>
						</button>
					</div>
				</div>
				<div className="pl-[1050px] -mt-[408px]">
					<div className="">
						<p className="eccBlue uppercase tracking-widest">Company</p>
						<p className="font-extralight text-[14px] pt-9 tracking-wider">Terms of Service</p>
						<p className="font-extralight text-[14px] pt-4 tracking-wider pb-[224px]">Privacy Policy</p>
						<button className="bg-[#67B467] mt-4 py-[13px] px-[27px] rounded-[10px] font-normal text-white">
							<span style={{ color: "white" }}>Avoid Loosing Money To Scammers</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
