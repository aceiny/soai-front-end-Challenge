import React from 'react'
import logo from '../assets/LOGO.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
const Footer = () => {
    const data = 
    [
        {
            name : "Products",
            data : [
                {
                    name : "Courses",
                    path : "#"
                },{
                    name : "Development",
                    path : "#"
                }
            ]
        },
        {
            name : "Resources" , 
            data : [
                {
                    name : "Careers",
                    path : "#"
                },{
                    name : "Blog",
                    path : "#"
                },
            ]
        },
        {
            name : "Company",
            data : [
                {
                    name : "QA",
                    path : "#"
                },{
                    name : "Terms and Conditions",
                    path : "#"
                },{
                    name : "Privacy Policy",
                    path : "#"
                }
            ]
        }
    ]
    const socialMedia = [
        {
            name : "instagram",
            path : "#",
            icon : instagram
        },{
            name : "linkedin",
            path : "#",
            icon : linkedin
        }
    ]
  return (
   <div id='contact' className='Footer px-[95px] mb-[30px] '>
        <div className='px-[150px] gap-[20px] flex justify-between py-[100px] '>
            <div data-aos="fade-right" data-aos-duration="2000" className='flex flex-col gap-[60px]'>
                <img src={logo} alt="" className='min-h-[50px] min-w-[104px] max-h-[60px] max-h-[120px]' />
                <article className='flex items-center gap-[12px]'>
                    {
                        socialMedia.map(item => <a href={item.path}><img src={item.icon} alt="" /></a> )
                    }
                </article>
            </div>
            <div className='footer-right flex items-start gap-[120px]'>
                {
                    data.map(item => (
                        <div  className='flex flex-col gap-[50px]'>
                            <h1 data-aos="fade-up" data-aos-duration="2000" className='text-[28px] font-[600] text-[#171717] '>{item.name}</h1>
                            <div data-aos="fade-up" data-aos-duration="2500" className='flex flex-col gap-[30px]'>
                                {
                                    item.data.map(data => <a href={data.path} className='text-[24px] text-[#171717] font-[400] '>{data.name}</a>)
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
   </div>
  )
}

export default Footer