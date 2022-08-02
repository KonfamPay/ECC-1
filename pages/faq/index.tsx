import type { NextPage } from 'next'
import Navbar from "../../Components/NavBar" 
import Footer from '../../Sections/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='mt-[106px]'>
        <div className="mx-auto items-center w-full text-center bg-[#F1F7FE]">
          <p className="pt-[111px] pb-[118px] mx-auto text-[481px] sm:text-4xl font-semibold text-black">Frequently Asked <span className='text-[#0B63C5]'>Questions</span></p>
        </div>
        <div className="w-auto h-auto rounded-[12px] mx-[141px] bg-[#fff] -mt-16">
          <form>
            <div className='relative'>
               <img src="./icons/search.svg" className='absolute top-[37.95px] fill-[#0B63C5]' alt="" />{/* Update search color icon */}
              <input type="text" name="" id="" className='h-[106px] rounded-[12px]'   placeholder=''/>
              <button className='absolute right-[28px] top-[23.5px] rounded-[12px] text-[20px] bg-[#0A5EBC] px-[48.5px] py-[14.5px]'>
                <p>Search</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
