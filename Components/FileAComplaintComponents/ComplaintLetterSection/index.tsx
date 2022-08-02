const ComplaintLetterSection = () => {
  return (
    <div className="w-full bg-[#031830] mt-[72px] pb-[58px]">
      <div className="relative px-[100px] leading-[37px] text-[20px] font-medium w-full max-w-[1600px] mx-auto">
        <p className="text-white pt-[67px] ">
          Always try to resolve a problem with a business before seeking help
          from <br /> ecommerce complaint . You can do this by writing a
          complaint letter.
        </p>
        <p className="text-[#FCB714]">
          Don’t worry you just have to fill in little details. We will finish it
          up for you!!
        </p>
        <button className="bg-white py-[17px] px-[21px] text-[18px] font-semibold rounded-[12px] mt-[28px]">
          Write a complaint letter
        </button>
        <img
          className="absolute right-[56.24px] top-0"
          src="/Images/handShake.png"
        />
      </div>
    </div>
  );
};
export default ComplaintLetterSection;
