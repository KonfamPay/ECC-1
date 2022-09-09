interface InputGroupProps {
	label: string;
	placeholder: string | null;
	value: string;
	setValue: any;
	type: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
	label,
	placeholder,
	value,
	setValue,
	type,
}) => {
	return (
		<div>
			<p className="text-[14px] lg:text-[20px]">{label}</p>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="transition-[150ms] py-[12.5px] lg:py-[20px] xl:py-[25px] px-[20px] focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] mt-[10px] w-full focus:border-eccblue text-[14px] lg:text-[16px] placeholder:text-[14px] lg:placeholder:text-[16px]"
				placeholder={placeholder ? placeholder : null}
				type={type}
			/>
		</div>
	);
};
export default InputGroup;
