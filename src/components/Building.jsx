import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import React from 'react'


const Building = () => {
    useGSAP(() => {
        gsap.utils.toArray(".animate-text").forEach(el => {
            const wordSplit = new SplitText(el, { type: "words, lines" })

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
            <div className='animate-text text-[60px] lg:text-[144px] px-[40px] py-[100px] leading-none '>What We're <br /> Building</div>
            <div className=' lg:grid lg:grid-cols-4 items-start lg:items-center px-[20px] py-[100px] lg:py-[220px]'>
                <div></div>

                <p className={`animate-text col-span-2 text-[25px] lg:text-[36px]`}> Post Labs is building a homegrown platform designed for Canadians and the future of Canadian media.

                </p>
                <div></div>
            </div>
            <div className='lg:grid lg:grid-cols-4 items-start lg:items-center py-[104px] lg:py-[220px]'>
                <div></div>
                <div></div>
                <p className={` animate-text col-span-2 text-[25px] lg:text-[36px] px-[20px]`}> At its core is PostOS, our made-in-Canada publishing engine that connects local voices, communities, and trusted journalism in one seamless digital experience.

                </p>

            </div>
            <div className='lg:grid lg:grid-cols-4 items-start lg:items-center px-[20px] py-[100px] lg:py-[220px]'>
                <div></div>

                <p className={` animate-text col-span-2 text-[25px] lg:text-[36px]`}> Built by Canadians, for Canadians, PostOS is more than just technology — it’s a way to bring our stories home.

                </p>
                <div></div>
            </div>
            <div>

            </div>
        </section>
    )
}

export default Building