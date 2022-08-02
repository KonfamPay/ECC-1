import type { NextPage } from 'next'
import Navbar from "../../Components/NavBar" 
import FaqComponent from "../../Components/FaqComponent"
import Footer from '../../Sections/Footer'
import InputGroup from '../../Components/FaqComponent/InputGroup'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='mt-[106px]'>
        <div className="mx-auto items-center w-full text-center bg-[#F1F7FE] relative">
          <p className="pt-[111px] pb-[118px] mx-auto text-[481px] sm:text-4xl font-semibold text-black">Frequently Asked <span className='text-[#0B63C5]'>Questions</span></p>
          <div className="absolute w-full rounded-[12px] -bottom-[53px] px-[141px] -mt-16">
            <form>
              <div className='relative'>
                <img src="./icons/search.svg" className='absolute top-[37.95px] left-[63.75px] fill-[#0B63C5]' alt="" />{/* Update search color icon */}
                <input type="text" name="" id="" className='h-[106px] rounded-[12px] pl-[126px] pr-[196px] w-full placeholder:text-[20px] placeholder:text-black text-[20px] outline-none' placeholder='Search here for questions'/>
                <button className='absolute right-[28px] top-[23.5px] rounded-[12px] text-[20px] bg-[#0A5EBC] px-[48.5px] py-[14.5px] text-white'>
                  <p>Search</p>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='pt-[100px] pb-[180px] bg-gradient-to-br from-[#0B63C5] to-[#073D79]'>
          <div className='mt-[201px] mx-[100.5px]'>
            <div className='flex flex-col space-y-[80px]'>
              <div className='flex flex-row space-x-[51px]'>
                <FaqComponent 
                  iconPath={'faq-1'} 
                  title={'How do i access saved  complains?'} 
                  text={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.'}
                />
                <FaqComponent 
                  iconPath={'faq-2'} 
                  title={'How do i gain access to my profile?'} 
                  text={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.'}
                />
                <FaqComponent 
                  iconPath={'faq-3'} 
                  title={'How do i access saved  complains? '} 
                  text={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.'}
                />
              </div>
              <div className='flex flex-row space-x-[51px]'>
                <FaqComponent 
                  iconPath={'faq-2'} 
                  title={'How do i access saved  complains?'} 
                  text={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.'}
                />
                <FaqComponent 
                  iconPath={'faq-4'} 
                  title={'How do i gain access to my profile?'} 
                  text={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.'}
                />
                <FaqComponent 
                  iconPath={'faq-5'} 
                  title={'How do i access saved  complains?'} 
                  text={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[111px]'>
          <div className='w-full'>
            <p className='text-center text-[40px]'>Can’t find an answer yet?</p>
            <p className='mt-[25px] text-[#0B63C5] text-[20px] text-center'>Let’s help you better by referring you to customer service attendee. We will contact you through your email</p>
          </div>
          <form action="">
            <div className='mx-[120.5px] mt-[72px]'>
              <div className='flex space-x-[27px]'>
                <InputGroup 
                  label={'Full Name'} 
                  placeholder={'Enter Legal Fisrt Name'} 
                  value={''} 
                  setValue={undefined} 
                  type={'text'}
                />
                <InputGroup 
                  label={'Email Address'} 
                  placeholder={'Enter Email Address'} 
                  value={''} 
                  setValue={undefined} 
                  type={'text'}
                />
              </div>
              <div className='mt-[65px]'>
                <p className="text-[20px] mb-[24px]">Question/Complaint <span className="text-[#EF2E2E]">*</span></p>
                <textarea name="" className='w-full h-[324px] border-[2px] border-[#C5C5C5] rounded-[12px] resize-none pl-[20px] pr-[224px] pt-[25px] placeholder:text-[#C5C5C5]' placeholder='Write about what you want us to attend to you about'></textarea>
              </div>
              <div className='mx-auto text-center mt-[135px] mb-[112px]'>
                <button className='mx-auto text-[20px] px-[256.5px] py-[22px] bg-[#031830] rounded-[12px] text-white font-[600]'>
                  <p>Submit</p>
                </button>
              </div>
            </div>
          </form> 
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
