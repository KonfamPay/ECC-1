import type { NextPage } from 'next'
import Navbar from "../../Components/NavBar" 
import FaqComponent from "../../Components/FaqComponent"
import Footer from '../../Sections/Footer'
import InputGroup from '../../Components/FaqComponent/InputGroup'

const Home: NextPage = () => {
  return (
    <>
      <Navbar/>
      <div className='mt-[201px] mx-[100px]'> 
        <p className='text-[40px] text-center'>Complaint Letter Tool</p>
        <div className='bg-[#F1F7FE] ml-[50px] rounded-[12px]'>
          <div className='flex space-x-[50px] w-full mt-[53px]'>
            <img src="./icons/pencil.svg" className='ml-[50px]' alt="" />
            <div className='py-[37px] pr-[42px]'>
              <p className='text-[20px] text-[#0B63C5] leading-[50px]'>Use this tool to create an email you can send to the business you bought the product or received the service from. If you prefer, you can print the letter and send via the post.
              Remember to attach or include any relevant documentation, such as a receipt or photo of the faulty product, when you send the letter.</p>
            </div>
          </div>
        </div>
        <form action="" className='mt-[87px]'>
          <div className=''>
            <input type="text" name="" id="" className='placeholder:text-[#858383] placeholder:text-[20px] text-[20px]'/>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Home
