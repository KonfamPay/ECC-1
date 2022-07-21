import type { NextPage } from 'next';
import ComplaintsNavBar from '../../../Components/DashboardComponents/DashboardProfile/ComplaintsNavBar';

const mycomplaints : NextPage = props => {
  return (
    <div className="mx-[28.5px] mt-[55px]">
      <ComplaintsNavBar/>
    </div>
  )
}

export default mycomplaints