interface LatestScamStepProps {
	number: number;
	text: string;
}

const LatestScamStep: React.FC<LatestScamStepProps> = ({ number, text }) => {
	return (
		<div className="flex flex-col items-center mt-[98px] gap-y-[18px]">
			<div className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-gradient-to-br from-eccblue to-[#073D79] text-[24px] font-semibold text-white">
				{number}
			</div>
			<p>{text}</p>
		</div>
	);
};
export default LatestScamStep;
