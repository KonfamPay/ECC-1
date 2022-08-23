import type { NextPage } from "next";
import Navbar from "../../Components/NavBar";
import FaqComponent from "../../Components/FaqComponent";
import Footer from "../../Sections/Footer";
import InputGroup from "../../Components/FaqComponent/InputGroup";

const Home: NextPage = () => {
	return (
		<div>
			<Navbar />
			<div className="mt-[106px]">
				<div className="mx-auto items-center w-full text-center bg-[#F1F7FE] relative">
					<p className="pt-[36px] lg:pt-[111px] pb-[60px] lg:pb-[118px] mx-auto text-[24px] lg:text-[48px] font-semibold text-black">
						Frequently Asked{" "}
						<span className="text-[#0B63C5]">Questions</span>
					</p>
					{/* <div className="absolute w-full rounded-[12px] -bottom-[53px] px-[141px] -mt-16">
            <form>
              <div className='relative'>
                <img src="./icons/search.svg" className='absolute top-[37.95px] left-[63.75px] fill-[#0B63C5]' alt="" />
                <input type="text" name="" id="" className='h-[106px] rounded-[12px] pl-[126px] pr-[196px] w-full placeholder:text-[20px] placeholder:text-black text-[20px] outline-none' placeholder='Search here for questions'/>
                <button className='absolute right-[28px] top-[23.5px] rounded-[12px] text-[20px] bg-[#0A5EBC] px-[48.5px] py-[14.5px] text-white'>
                  <p>Search</p>
                </button>
              </div>
            </form>
          </div> */}
					<div className="mx-[18px] lg:hidden absolute z-50 -bottom-[17%]">
						<form action="">
							<div className="relative">
								<img
									src="./icons/search.svg"
									className="absolute top-[30%] left-[9px] fill-[#0B63C5] w-[19px] h-[19px]"
									alt=""
								/>
								<input
									type="text"
									name=""
									id=""
									className="h-[44px] rounded-[12px] pl-[40px] pr-[196px] w-full placeholder:text-[9px] placeholder:text-black text-[9px] outline-none"
									placeholder="Search here for questions"
								/>
							</div>
						</form>
					</div>
				</div>
				<div className="bg-gradient-to-br from-[#0B63C5] to-[#073D79] h-fit w-full px-[12.5px] select-none pt-[42px] relative">
					<div className="relative border-b-[0.5px] border-b-[#cccccc] pt-[16px] first:pt-0">
						<input
							type="checkbox"
							id="question2"
							name="q"
							className="questions hidden"
						/>
						<label
							htmlFor="question2"
							className="question text-white relative my-0 mx-auto opacity-[0.9] py-[10px] block cursor-pointer text-[16px] font-[700]"
						>
							How do i gain access to my profile?
							<div className="plus absolute ml-[10px] z-[5] text-[1.8rem] leading-[100%] select-none right-[10px] top-[15px]">
								<div className="w-[15px] h-[15px] flex items-center justify-center bg-white rounded-full">
									<img
										src="../icons/chevron-down.svg"
										alt=""
									/>
								</div>
							</div>
						</label>
						<div className="answers text-white py-[0px] h-0 overflow-hidden z-[-1] opacity-0 leading-[170%]">
							In publishing and graphic design, Lorem ipsum is a
							placeholder text commonly the visual form of a
							document or a typeface without relying on
							meaningful.
						</div>
					</div>
				</div>
				<div className="pt-[100px] pb-[180px] bg-gradient-to-br from-[#0B63C5] to-[#073D79] hidden lg:block">
					<div className="mt-[201px] mx-[100.5px]">
						<div className="flex flex-col space-y-[80px]">
							<div className="flex flex-row space-x-[51px]">
								<FaqComponent
									iconPath={"faq-1"}
									title={"How do i access saved  complains?"}
									text={
										"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."
									}
								/>
								<FaqComponent
									iconPath={"faq-2"}
									title={
										"How do i gain access to my profile?"
									}
									text={
										"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."
									}
								/>
								<FaqComponent
									iconPath={"faq-3"}
									title={"How do i access saved  complains? "}
									text={
										"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."
									}
								/>
							</div>
							<div className="flex flex-row space-x-[51px]">
								<FaqComponent
									iconPath={"faq-2"}
									title={"How do i access saved  complains?"}
									text={
										"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."
									}
								/>
								<FaqComponent
									iconPath={"faq-4"}
									title={
										"How do i gain access to my profile?"
									}
									text={
										"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."
									}
								/>
								<FaqComponent
									iconPath={"faq-5"}
									title={"How do i access saved  complains?"}
									text={
										"In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful."
									}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-[32px] lg:mt-[111px] mx-[12px]">
					<div className="w-full">
						<p className="text-center text-[18px] lg:text-[40px]">
							Can’t find an answer yet?
						</p>
						<p className="mt-[25px] text-[#0B63C5] text-[14px] lg:text-[20px] text-center">
							Let’s help you better by referring you to customer
							service attendee. We will contact you through your
							email
						</p>
					</div>
					<form action="">
						<div className="mt-[72px] mx-auto max-w-[1201px]">
							<div className="flex flex-col lg:flex-row space-x-0 lg:space-x-[27px] space-y-[27px] lg:space-y-0">
								<InputGroup
									label={"Full Name"}
									placeholder={"Enter Legal Fisrt Name"}
									value={""}
									setValue={undefined}
									type={"text"}
								/>
								<InputGroup
									label={"Email Address"}
									placeholder={"Enter Email Address"}
									value={""}
									setValue={undefined}
									type={"text"}
								/>
							</div>
							<div className="mt-[65px]">
								<p className="text-[20px] mb-[24px]">
									Question/Complaint
								</p>
								<textarea
									name=""
									className="w-full h-[324px] border-[2px] border-[#C5C5C5] rounded-[12px] resize-none px-[11.28px] lg:px-[20px] pt-[25px] placeholder:text-[#C5C5C5] outline-[#0B63C5]"
									placeholder="Write about what you want us to attend to you about"
								></textarea>
							</div>
							<div className="mx-auto text-center mt-[27px] lg:mt-[135px] mb-[112px] cursor-pointer">
								<button className="mx-auto text-[20px] w-full max-w-[587px] py-[11.5px] lg:px-[256.5px] flex items-center justify-center bg-[#031830] rounded-[12px] text-white font-[600]">
									<p>Submit</p>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>

			{/* <Footer /> */}
		</div>
	);
};

export default Home;
