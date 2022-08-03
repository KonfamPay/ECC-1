import type { NextPage } from 'next'
import Navbar from "../../../Components/NavBar" 
import Footer from '../../../Sections/Footer'
import { useState } from 'react'

const Home: NextPage = () => {
  const [shouldInclude, setShouldInclude] = useState(false)
  const [shouldPurchase, setShouldPurchase] = useState(false)
  const [entitleTo, setEntitleTo] = useState(false)
  const [showDateRange, setShowDateRange] = useState(false)
  const [dateRange, setDateRange] = useState('')
  return (
    <>
      <Navbar/>
      <div className='mt-[201px] mx-[100px]'> 
        <p className='text-[40px] text-center'>Complaint Letter Tool</p>
      </div>
      <Footer />
    </>
  )
}

export default Home
