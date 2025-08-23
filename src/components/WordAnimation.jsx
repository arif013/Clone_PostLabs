import React from 'react'
import { LineWrapper } from './Wrapper'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const WordAnimation = () => {
    useGSAP(() => {
        const charSplit = new SplitText('.char-split', {
            type: "chars, words"
        })

        gsap.set(charSplit.chars, { opacity: 0.2 });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".char-split",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true
            }
        }).to(charSplit.chars, {
            opacity: 1,
            stagger: 0.05,
            ease: "none",
        })
    })
    return (
        // <LineWrapper>
        <>
        <LineWrapper/>
            <section id='word-animation' className='px-[40px] py-[120px] lg:py-[400px] '>
                <p className='px-[10px] lg:px-[303px] text-[30px] lg:text-[52px] text-center char-split leading-none '>Post Labs is rethinking how digital media works for Canadians. Our mission is simple: make journalism profitable, sustainable, and trusted – built for Canadians, by Canadians.</p>
            </section>
        
        </>
        // </LineWrapper>
    )
}

export default WordAnimation