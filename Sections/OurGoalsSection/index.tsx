import React from 'react';
import GoalCard from '../../Components/GoalCard';
import IconContainer from '../../Components/IconContainer';

const OurGoalsSection : React.FC = (props) => {
    const goalCardInfo = [
        {
            title: 'Protect our customers', 
            description: 'Safety & security tips, scam watch, guidelines to protect users from fraud and put an end to inustice.', 
            iconPath: '/Images/sword.svg'
        }, 
        {
            title: 'Help our customers', 
            description: 'Reach decision maker, send email, get attention from brand via social campaigns.', 
            iconPath: '/Images/question.svg'
        }, 
        {
            title: 'Fight for our customers', 
            description: 'Take legal action and approach Consumer forum with experienced lawyers.', 
            iconPath: '/Images/sword.svg'
        }, 

    ]
    return (
        <div className="text-[32px]">
            <h1 className='font-medium poppinsFont max-w-[800px] text-center mx-auto mt-[72px] mb-[90px]'>We are solely bent on redefining customer-buyer relationships in Nigeria.</h1>
            <div className='mt-[50px] flex flex-col lg:flex-row justify-center items-center px-[30px] lg:px-0 gap-[20px] mb-[114px]'>
                {goalCardInfo.map(card => <GoalCard title={card.title} description={card.description} iconPath={card.iconPath}  />)}
            </div>
        </div>
    )
}
export default OurGoalsSection;