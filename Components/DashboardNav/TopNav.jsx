import Notifications from "./Notifications";

const TopNav = () => {
    return (
        <div className="fixed left-[274px] top-0 w-[calc(100%-274px)] h-[126px] bg-white pl-[35px] pt-[26px] pr-[66px] flex justify-between items-center poppinsFont">
            <div>
                <p className="font-medium text-[24px] text-[#0B63C5]">Dashboard</p>
                <p className="font-medium text-[18px] text-[#7A797D] mt-[2px]">Mon. 21st July, 2021</p>
            </div>
            <div className="flex items-center gap-x-[60px]">
                <Notifications newNotifications/>
                <div className="flex gap-x-[21px]">
                    <div className="w-[50px] h-[50px] rounded-full">
                        <img className="w-full" src="/Images/profilePic.png" />
                    </div>
                    <div className="flex flex-col items-center ">
                        <p className="font-semibold opacity-70 text-[20px]">Voke Onoriode</p>
                        <p className="font-semibold text-[14px] relative right-[5px]"><span className="opacity-70">Member since</span> <span className="text-[#0B63C5]">2022</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TopNav;