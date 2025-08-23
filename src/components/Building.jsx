import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import React from 'react'


const Building = () => {
    useGSAP(()=>{
        gsap.utils.toArray(".animate-text").forEach(el=>{
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
    }, [])
    return (
        <section>
            <div  className='animate-text text-[144px] px-[40px] py-[100px] leading-none '>What We're <br /> Building</div>
                <div className='grid grid-cols-4 items-center py-[220px]'>
                    <div></div>
                    
                        <p  className={`animate-text col-span-2 text-[36px]`}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, magni laboriosam? </p>
                        <div></div>
                </div>
                <div className='grid grid-cols-4 items-center py-[220px]'>
                    <div></div>
                    <div></div>
                        <p  className={` animate-text col-span-2 text-[36px]`}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, magni laboriosam? </p>
                        
                </div>
                <div className='grid grid-cols-4 items-center py-[220px]'>
                    <div></div>
                    
                        <p  className={` animate-text col-span-2 text-[36px]`}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, magni laboriosam? </p>
                        <div></div>
                </div>
            <div>

            </div>
        </section>
    )
}

export default Building