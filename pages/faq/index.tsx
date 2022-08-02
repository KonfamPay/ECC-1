import type { NextPage } from 'next'
import Navbar from "../../Components/NavBar" 
import Footer from '../../Sections/Footer'

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
        <div className=' py-[100px] bg-gradient-to-br from-[#0B63C5] to-[#073D79]'>
          <div className='mt-[201px] mx-[100.5px]'>
            <div className='flex flex-row space-x-[51px]'>
              <div>
                <div className='bg-[#F1F7FE] rounded-full'>
                  <img src="../icons/fac-1.svg" className='py-[17px] px-[17px]' alt="" />
                </div>
                <div>
                  <p>How do i access saved  complains? </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
