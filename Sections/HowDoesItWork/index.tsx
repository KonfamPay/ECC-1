import Image from "next/image";
import HowItWorksCard from "../../Components/HowItWorksCard";

const HowDoesItWork: React.FC = (props) => {
	return (
		<div className="mt-[119px]">
			<div className="flex flex-col space-y-[30px] items-center justify-center mx-auto">
				<p className="font-[600] text-[48px] leading-[72px]">
					How Does It <span className="text-[#0B63C5]">Work?</span>
				</p>
				<p className="font-[300] text-[24px] leading-[36px]">
					You will only need to file a complaint and we will handle
					the remaining processes{" "}
				</p>
				<div>
					<HowItWorksCard
						title={"File a Complaint"}
						description={
							"Get resolution with minimum efforts and reclaim your family time."
						}
						icon={"file"}
					/>
				</div>
			</div>
		</div>
	);
};
export default HowDoesItWork;
