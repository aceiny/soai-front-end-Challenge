import React from 'react'
import man1 from '../../assets/man1.svg'
import man2 from '../../assets/man2.svg'
import man3 from '../../assets/man3.svg'
import man4 from '../../assets/man4.svg'
import women5 from '../../assets/women5.svg' 
const Circles = () => {
    const screenWidth = window.innerWidth *0.9
    console.log(screenWidth)
  return (
    <div className='RotatingCircles w-screen absolute top-[-430px] flex justify-center'>
        <div className=' border-[1px] rounded-[100%] flex justify-center items-center ' style={{height:screenWidth , width:screenWidth}}>
            <img src={women5} alt="" />
            <div className='border-[1px] rounded-[100%] flex justify-center items-center w-[75%] h-[75%]' >
                <div className='border-[1px] rounded-[100%] flex justify-center items-center w-[70%] h-[70%]'></div>
            </div>
        </div>
    </div>
  )
}

export default Circles