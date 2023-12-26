import React from 'react'
import image from '../assets/courseImage.svg'
import { CgSandClock } from "react-icons/cg";
export const CourseCard = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className='CourseCard z-50 bg-white w-[350px] p-4 flex flex-col gap-[24px] shadow-lg rounded-2xl border border-[#E5E5E5] '>
        <img src={image} alt="" className=' rounded-2xl h-[200px] object-cover ' />
        <article className='flex flex-col'>
            <h1 className='CourseCardTitle text-[24px] font-[600] text-[#171717] mb-[8px] '>Frontend Development with JavaScript</h1>
            <p className='CourseCardBy text-[14px] font-[400] text-[#737373] mb-[20px] '>by yacine zeraibi</p>
            <div className='CourseCardDur flex gap-[5px] items-center mb-[24px] '>
                <CgSandClock className='icon text-[24px] text-[#737373]'/>
                <p className='text-[14px] font-[500] text-[#171717] '>Duration : <span className='font-[400]'>7 weeks</span></p>
            </div>
            <div className='CourseCardDis mb-[8px] text-[14px] font-[400] text-[#737373] flex items-center gap-[5px] '>
                <p>80$</p>
                <p>80% discount</p>
            </div>
            <button className='bg-[#8B5CF6] h-[44px] min-w-[130px] text-white text-[16px] font-[500] rounded-lg'>Buy Now $14,00 USD</button>
        </article>
    </div>
  )
}
