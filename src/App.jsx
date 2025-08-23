import React, { useLayoutEffect } from 'react'
import Hero from './components/Hero'
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger, SplitText } from 'gsap/all';
import WordAnimation from './components/WordAnimation';
import { useGSAP } from '@gsap/react';
import Video from './components/Video';
import Building from './components/Building';
import ParallaxVideo from './components/ParallaxVideo';

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);


const App = () => {
    useLayoutEffect(() => {
        ScrollSmoother.create({
            smooth: 1,
        })
    }, [])
    return (
        <div id='smooth-wrapper'>
            <div id='smooth-content'>
                <main id='landing-page'>
                    <Hero />
                    <WordAnimation />
                    <Video />
                    <Building />
                    <ParallaxVideo />
                    {/* <div className="h-[200vh] bg-gray-900 text-white flex items-center justify-center text-4xl">
                        Next Page Content 🚀
                    </div> */}
                </main>
            </div>
        </div>
    )
}

export default App