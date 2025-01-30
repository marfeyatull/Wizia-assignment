import React from 'react'
import { Button } from '@mui/material';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

function GetStarted() {
  return (
    <div className='contain-fluid py-12 lg:px-40 md:px-24 px-10 text-center space-y-6'>
      <p className='text-[#14BCB2] uppercase font-bold'>Get Started</p>
      <p className='text-white text-2xl lg:text-5xl md:text-3xl'><i>Embrace</i> <span className='font-bold'>the new era of</span> <i>outbound</i></p>
      <p className='md:w-2/3 w-full mx-auto text-white text-opacity-45'>Wizia lets you train, activate and optimize aiDRs. Take your outbound to new levels of performance and efficiency. </p>
      <Button variant="contained" className="text-nowrap rounded-full shadow-md shadow-neutral"
        sx={{
          border: 'transparent',
          textTransform: 'none',
          backgroundColor: '#0FF1F6',
          color: 'black',
          '&:hover': {
            color: 'white',
            backgroundColor: 'transparent',
            border:'1px solid #0FF1F6',
            transform: 'scale(1.05)',
          },
        }}>Sign Up for the Beta <ArrowOutwardOutlinedIcon/>
      </Button>
    </div>
  )
}

export default GetStarted;