import type { NextPage } from 'next';
import FooterComplaints from '../../Components/FooterComplaints';
import NavBar from '../../Components/NavBar';
import JoinLawyersSection from '../../Sections/JoinLawyersSection';
import MakeThingsRightSection from '../../Sections/MakeThingsRightSection';
import ResolveComplaintsSection from '../../Sections/ResolveComplaints';

const LawPracitioners : NextPage = () => {
    return (
        <div className='lg:mt-[200px]'>
            <NavBar />
            <ResolveComplaintsSection />
            <MakeThingsRightSection />
            <JoinLawyersSection />
            <FooterComplaints />
        </div>
    );
}
export default LawPracitioners;