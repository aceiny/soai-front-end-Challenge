import React from 'react'
import { CourseCard } from '../../utilitis/CourseCard'

const LandinCourses = () => {
  return (
    <div id='projects' className='flex  items-center flex-wrap justify-center gap-[24px] mb-[128px]'>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
    </div>
  )
}

export default LandinCourses