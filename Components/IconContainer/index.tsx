import React from 'react';

interface IconContainerProps {
    iconPath?: string;
}

const IconContainer : React.FC<IconContainerProps> = ({iconPath}) => {
    return (
        <div className='w-[80px] h-[80px] bg-gradient-to-br from-[#0B63C5] to-[#0953A4] rotate-[15deg]'>

        </div>
    )
}

export default IconContainer;