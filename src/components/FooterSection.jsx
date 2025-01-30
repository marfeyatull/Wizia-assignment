import React from 'react'

function FooterSection() {
  return (
    <div className='bg-secondary flex md:flex-row flex-col  flex-wrap md:justify-between items-center py-4 px-8 gap-4'>
      <img src="Logo1.svg" alt="" />
      <p className='text-white text-center'>Copyright © {new Date().getFullYear()} Wizia. All rights reserved.</p>
    </div>
  )
}

export default FooterSection;