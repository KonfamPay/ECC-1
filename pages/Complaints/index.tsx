import type { NextPage } from 'next';
import Complaint from '../../Components/Complaint';
import FooterComplaints from '../../Components/FooterComplaints';
import NavBar from '../../Components/NavBar';
import PostaComplaint from '../../Sections/HomeSections/PostaComplaint';


const index : NextPage = props => {
  return (
    <div className="">
      <NavBar hasWhiteText={true}/>
      <div className='bg-[#0B63C5] pt-48'>
        <p className="mx-auto text-center text-4xl font-semibold text-white pb-32">Complaints from the <br/> people</p>
      </div>
      <div className="bg-white container">
        <div className="pt-20 ml-16 mr-40">
          <div className="space-y-10 mb-[32px]">
            <Complaint title="An online vendor with insta handle @greggry.stores scammed me of #250,000 for intended for a weavon i never got" complaintContent='as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...' date="Today — April 22, 2022" author="@indaboski"/>
            <Complaint title="An online vendor with insta handle @greggry.stores scammed me of #250,000 for intended for a weavon i never got" complaintContent='as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...' date="Today — April 22, 2022" author="@indaboski"/>
            <Complaint title="An online vendor with insta handle @greggry.stores scammed me of #250,000 for intended for a weavon i never got" complaintContent='as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...' date="Today — April 22, 2022" author="@indaboski"/>
            <Complaint title="An online vendor with insta handle @greggry.stores scammed me of #250,000 for intended for a weavon i never got" complaintContent='as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...' date="Today — April 22, 2022" author="@indaboski"/>
            <Complaint title="An online vendor with insta handle @greggry.stores scammed me of #250,000 for intended for a weavon i never got" complaintContent='as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...' date="Today — April 22, 2022" author="@indaboski"/>
            <Complaint title="An online vendor with insta handle @greggry.stores scammed me of #250,000 for intended for a weavon i never got" complaintContent='as of now iam a distributor of pine tm from vizag andhra pradesh as of **** oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost because of them now there is no website of them...' date="Today — April 22, 2022" author="@indaboski"/>
          </div>
          <div className="space-x-2 mt-10 items-center inline justify-center">
            <button className="bg-[#0B63C5] border-2 px-5 py-3 rounded-[5px] text-white text-center">1</button>
            <button className="bg-white border-[1px] border-[#666666] px-5 py-3 rounded-[5px]">2</button>
            <button className="bg-white border-[1px] border-[#666666] px-5 py-3 rounded-[5px]">3</button>
            <button className="bg-white border-[1px] border-[#666666] px-5 py-3 rounded-[5px]">4</button>
            <button className="bg-white border-[1px] border-[#666666] px-5 py-3 rounded-[5px]">...</button>
            <button className="bg-white border-[1px] border-[#666666] px-5 py-3 rounded-[5px]">250</button>
            <button className="bg-white border-[1px] border-[#666666] px-5 py-3 rounded-[5px] inline">Next >></button>
          </div>
        </div>
      </div>
      <PostaComplaint />
      <FooterComplaints/>
    </div>
  )
}

export default index