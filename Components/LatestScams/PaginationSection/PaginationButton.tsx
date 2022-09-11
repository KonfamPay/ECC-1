interface PaginationButtonProps {
  text: string;
  isPage?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}
const PaginationButton: React.FC<PaginationButtonProps> = ({
  text,
  isPage,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick ? () => onClick() : undefined}
      style={{
        backgroundColor: isPage ? (isActive ? "#0B63C5" : "white") : "#0B63C5",
        color: isPage ? (isActive ? "white" : "#979797") : "white",
        border: isPage ? (isActive ? "none" : "1px solid #979797") : "none",
      }}
      className="transition-[200ms] py-[17px] px-[25px] text-white tex-[19px] rounded-[5.26px] cursor-pointer"
    >
      {text}
    </div>
  );
};
export default PaginationButton;
