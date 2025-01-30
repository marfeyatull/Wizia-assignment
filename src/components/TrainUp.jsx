import React from 'react'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function TrainUp() {
  const QuickList =[
    "Quick to ramp",
    "Easy to optimize",
    "Quick to scale up",
    "Works with all your existing tools"
  ]
  return (
    <div style={{background: "url(/assets/background1.svg)"}} className='bg-no-repeat md:bg-left bg-center bg-cover rounded-lg  mx-6 bg-secondary grid md:grid-cols-3 md:min-h-[50vh] lg:min-h-[55vh] min-h-[40vh]'>
      <div className='md:col-span-1 col-auto'></div>
      <div className='md:col-span-2 col-span-1 md:p-4 p-10 space-y-4 md:space-y-8 h-full flex flex-col justify-center'>
        <div className='space-y-4 md:space-y-8'>
          <p className='lg:text-5xl md:text-4xl text-2xl'><span className='text-white'>Train your aiDR on your... </span><br /> <i className='text-neutral'>prefered email st|</i></p>
          <p className='text-white text-opacity-50 sm:w-2/3'>You’re in control. Train your aiDR on elements of your Marketing strategy.</p>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {QuickList.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircleOutlineOutlinedIcon className="text-neutral" />
            <p className="text-[#14BCB2]">{item}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrainUp;