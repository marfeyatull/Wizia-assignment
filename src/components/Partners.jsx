import React from 'react'
import { Box } from '@mui/material'

// Partners Logo
import BackHub from '/assets/BackHub-logo.svg'
import CableLabs from '/assets/CableLabs-logo.svg'
import DBS from '/assets/DBS-logo.svg'
import EasyEuro from '/assets/EasyEuro-logo.svg'
import AMD from '/assets/AMD-logo.svg'

function Partners() {

  const PartnersLogo =[BackHub, CableLabs, DBS, EasyEuro, AMD]

  return (
    <Box>
      <div className='container-fluid flex flex-col justify-center items-center text-center px-4 py-6 bg-secondary space-y-2'>
        <p className='text-neutral font-medium'>Our Trusted Partners</p>
        <div className='flex flex-wrap justify-center items-center md:gap-12 sm:gap-8 lg:gap-20 xl:gap-32'>
          {
            PartnersLogo.map((logos)=>(
              <img className='md:w-28 sm:w-24 w-20 transition-transform duration-300 hover:scale-125' src={logos} alt={logos} />
            ))
            
            
          }
        </div>
      </div>
    </Box>
  )
}

export default Partners;