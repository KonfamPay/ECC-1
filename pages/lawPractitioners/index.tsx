import type { NextPage } from 'next';
import NavBar from '../../Components/NavBar';
import MakeThingsRightSection from '../../Sections/MakeThingsRightSection';
import ResolveComplaintsSection from '../../Sections/ResolveComplaints';

const LawPracitioners : NextPage = () => {
    return (
        <div className='lg:mt-[200px] lg:mb-[150px]'>
            <NavBar />
            <ResolveComplaintsSection />
            <MakeThingsRightSection />
        </div>
    );
}
export default LawPracitioners;