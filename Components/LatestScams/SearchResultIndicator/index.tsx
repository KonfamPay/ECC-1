import { Dispatch, SetStateAction } from "react";

interface SearchResultIndicatorProps {
  areSearchResults: boolean;
  setIsShowing: Dispatch<SetStateAction<boolean>>;
}
const SearchResultIndicator: React.FC<SearchResultIndicatorProps> = ({
  areSearchResults,
  setIsShowing,
}) => {
  const closeResultIndicator = () => {
    setIsShowing(false);
  };

  return (
    <div>
      {!areSearchResults && (
        <div
          onClick={() => closeResultIndicator()}
          className="w-full py-[18px] pl-[42px] pr-[15px] flex justify-between bg-[#FDEDB4] rounded-[12px] border border-[#F0BB00] text-[#F0BB00]"
        >
          No item on our list match your search. Make sure you enter the correct
          keyword
          <img className="cursor-pointer" src="/icons/orangeXIcon.svg" />
        </div>
      )}
      {areSearchResults && (
        <div
          onClick={() => closeResultIndicator()}
          className="w-full py-[18px] pl-[42px] pr-[15px] flex justify-between bg-[#BEFF9F] rounded-[12px] border border-[#52FF01] text-[#079A04]"
        >
          Your search succesfully made a match on our list. It has been
          highlighted on our list
          <img className="cursor-pointer" src="/icons/greenXIcon.svg" />
        </div>
      )}
    </div>
  );
};
export default SearchResultIndicator;
