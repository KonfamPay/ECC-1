interface FooterListProps {
    title: string;
    items: string[];
    areButtons?: boolean;
}

const FooterList : React.FC<FooterListProps> = ({title, items}) => {
    return (
        <div>
            <p className="text-[#0B63C5] text-[12px] poppinsFont mb-[40px]">{title}</p>
            <div>
                {items.map(item => <p className="text-[14px] text-[#666666] mb-[24px]">{item}</p>)}
            </div>
        </div>
    )
}

export default FooterList;