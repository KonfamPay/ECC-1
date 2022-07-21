interface NotificationProps {
  newNotifications: boolean;
}

const Notifications: React.FC<NotificationProps> = ({ newNotifications }) => {
  return (
    <div className="relative">
      <img className="w-[24px] h-[24px]" src="/Images/notificationsIcon.svg" />
      <div
        style={{ opacity: newNotifications ? 1 : 0 }}
        className="transition-[150ms] w-[12px] h-[12px] bg-[#FF0000] rounded-full absolute top-0 right-0"
      ></div>
    </div>
  );
};
export default Notifications;
