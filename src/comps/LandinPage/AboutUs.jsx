import React from 'react'
import AboutUsCard from './AboutUsCard'
import aboutus1 from '../../assets/aboutus1.svg'
import aboutus2 from '../../assets/aboutus2.svg'
import aboutus3 from '../../assets/aboutus3.svg'
const AboutUs = () => {
  const data = [
    {
      title : "Explore topics",
      description : "Dive deep into our diverse catalog featuring a curated selection of courses in the realms of arts and writing. Experience knowledge crafted by experts, designed to inspire and nurture your creative journey.",
      image : aboutus1
    },{
      title : "Meet new Friends",
      description : "Connect with our expansive network, match with like-minded peers, and learn code together",
      image : aboutus2
    },{
      title : "Find",
      description : "Connect with people around the world in a huge community with million of students",
      image : aboutus3
    }
  ]
  return (
    <div id='about-us' className='  px-[95px]'>
          <div className='bg-[#f5f5f5] px-[120px] py-[160px] flex flex-col gap-[150px]'>
            {
              data.map( item => <AboutUsCard key={item.description} image={item.image} title={item.title} description={item.description}/>)
              
            }
          </div>
    </div>
  )
}

export default AboutUs