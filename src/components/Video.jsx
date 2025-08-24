import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap/all'
import {ScrollTrigger } from 'gsap/ScrollTrigger'

const Video = () => {
    const isMobile = window.innerWidth < 900
    useGSAP(()=>{
        gsap.fromTo("video",
            { 
                width: isMobile? "120vw" : "40vw",
                borderRadius: "30px",
                // height: isMobile? "50vh" : 'auto'
            },
            {
            width: isMobile ? "200vw" : "100vw",
            borderRadius: "0px",
            // height: isMobile ? "100vh" : "auto",
            ease: "power2.out",
            delay: 2,
            scrollTrigger: {
                trigger: "#video",
                start: "top 80%",
                end: "top 40%",
                scrub: true
            }
        })
    },[])
  return (
    <section id='video'>
        <video src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F682e229ec192a9f049ae0b4a_post-labs-video-1-transcode.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
        className='w-full flex items-center mx-auto'/>
    </section>
  )
}

export default Video