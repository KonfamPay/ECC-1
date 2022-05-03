const VentComplaintsCard : React.FC = props => {
    return (
        <div className="w-full bg-white bg-opacity-10 rounded-[16px] flex flex-row items-center px-[24px] gap-[20px] py-[30px]">
            <div className="w-[72px] h-[72px] rounded-full border-[0.4px] border-[#C4C4C4]"></div>
            <div className="max-w-[328px]">
                <h3 className='text-[22px] font-semibold poppinsFont text-white'>E-Commerce Complaints</h3>
                <p className="text-white text-[16px] poppinsFont">Delay in delivery, no delivery from vendors, blocked after payment</p>
            </div>
        </div>
    )
}

export default VentComplaintsCard;