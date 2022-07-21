import FooterList from "../../Components/FooterList";
import Image from 'next/image';


const Footer : React.FC = (props) => {
    return (
        <footer data-aos="fade-up" className="px-[40px] md:px-0 relative flex flex-col md:flex-row items-start md:-left-8 xl:left-0 md:pt-[72px] md:justify-center xl:justify-start pb-[144px]">
            <img src="./images/logo.svg" className="xl:ml-[100px] lg:mr-[115px] relative -left-[30px] md:left-0 md:-top-16 md:h-40 w-28 h-28 md:w-40" alt="ECC's Logo" />
            <div className="flex flex-row gap-[50px] lg:gap-[56px] md:mr-[66px] lg:mr-[150px] xl:mr-[235px] mb-[40px]">
                <FooterList title='NAVIGATE THROUGH' items={["Home", "Complaints"] }/>
                <FooterList title='SUPPORT' items={["Contact Us", "FAQs"] }/>
            </div>
            <FooterList title='TAKE ACTION' items={["Post a Complaint", "Talk to our Lawyers"] } areButtons={true}/>
        </footer>


    )
}
export default Footer;