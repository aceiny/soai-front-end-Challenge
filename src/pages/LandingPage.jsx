import React, { useEffect } from 'react'
import NavBar from '../utilitis/NavBar'
import Circles from '../comps/LandinPage/Circles'
import LandinHeader from '../comps/LandinPage/LandinHeader'
import { CourseCard } from '../utilitis/CourseCard'
import LandinCourses from '../comps/LandinPage/LandinCourses'
import AboutUs from '../comps/LandinPage/AboutUs'
import Footer from '../utilitis/Footer'
import AOS from 'aos';
const LandingPage = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className='LandingPage relative'>
        <NavBar/>
        <div className='special-top'>
            <LandinHeader/>
            <LandinCourses/>
        </div>
        <AboutUs    />
        <Footer/>
    </div>
  )
}

export default LandingPage
/**/