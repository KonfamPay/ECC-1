import SideNav from "./SideNav";
import TopNav from "./TopNav";

interface NavWrapperProps {
  children: JSX.Element;
}

const NavWrapper: React.FC<NavWrapperProps> = ({ children }) => {
  return (
    <>
      <SideNav />
      <TopNav />
      <div className="pl-[295px] pt-[126px] min-h-screen min-w-screen bg-[#F1F7FE]">
        <div className="bg-[#F1F7FE] w-[calc(100vw-295px)] h-[calc(100vh-126px)] pl-[30px] pr-[40px]">
          {children}
        </div>
      </div>
    </>
  );
};
export default NavWrapper;
