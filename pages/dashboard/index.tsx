import type { NextPage } from "next";
import { useEffect, useState } from "react";
import DashboardCard from "../../Components/DashboardComponents/DashboardCard";
import NavWrapper from "../../Components/DashboardNav/NavWrapper";
import ComplaintsCardSection from "../../Sections/ComplaintsCardSection";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

interface User {
	firstName: string;
	lastName: string;
	_id: string;
	iat: number;
}

const index: NextPage = (props) => {
	const [cookie, setCookie] = useCookies(["token"]);
	const [user, setUser] = useState<User>({
		firstName: "",
		lastName: "",
		_id: "",
		iat: 0,
	});
	const router = useRouter();
	useEffect(() => {
		if (!cookie.token) router.replace("/login");
		else {
			const userObj = jwt_decode(cookie.token) as User;
			setUser(userObj);
			console.log(userObj);
		}
	}, []);
	return (
		<NavWrapper>
			<div className="">
				<div className="bg-[#020D1B] w-full h-[255px] rounded-[20px] flex flex-row relative">
					<div className="text-white pl-[43px] py-[58.5px]">
						<p className="text-[40px] leading-[60px] font-[600]">
							Hi, {user.firstName}
						</p>
						<p className="text-[24px] leading-[36px] font-[600] w-[503px]">
							Vendor don do you strong thing again? <br /> We are
							ready to listen to your complaints
						</p>
					</div>
					<div>
						<img
							src="./images/man-freaked-out.png"
							className="absolute right-[21.28px] -top-[30.54px] h-[285.54px] w-[377.72px]"
							alt=""
						/>
					</div>
				</div>
				<div className="mt-[59px]">
					<DashboardCard />
				</div>
			</div>
		</NavWrapper>
	);
};

export default index;
