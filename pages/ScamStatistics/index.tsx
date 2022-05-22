import React from 'react'
import type { NextPage } from 'next';
import FooterComplaints from '../../Components/FooterComplaints';
import NavBar from '../../Components/NavBar';

const index : NextPage = props => {
  return (
    <>
      <NavBar/>
      <div className="pt-48 mx-auto items-center justify-center text-center bg-[#031830]">
        <p className="mx-auto text-[30px] sm:text-4xl font-bold text-white">Be informed, stay woke,<br/> stay smart!</p>
        <img src="./Images/look.png" alt="" className="mx-auto"/>
      </div>
      <FooterComplaints/>
    </>
  )
}


export default index