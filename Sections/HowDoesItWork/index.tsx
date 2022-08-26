import Image from "next/image";
import HowItWorksCard from "../../Components/HowItWorksCard";

const HowDoesItWork: React.FC = (props) => {
	return (
		<div className="mt-[119px] mb-[62px]">
			<div className="flex flex-col space-y-[30px] items-center justify-center mx-auto">
				<p className="font-[600] text-[48px] leading-[72px]">
					How Does It <span className="text-[#0B63C5]">Work?</span>
				</p>
				<p className="font-[300] text-[24px] leading-[36px]">
					You will only need to file a complaint and we will handle
					the remaining processes{" "}
				</p>
				<div className="pt-[85px] flex flex-col space-y-[100px]">
					<div className="flex space-x-[19px] howItWorksContent1">
						<HowItWorksCard
							title={"File a Complaint"}
							description={
								"Get resolution with minimum efforts and reclaim your family time."
							}
							icon={"file"}
							bgIcon={"fff"}
						/>
						<HowItWorksCard
							title={"Notify the Company"}
							description={
								"Get resolution with minimum efforts and reclaim your family time."
							}
							icon={"notify"}
							bgIcon={"#fff"}
						/>
						<HowItWorksCard
							title={"Start social media campaign"}
							description={
								"Get resolution with minimum efforts and reclaim your family time."
							}
							icon={"speak"}
							bgIcon={"#fff"}
						/>
					</div>
					<div className="flex space-x-[19px] howItWorksContent2">
						<HowItWorksCard
							title={"Send legal notice"}
							description={
								"Get resolution with minimum efforts and reclaim your family time."
							}
							icon={"legal"}
							bgIcon={"fff"}
						/>
						<HowItWorksCard
							title={"Notify the Company"}
							description={
								"Get resolution with minimum efforts and reclaim your family time."
							}
							icon={"notify"}
							bgIcon={"#fff"}
						/>
						<HowItWorksCard
							title={"Start social media campaign"}
							description={
								"Get resolution with minimum efforts and reclaim your family time."
							}
							icon={"speak"}
							bgIcon={"#fff"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HowDoesItWork;
