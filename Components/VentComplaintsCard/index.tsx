interface VentComplaintsCardProps {
    title: string;
    description: string;
    opacity: number;
}

const VentComplaintsCard : React.FC<VentComplaintsCardProps> = ({title, description, opacity}) => {
    console.log(opacity);
    return (
        <div style={{opacity}} className="w-full bg-white bg-opacity-10 rounded-[16px] flex flex-row items-center px-[24px] gap-[20px] py-[30px]">
            <div className="w-[72px] h-[72px] rounded-full border-[0.4px] border-[#C4C4C4]"></div>
            <div className="max-w-[328px]">
                <h3 className='text-[22px] font-semibold poppinsFont text-white'>{title}</h3>
                <p className="text-white text-[16px] poppinsFont">{description}</p>
            </div>
        </div>
    )
}

export default VentComplaintsCard;