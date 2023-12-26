import React from 'react'
const AboutUsCard = ({image , title = "title" , description = "context"}) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className='AboutUsCard flex gap-[192px] items-center'>
        <img src={image} alt="" />
        <article className=''>
            <h1 className='text-[48px] font-[600] text-[#171717] '>{title}</h1>
            <p className='text-[30px] text-[#737373] font-[400] '>{description}</p>
        </article>
    </div>
  )
}

export default AboutUsCard