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
        <div className='mt-[87px]'>
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
            <div className='mt-[7px] flex space-x-[10px] px-[10.5px] py-[8px] w-fit rounded-[12px] bg-[#F1F7FE]'>
              <p className='text-[#0B63C5]'>What should this include?</p>
              <img src="./icons/chevron-down.svg" className='cursor-pointer' alt="" />
            </div>
          </div>
          <div className='mt-[44px]'>
            <p className='text-[20px]'>I understand that under the Nigerian Consumer Law, when I buy products and services they come with automatic guarantees that they will work and do what I asked for.</p>
          </div>
          <div className='mt-[44px]'>
            <textarea 
              name="" 
              id="" 
              className='w-full h-[231px] rounded-[12px] border-[1px] resize-none outline-none placeholder:text-[18px] placeholder:text-[#838383] px-[20px] py-[25px]' 
              placeholder='Explain what evidence you are providing to support your complaint, such as your proof of purchase or photographs of the faulty product (you can include this when you send the letter).'
            />
            <div className='mt-[7px] flex space-x-[10px] px-[10.5px] py-[8px] w-fit rounded-[12px] bg-[#F1F7FE]'>
              <p className='text-[#0B63C5]'>What can I use as a proof of purchase?</p>
              <img src="./icons/chevron-down.svg" className='cursor-pointer' alt="" />
            </div>
          </div>
          <div className='mt-[44px]'>
            <textarea 
              name="" 
              id="" 
              className='w-full h-[231px] rounded-[12px] border-[1px] resize-none outline-none placeholder:text-[18px] placeholder:text-[#838383] px-[20px] py-[25px]' 
              placeholder='What would you like the business to do to resolve the issue?).'
            />
            <div className='mt-[7px] flex space-x-[10px] px-[10.5px] py-[8px] w-fit rounded-[12px] bg-[#F1F7FE]'>
              <p className='text-[#0B63C5]'>What am I entitled to?</p>
              <img src="./icons/chevron-down.svg" className='cursor-pointer' alt="" />
            </div>
          </div>
          <div className='text-[20px] mt-[44px]'>
            <div className='leading-[44px] '>
              <p className='inline'>If I do not hear from you within </p>
              <input type="date" name="" id="" className='w-[230px] ml-[9px] mr-[10px] border-b-[1px] outline-none '/>
              <p className='ml-[13px] inline'> I will lodge a formal complaint with e-commerce complaints(ecc). </p>
              <p className='mr-[9px] inline'>You can contact me about this complaint via email</p>
              <input type="text" name="" id="" className='w-[204px] mr-[8px] border-b-[1px] outline-none placeholder:text-[20px] placeholder:text-[#858383]' placeholder='your email address'/>
              <p className='mr-[9px] inline'>or call me on</p>
              <input type="text" name="" id="" className='w-[204px] mr-[10px] border-b-[1px] outline-none placeholder:text-[20px] placeholder:text-[#858383]' placeholder='your phone number'/>
              <p className='mr-[9px] inline'>during business hours</p>
            </div>
            <p className='mt-[22px]'>Thanks for your assistance in this matter</p>
            <p className='mt-[30px]'>Regards.</p>
            <input type="text" name="" id="" className='w-[121px] mt-[10px] mr-[10px] border-b-[1px] outline-none placeholder:text-[20px] placeholder:text-[#858383]' placeholder='your name'/>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
