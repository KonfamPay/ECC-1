interface WayIdentifiedProps {
	number: number;
	text: string;
}

const WayIdentified: React.FC<WayIdentifiedProps> = ({ number, text }) => {
	return (
		<div className="flex flex-col gap-y-[27px]">
			<div className="flex gap-x-[18px] items-center">
				<div className="w-[45px] h-[45px] rounded-full bg-gradient-to-br from-eccblue to-[#073D79] text-[24px] font-semibold text-white flex items-center justify-center">
					{number}
				</div>
				<p className="text-[24px] text-eccblue font-medium">
					ECC COMPLAINT
				</p>
			</div>
			<p className="text-[20px]">{text}</p>
		</div>
	);
};
export default WayIdentified;
