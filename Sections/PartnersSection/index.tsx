import PartnerBox from "../../Components/PartnerBox";

const PartnersSection : React.FC = (props) => {
    return (
        <div>
            <h1 className='max-w-[500px] lg:max-w-[700px] text-[32px] lg:text-[40px] font-semibold poppinsFont mt-[100px] mb-[56px] text-center mx-auto'>Active Partners helping  to create safety and awareness</h1>
            <div className="flex flex-col gap-[16px] lg:gap-[32px] lg:scale-95">
                <div className="flex flex-row justify-center items-center w-full md:gap-[17px] lg:gap-[28px]">
                    {[0, 1, 2, 3].map(item => <PartnerBox />)}
                </div>
                <div className="flex flex-row justify-center items-center w-full md:gap-[17px] gap-[28px]">
                    {[0, 1, 2, 3, 4].map(item => <PartnerBox />)}
                </div>
                <div className="flex flex-row justify-center items-center w-full md:gap-[17px] gap-[28px]">
                    {[0, 1, 2, 3].map(item => <PartnerBox />)}
                </div>
            </div>
        </div>
    )
};

export default PartnersSection;