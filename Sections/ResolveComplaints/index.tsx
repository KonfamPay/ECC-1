import Image from 'next/image';

const ResolveComplaintsSection : React.FC = () => {
    return (
        <div className='pb-[150px]'>
            <h1 className='text-center mx-auto font-semibold text-[48px] lg:max-w-[826px]'>
                Help resolve Users Complaints and make them happy again!
            </h1>
            <div className='flex justify-center mt-[81px] px-[40px]'>
                <Image src='/Images/LawyerShakingHands.png' width={1159} height={641} />
            </div>
        </div>
    );
}
export default ResolveComplaintsSection;