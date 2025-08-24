import { useGSAP } from '@gsap/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import React, { useRef } from 'react'

const InvestorAndFooter = () => {
  const ref = useRef(null)

  useGSAP(()=>{
    gsap.utils.toArray(".animate-words").forEach(el=>{
      const wordSplit = new SplitText(el, {type: "words, lines"})
            
            gsap.from(wordSplit.words, {
                opacity: 0,
                duration: 1.5,
                ease: "expo.in",
                stagger: 0.06,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "bottom top",
                    // scrub: true
                    toggleActions: "play none none none"
                }
            })
    })
  },[])

  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"] 
  })

  
  const revealHeight = useTransform(
    scrollYProgress,
    [0, 1],         
    ["100%",  "0%"] 
  )
  
  

  return (
    <div ref={ref} className="relative">
      <div>
        <div className='lg:grid grid-cols-4'>
          <div className='lg:col-span-2 pt-[140px] lg:pt-[140] pb-[70px] lg:pb-[140px] pl-[10px] lg:pl-[40px] pr-[10px]'>
            <h1 className='text-[50px] lg:text-[116px] leading-none animate-words'>For Investors</h1>
            <p className='animate-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolorem.</p>
            <p className='animate-words'>invest@postlab.com</p>
          </div>
          <div></div>
          <div></div>
        </div>

        <div className='lg:grid lg:grid-cols-4'>
          <div></div>
          <div></div>
          <div className='lg:col-span-2 py-[140px] px-[10px]'>
            <h1 className='text-[50px] lg:text-[116px] leading-none animate-words'>For Builders</h1>
            <p className='animate-words'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, debitis.</p>
            <p className='animate-words'>careers@postlab.com</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <section className='sticky h-[80vh] bg-black text-white lg:grid lg:grid-cols-4 z-0'>
          <img 
            src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/682786273e6c31f3343c6700_postlabs-logo-white.svg" 
            alt="" 
            className='col-span-2 pt-[50px] lg:pt-[240px] pl-[20px] lg:pl-[40px]' 
          />
          <div className='col-span-2 pt-[50px] lg:pt-[240px] px-[20px] lg:px-[5px]'>
            <p>About</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </section>
        <div className='flex flex-col text-gray-400 lg:flex-row justify-between bg-black  border-top-[1px] text-white px-[10px] lg:px-[40px]'>
          <p>copyright Post Labs, Inc. All rights reserved</p>
          <p>Designed by Arif</p>
        </div>

        <motion.div 
          className="absolute inset-0 bg-white z-10" 
          style={{ height: revealHeight, bottom: 0 }}
        />
      </div>
    </div>
  )
}

export default InvestorAndFooter
