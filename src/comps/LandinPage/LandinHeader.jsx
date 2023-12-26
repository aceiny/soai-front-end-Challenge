import React from 'react'

const LandinHeader = () => {
  return (
    <div className='LandinHeader h-[100vh] flex items-center justify-center '>
        <div className='LandingHeaderContent flex items-center flex-col  gap-[40px] px-[20px]'>
            <h1 data-aos="zoom-out-right" data-aos-duration="1000" className='LandingHeaderContentTitle text-center text-[70px] font-[700] text-[#262626] '>
            Where the joy of <br/> learn meets the <br/> power of community
            </h1>
            <p data-aos="fade-left" data-aos-duration="1500" className='LandingHeaderContentText text-center text-[24px] text-[#737373] font-[400]'>
            Dive deep in immersive, interactive small groups. Expand horizons, engage in <br/> discussions, and elevate your learning journey with us.
            </p>
            <button data-aos="fade-up" data-aos-duration="600" className='bg-[#8B5CF6] h-[54px] min-w-[130px] px-[14px] text-white text-[16px] font-[500] rounded-xl'>start your free trial</button>
            <p data-aos="fade-up" data-aos-duration="1100" className='lastOne text-[#8B5CF6] text-[20px] font-[500]'>Watch video</p>
        </div>
    </div>
  )
}

export default LandinHeader