import React from 'react'

// icons 
import Control from '/assets/magic-wand.svg'
import Scalable from '/assets/graph-duotone.svg'
import Flexible from '/assets/arrows-out-cardinal.svg'

function Features() {
  const FeaturesList =[
    {
      icon: Control,
      title: "You’re in Control",
      Description: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
    },
    {
      icon: Scalable,
      title: "Infinitely Scalable",
      Description: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
    },
    {
      icon: Flexible,
      title: "Incredibly Flexible",
      Description: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
    },
  ]
  return (
    <div className='container-fluid lg:px-40 md:px-24 px-10 grid md:grid-cols-3 grid-cols-1 py-10 md:py-16 gap-6'>
      {
        FeaturesList.map((list, index) =>(
          <div key={index} className='flex md:flex-col flex-row gap-4'>
            <img className='md:w-10 sm:w-12 w-14 md:h-10 sm:h-12 h-14 hover:scale-125 transition-transform' src={list.icon} alt={list.icon} />
            <div className='text-white space-y-2'>
              <h3 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl'>{list.title}</h3>
              <p>{list.Description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Features;