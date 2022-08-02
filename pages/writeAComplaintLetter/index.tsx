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
        <div className='bg-[#F1F7FE] rounded-[12px]'>
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
            <div>
              <input type="text" name="" id="" className='placeholder:text-[#858383] placeholder:text-[20px] text-[20px] border-none border-b-[12px] border-b-[#858383]'/>
            </div>
            <div className='mt-[73px] text-[20px] flex'>
              <p>On</p>
              <input type="date" name="" id="" className='w-[141px] ml-[9px] mr-[10px] border-b-[1px] outline-none'/>
              <p className=''>, I purchased</p>
              <input type="text" name="" id="" className='w-[230px] ml-[9px] mr-[15px] border-b-[1px] placeholder:text-[#858383] outline-none' placeholder='product/service name'/>
              <p>from</p>
              <input type="text" name="" id="" className='w-[225px] ml-[9px] border-b-[1px] placeholder:text-[#858383] outline-none' placeholder='the place of purchase'/>
            </div>
            <div className='mt-[44px]'>
              <textarea name="" id="" className='w-full h-[231px] rounded-[12px] border-[1px] resize-none outline-none placeholder:text-[18px] placeholder:text-[#838383] px-[20px] py-[25px]' placeholder='Explain what the problem is and what you have done so far to resolve it.'/>
            </div>
            <div className='flex space-x-[10px] px-[10.5px] py-[8px] w-fit rounded-[12px] bg-[#F1F7FE]'>
              <p className='text-[#0B63C5]'>What should this include?</p>
              <img src="" alt="" />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Home
