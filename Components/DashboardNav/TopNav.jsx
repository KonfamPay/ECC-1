import Link from "next/link";
import Notifications from "./Notifications";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import moment from "moment";
import jwt_decode from "jwt-decode";

const TopNav = () => {
	const [cookie, setCookie] = useCookies(["token"]);
    const router = useRouter();
    const [user, setUser] = useState({});
    const currentDate = moment().format("ddd. Do MMMM, YYYY");
	useEffect(() => {
		if (!cookie.token) router.replace("/login");
		else {
			const user = jwt_decode(cookie.token);
			setUser(user);
		}
	}, []);
    return (
        <div style={{zIndex: 20}} className="fixed left-[274px] top-0 w-[calc(100%-274px)] h-[126px] bg-white pl-[35px] pt-[26px] pr-[66px] flex justify-between items-center poppinsFont">
            <div>
                <p className="font-medium text-[24px] text-eccblue">Dashboard</p>
                <p className="font-medium text-[18px] text-[#7A797D] mt-[2px]">{currentDate}</p>
            </div>
            <div className="flex items-center gap-x-[60px]">
                    <Notifications newNotifications/>
                <div className="flex gap-x-[21px]">
                    <div className="w-[50px] h-[50px] rounded-full">
                        <img className="w-full" src="/Images/profilePic.png" />
                    </div>
                    <div className="flex flex-col items-start ">
                        <p className="font-semibold opacity-70 text-[20px]">{`${user.firstName} ${user.lastName}`}</p>
                        <p className="font-semibold text-[14px] relative "><span className="opacity-70">Member since</span> <span className="text-eccblue">2022</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TopNav;