import type { NextPage } from 'next'
import Navbar from "../../Components/NavBar" 
import Footer from '../../Sections/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='mt-[217px] bg-[#F1F7FE]'>
        <div className='mb-[118px] relative'>
          <p className='text-[48px] font-[600] text-center'>Frequently Asked Questions</p>
        </div>
        <div className='mx-[141px] absolute bottom'>
          <form action="">
            <input type="text" name="" id="" className='w-full rounded-[12px]'/>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
