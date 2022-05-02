import React from 'react';
import Image from 'next/image';

interface IconContainerProps {
    iconPath: string;
}

const IconContainer : React.FC<IconContainerProps> = ({iconPath}) => {
    return (
        <div className='w-[80px] h-[80px] bg-gradient-to-br from-[#0B63C5] to-[#0953A4] -rotate-[8deg] rounded-[16px] flex items-center justify-center'>
            <Image src={iconPath} width={40} height={40} />
        </div>
    )
}

export default IconContainer;