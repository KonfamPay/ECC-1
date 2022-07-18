interface ComplaintProps {
    title: string;
    complaintContent: string;
    date: string;
    author: string;
}
const Complaint : React.FC<ComplaintProps> = ({title, complaintContent, author, date}) => {
    return (
        <div>
        <p className="text-left font-semibold mb-[11px]">{title}</p>
        <p className="font-extralight">{complaintContent}</p>
        <p className="font-extralight mt-1 text-[12px]">{date} by <span className="text-[#0B63C5]">{author}</span></p>
      </div>
    );
}
export default Complaint;