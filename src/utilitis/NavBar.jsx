import React, { useEffect, useState } from 'react'
import ModeSwitchers from './ModeSwitchers'
import logo from '../assets/LOGO.svg'
import { FaBars } from "react-icons/fa";

const NavBar = () => {
    const routes = [
        {
            name : "Home",
            path : "/"
        },{
            name : "About",
            path : "#about-us"
        },{
            name : "Projects",
            path : "#projects"
        },{
            name : "Contact",
            path : "#contact"
        },
    ]
    const [toggle , setToggle] = useState(false)
    const toggleNav = () => {
        setToggle(!toggle)
    }
  return (
    <main className='z-[9999] NavBar flex items-center justify-between absolute pl-[128px] pr-[232px] py-[40px] top-0 right-0 left-0 gap-[10px]'>
        <article data-aos="fade-right" data-aos-duration="2000">
            <img src={logo} alt="" className='min-h-[50px] min-w-[104px] max-h-[60px] max-w-[120px]' />
        </article>
        <nav data-aos="fade-left" data-aos-duration="2000" className='navbarMainNavs flex items-end gap-[20px] '>
            {
                routes.map(route => <a href={route.path} className='navbar-navs p-[10px] border-b-[4px] border-[#8B5CF6] '><p className='text-[20px] font-[500]'>{route.name}</p></a>)
            }
            <button className='bg-[#8B5CF6] h-[44px] min-w-[130px] text-white text-[16px] font-[500] rounded-lg'>Contact Us</button>
            <ModeSwitchers/>
        </nav>
        <nav className={`navbarSecNavs helf-transition ${!toggle ?"right-[-200%]":"right-0"} `}>
            <FaBars className='navbar-toggle text-white cursor-pointer text-[36px]' onClick={toggleNav}/>
            {
                routes.map(route => <a href={route.path} className='navbar-navs p-[10px] text-white border-b-[4px] border-[#8B5CF6] '><p className='text-[20px] font-[500]'>{route.name}</p></a>)
            }
            <button className='bg-[#8B5CF6] h-[44px] min-w-[130px] text-white text-[16px] font-[500] rounded-lg'>Contact Us</button>
            <ModeSwitchers/>
        </nav>
        <FaBars className={`navbar-toggle navbar-toggle-special text-[#262626] cursor-pointer text-[36px] ${toggle?"block":" hidden"}`} onClick={toggleNav}/>
    </main>
  )
}

export default NavBar