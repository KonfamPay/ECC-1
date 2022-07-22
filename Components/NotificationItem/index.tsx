interface NotificationItemProps {
  title: string;
  additionalInfo: string;
  time: string;
}
const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  additionalInfo,
  time,
}) => {
  return (
    <div className="pl-[35px] pr-[45px] flex justify-between items-center bg-white">
      <div className="flex items-center gap-x-[15px]">
        <div className="w-[70px] h-[70px] bg-gradient-to-b from-[#0B63C5]/80 to-[#0B63C5] rounded-full"></div>
        <div>
          <p className="text-[20px] font-medium poppinsFont">{title}</p>
          <p className="text-[20px] text-[#666666] font-medium poppinsFont">
            {additionalInfo}
          </p>
        </div>
      </div>
      <p className="text-[#666666E8]">{time}</p>
    </div>
  );
};
export default NotificationItem;
