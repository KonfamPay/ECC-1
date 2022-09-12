import { Dispatch, SetStateAction } from "react";
import { PaginationButton } from "../../";

interface PaginationSectionProps {
	searchResults: any[];
	setSearchResults: Dispatch<SetStateAction<any[]>>;
	maxResultsPerPage: number;
	currentSearchPage: number;
	setCurrentSearchPage: Dispatch<SetStateAction<number>>;
	numberOfPages: number;
	pageSize: any;
}

const PaginationSection: React.FC<PaginationSectionProps> = ({ searchResults, setSearchResults, maxResultsPerPage, numberOfPages, currentSearchPage, setCurrentSearchPage, pageSize }) => {
	return (
		<div className="mt-[60px] flex justify-center gap-x-[31px]">
			{searchResults.length > maxResultsPerPage && currentSearchPage > 1 && (
				<PaginationButton
					pageSize={pageSize}
					text="Prev"
					onClick={() => setCurrentSearchPage(currentSearchPage - 1)}
				/>
			)}
			{Array.from(Array(numberOfPages).keys()).map((number, index) => (
				<PaginationButton
					text={(number + 1).toString()}
					isPage
					pageSize={pageSize}
					isActive={currentSearchPage == number + 1}
					onClick={() => setCurrentSearchPage(number + 1)}
					key={index}
				/>
			))}
			{/* <PaginationButton
        text={(2).toString()}
        isPage
        isActive={currentSearchPage == 2}
        onClick={() => setCurrentSearchPage(2)}
      /> */}
			{searchResults.length > maxResultsPerPage && currentSearchPage != numberOfPages && (
				<PaginationButton
					pageSize={pageSize}
					onClick={() => setCurrentSearchPage(currentSearchPage + 1)}
					text="Next"
				/>
			)}
		</div>
	);
};
export default PaginationSection;
