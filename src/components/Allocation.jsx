import React from 'react'

function Allocation() {
  const QuickList =[
    {percentage: "32%", title: "Improvement in Open Rates"},
    {percentage: "75%", title: "Improvement in Ramp Time"},
    {percentage: "35%", title: "Improvement in Meetings Booked"},
  ]
  return (
    <div style={{background: "url(/assets/background2.svg)"}} className='bg-no-repeat md:bg-left bg-center bg-cover rounded-lg  mx-6 bg-secondary grid md:grid-cols-3 md:min-h-[50vh] lg:min-h-[55vh] min-h-[40vh] lg:px-40 md:px-12 sm:px-6 px-1'>
      
      <div className='md:col-span-2 col-span-1 md:p-8 p-4 space-y-4 md:space-y-8 h-full flex flex-col justify-center'>
        <div className='space-y-4 md:space-y-8'>
          <p className='lg:text-5xl md:text-4xl text-2xl'><span className='text-white'>Allocate effort where your reps make an inpact.</span><br /> <i className='text-neutral'>Let us handle the rest.</i></p>
          <p className='text-white text-opacity-50 sm:w-2/3'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
        </div>
        

        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {QuickList.map((item, index) => (
          <div key={index} className="flex flex-col justify-start items-start space-y-2 ">
            <p className="text-neutral md:text-5xl text-2xl">{item.percentage}</p>
            <p className="text-white ">{item.title}</p>
          </div>
          ))}
        </div>
      </div>
      <div className='md:col-span-1 col-auto'></div>
    </div>
  )
}
export default Allocation;