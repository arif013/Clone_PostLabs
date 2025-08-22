import React from 'react'
import HeroWrapper from './HeroWrapper'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import Card from './Card'

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
      <HeroWrapper>
        <nav className='z-1'>
          <div className='flex justify-between items-center py-[20px]'>
            <img src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68227dfdc407523fbe5b56e7_post-labs-logo.svg" className='h-[20px] pl-[40px]' alt="" />
            <p className='w-[30vw] pr-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempora porro tempore molestias natus eius voluptatibus totam rem </p>
          </div>
        </nav>
        <section id='hero' className='h-3/4  p-[40px]'>
          <div className='pt-[140px] flex justify-between items-center'>

            <h1 className='text-[144px] leading-none title'>The Future of <br /> News Starts Here</h1>
            <img src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68238111591ea94a69065212_Vector.svg" className='h-[200px]' alt="" />
          </div>
        </section>
      <section className='pt-[40px]'> 
        <Card/>
      </section>
      </HeroWrapper>

    </>
  )
}

export default Hero