import type { NextPage } from 'next';
import ProfileCard from '../../../Components/DashboardComponents/DashboardProfile/ProfileCard';

const profile : NextPage = props => {
  return (
    <div className="mx-[28.5px] mt-[55px]">
      <ProfileCard/>
    </div>
  )
}

export default profile