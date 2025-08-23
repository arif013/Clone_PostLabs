import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const InvestorAndFooter = () => {
  const ref = useRef(null)

  // Track scroll progress of the wrapper
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // triggers when section enters/leaves viewport
  })

  // Map scroll to a "shutter reveal" effect
  // Starts fully covering footer (100%) -> reveals it (0%)
  const revealHeight = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])

  return (
    <div ref={ref} className="relative">
      {/* Main content */}
      <div>
        <div className='grid grid-cols-4'>
          <div className='col-span-2 py-[140px] pl-[40px] pr-[10px]'>
            <h1 className='text-[116px]'>For Investors</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolorem.</p>
            <p>invest@postlab.com</p>
          </div>
          <div></div>
          <div></div>
        </div>

        <div className='grid grid-cols-4'>
          <div></div>
          <div></div>
          <div className='col-span-2 py-[140px] px-[10px]'>
            <h1 className='text-[116px]'>For Builders</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, debitis.</p>
            <p>careers@postlab.com</p>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="relative">
        {/* Black footer content */}
        <section className='h-[70vh] bg-black text-white grid grid-cols-4 z-0'>
          <img 
            src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/682786273e6c31f3343c6700_postlabs-logo-white.svg" 
            alt="" 
            className='col-span-2 py-[140px] pl-[40px]' 
          />
          <div className='col-span-2 py-[140px] px-[5px]'>
            <p>About</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </section>

        {/* Motion shutter overlay */}
        <motion.div 
          className="absolute inset-0 bg-white z-10" 
          style={{ height: revealHeight, bottom: 0 }}
        />
      </div>
    </div>
  )
}

export default InvestorAndFooter
