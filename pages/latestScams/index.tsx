import { NextPage } from "next";
import { useState } from "react";
import LatestScamStep from "../../Components/LatestScams/LatestScamsStep";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/FooterComplaints";
import WayIdentified from "../../Components/LatestScams/WayIdentified";
import ScamData from "../../Components/LatestScams/ScamData";
import KonfamPayCallout from "../../Components/KonfamPayCallout";
import SearchResultIndicator from "../../Components/LatestScams/SearchResultIndicator";

const LatestScams: NextPage = () => {
  const [scamData, setScamData] = useState(ScamData);
  const [searchText, setSearchText] = useState("");
  const [areSearchResults, setAreSearchResults] = useState(false);
  const [resultIndicatorShowing, setResultIndicatorShowing] = useState(false);
  const handleSearch = () => {
    scamData.forEach((item) => {
      setResultIndicatorShowing(true);
      if (
        item.socialMediaHandle.includes(searchText) ||
        item.bankAccountDetails.includes(searchText) ||
        item.website.includes(searchText) ||
        item.phoneNumber.includes(searchText)
      ) {
        setAreSearchResults(true);
      } else {
        setAreSearchResults(false);
      }
    });
    // scamData.forEach(item => )
  };
  return (
    <div className="poppinsFont">
      <NavBar />
      <div className="relative w-full mt-[73px] bg-[#031830] pt-[115px] text-white">
        <p className="text-[48px] max-w-[513px] mx-auto font-semibold">
          Be Informed, stay woke, stay smart!
        </p>
        <p className="max-w-[1000px] text-[24px] text-center mx-auto mt-[45px] font-medium">
          {" "}
          Search through over 10,000 scam details .They have scammed millions of
          Naira from Nigerian buyers. Beware of them and do not trust them or
          buy anything from them
        </p>
        <img src="/Images/searchingImage.png" className="mx-auto" />
        <div className="w-full px-[100px] absolute -bottom-[52px]">
          <div className="bg-white flex flex-row max-w-[1160px] mx-auto pl-[59px] pr-[28px] py-[24px] rounded-[12px] shadow-[2px_2px_15px_-3px_rgba(0,0,0,0.1)]">
            <img src="/Images/searchIcon.svg" />
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-grow ml-[45px] mr-[93px] focus:outline-none text-[20px] placeholder:text-[20px] placeholder:text-black placeholder:opacity-[0.62] text-black"
              placeholder="Search for phone number, social media handle, Bank details and website"
            />
            <button
              onClick={handleSearch}
              className="py-[14.5px] px-[48px] bg-[#0A5EBC] rounded-[12px] active:scale-95 transition-[100ms]"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div
        className="px-[100px]
mt-[110px] "
      >
        {resultIndicatorShowing && (
          <SearchResultIndicator
            setIsShowing={setResultIndicatorShowing}
            areSearchResults={areSearchResults}
          />
        )}
        <table className="mt-[39px] w-full rounded-[12px] overflow-hidden">
          <thead className="bg-[#0B63C5] text-white">
            <tr>
              <th className="py-[16px]">Count</th>
              <th>Social Media Handle</th>
              <th>Bank Account Details</th>
              <th>Website</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {scamData.map((item, index) => (
              <tr className="text-center border-2 border-l-0 border-r-0 border-b-[#E6E7E9]">
                <td className="py-[16px]">{index + 1}</td>
                <td className="border-b-[#E6E7E9]">{item.socialMediaHandle}</td>
                <td>{item.bankAccountDetails}</td>
                <td>{item.website}</td>
                <td>{item.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-[100px] w-full bg-[#F1F7FE] pt-[46px] px-[100px]">
        <h1 className="text-[40px] max-w-[500px] text-center mx-auto font-semibold leading-[50px]">
          How we have identified these{" "}
          <span className="text-[#0B63C5]">scams</span>
        </h1>
        <div className="flex gap-x-[31px] items-center mt-[144px]">
          <div className="min-w-[97px] min-h-[97px] bg-[#EF2E2E] rounded-[12px] flex items-center justify-center">
            <img className="w-[46px] h-[46px]" src="/Images/pencilIcon.svg" />
          </div>
          <p className="text-[20px] text-[#EF2E2E] font-medium ">
            The list is compiled based on inputs from our users. If you are a
            website or phone owner and think that your details are wrongly
            included please contact us so that we can remove you. We have taken
            below factors into consideration while categorizing a website as
            Scam
          </p>
        </div>
        <section className="flex flex-col gap-y-[73px] mt-[98px] pb-[109px]">
          <WayIdentified
            number={1}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius nullam et nibh nisl dignissim elementum. Vulputate nulla fermentum risus habitant cursus risus amet, et, lacinia. Et gravida pharetra, pretium, pellentesque. Sit auctor lacus, sed nisi, eu placerat pharetra. Suspendisse vitae ornare diam egestas. Posuere dictumst donec consectetur imperdiet neque ultrices consectetur velit. Tincidunt non fusce enim eu vel auctor mauris. Purus a vehicula facilisi dignissim etiam arcu, eu. Potenti amet malesuada morbi in. Viverra nisl massa duis volutpat iaculis elementum tincidunt neque. Sit a ac ornare odio."
            }
          />
          <WayIdentified
            number={2}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius nullam et nibh nisl dignissim elementum. Vulputate nulla fermentum risus habitant cursus risus amet, et, lacinia. Et gravida pharetra, pretium, pellentesque. Sit auctor lacus, sed nisi, eu placerat pharetra. Suspendisse vitae ornare diam egestas. Posuere dictumst donec consectetur imperdiet neque ultrices consectetur velit. Tincidunt non fusce enim eu vel auctor mauris. Purus a vehicula facilisi dignissim etiam arcu, eu. Potenti amet malesuada morbi in. Viverra nisl massa duis volutpat iaculis elementum tincidunt neque. Sit a ac ornare odio."
            }
          />
          <WayIdentified
            number={3}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius nullam et nibh nisl dignissim elementum. Vulputate nulla fermentum risus habitant cursus risus amet, et, lacinia. Et gravida pharetra, pretium, pellentesque. Sit auctor lacus, sed nisi, eu placerat pharetra. Suspendisse vitae ornare diam egestas. Posuere dictumst donec consectetur imperdiet neque ultrices consectetur velit. Tincidunt non fusce enim eu vel auctor mauris. Purus a vehicula facilisi dignissim etiam arcu, eu. Potenti amet malesuada morbi in. Viverra nisl massa duis volutpat iaculis elementum tincidunt neque. Sit a ac ornare odio."
            }
          />
        </section>
      </div>
      <section className="pt-[88px] pb-[93px] px-[100px] text-center">
        <h1 className="text-[48px] font-semibold">
          How to <span className="text-[#0B63C5]">stay away</span> from scams
        </h1>
        <LatestScamStep
          number={1}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius nullam et nibh nisl dignissim elementum. Vulputate"
          }
        />
        <LatestScamStep
          number={2}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius nullam et nibh nisl dignissim elementum. Vulputate"
          }
        />
        <LatestScamStep
          number={3}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius nullam et nibh nisl dignissim elementum. Vulputate"
          }
        />
        <LatestScamStep
          number={4}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius nullam et nibh nisl dignissim elementum. Vulputate"
          }
        />
      </section>
      <KonfamPayCallout />
      <Footer />
    </div>
  );
};
export default LatestScams;
