import React from 'react';
import Image from 'next/image';

interface IconContainerProps {
    iconPath: string;
    size: string;
}

const IconContainer : React.FC<IconContainerProps> = ({iconPath, size}) => {
    return (
        <div className={`w-[${!size ? "80" : size }px] h-[${!size ? "80" : size }px] bg-gradient-to-br from-[#0B63C5] to-[#0953A4] -rotate-[8deg] rounded-[16px] flex items-center justify-center`}>
            <Image src={iconPath} width={40} height={40} />
        </div>
    )
}

export default IconContainer;