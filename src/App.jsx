import React, { useEffect, useLayoutEffect } from 'react'
import Hero from './components/Hero'
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger, SplitText } from 'gsap/all';
import WordAnimation from './components/WordAnimation';
import Video from './components/Video';
import Building from './components/Building';
import ParallaxVideo from './components/ParallaxVideo';
import InvestorAndFooter from './components/InvestorAndFooter';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);


const App = () => {
    useEffect(()=>{
        const lenis = new Lenis()
        function raf(time){
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    },[])
    
    return (
        
                <main id='landing-page '>
                    <Hero />
                    <WordAnimation />
                    <Video />
                    <Building />
                    <ParallaxVideo />
                    <InvestorAndFooter />
                </main>
    
    )
}

export default App