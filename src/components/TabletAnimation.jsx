import React from 'react'
import "../styles/TabletAnimation.css"
import StepsCard from './StepsCard'

const TabletAnimation = () => {
  const steps = [{
    "img_src" : "/step1.png",
    "title" : "Donor Engagement",
    "description" : "Donors initiate the process by either directly contributing to a nonprofit or establishing their own Sustainability Fund, akin to a donor-advised fund, through Better Giving.",
  },{
    "img_src" : "/step2.png",
    "title" : "Customized Allocations",
    "description" : "Donors exercise control by choosing the percentage split between a direct donation to a nonprofit and the allocation to their Sustainability Fund when making contributions.",
  },{
    "img_src" : "/step1.png",
    "title" : "Efficient Donation Processing",
    "description" : "All donations seamlessly flow through the Better Giving platform. Direct donations to nonprofits are swiftly granted every week, ensuring immediate impact. Sustainability Funds are strategically invested for growth and pay out dividends quarterly, fostering continuous support and long-term impact.",
  },{
    "img_src" : "/logo.png",
    "title" : "Results",
    "description" : "Better Giving creates a dynamic and personalized giving experience, allowing donors to make an immediate impact while also fostering the long-term sustainability of nonprofits through thoughtful investment strategies.",
  },
]

  return (
    <div className='hidden md:block lg:hidden tablet_animation relative'>
        <img src="/Vector3.svg" alt="map"/>
       <div class="dot dot1"></div>
       <div className='absolute top-0 h-full flex flex-col justify-between px-[38px]'>
        {
          steps.map((step)=>{
            return <StepsCard step={step} />
          })
        }
        
          {/* <StepsCard />
          <StepsCard />
          <StepsCard />
          <StepsCard /> */}
        
       </div>
    </div>
  )
}

export default TabletAnimation