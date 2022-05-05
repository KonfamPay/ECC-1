interface FooterListProps {
    title: string;
    items: string[];
    areButtons?: boolean;
}

const FooterList : React.FC<FooterListProps> = ({title, items, areButtons}) => {
    return (
        <div>
            <p className="text-[#0B63C5] text-[12px] poppinsFont mb-[40px]">{title}</p>
            <div className="flex flex-col items-start">
                {!areButtons && items.map(item => <p className="text-[14px] text-[#666666] mb-[24px]">{item}</p>)}
                {areButtons && <><button className="text-[14px] text-white px-[30px] py-[14px] text-white mb-[24px] rounded-[8px] bg-[#0B63C5] font-medium w-[177px]">{items[0]}</button><button className="text-[14px] text-black font-medium px-[20px] py-[14px] text-white mb-[24px] rounded-[8px] text-center bg-[#ECF4FE] w-[177px]">{items[1]}</button></>}
            </div>
        </div>
    )
}

export default FooterList;