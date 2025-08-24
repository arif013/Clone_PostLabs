import React from 'react'
import { HeroWrapper, LineWrapper } from './Wrapper'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import Card from './Card'
import '../index.css'

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText('.title', {
      type: "words, lines"
    })

    gsap.from(heroSplit.words, {
      opacity: 0,
      yPercent: 50,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.06,
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
  }, [])
  return (
    <>
      {/* <LineWrapper> */}
      
      <HeroWrapper>
        
        <nav className='z-1'>
          <div className='flex gap-[50px] justify-between items-center py-[20px]'>
            <img src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68227dfdc407523fbe5b56e7_post-labs-logo.svg" className='h-[20px] pl-[5px] lg:pl-[40px]' alt="" />
            <p className='w-full lg:w-[30vw] pr-[5px] lg:pr-[40px] leading-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempora porro tempore molestias natus eius voluptatibus totam rem </p>
          </div>
        </nav>
        <section id='hero' className='h-3/4 px-[30px] lg:p-[40px]'>
          <div className='pt-[140px] flex flex-col lg:flex-row justify-between items-start lg:items-center'>

            <h1 className='text-[60px] lg:text-[144px] leading-none title'>The Future of <br /> News Starts Here</h1>
            <img src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68238111591ea94a69065212_Vector.svg" className='pt-[20px] h-[60px] lg:h-[180px] animate-float' alt="" />
          </div>
        </section>
        <section className='pt-[40px]'>
          <Card />
        </section>
      </HeroWrapper>
      {/* <LineWrapper /> */}
      {/* </LineWrapper> */}
      

    </>
  )
}

export default Hero