import React from 'react'
import Hero from './components/Hero'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <main>
        <Hero/>
    </main>
  )
}

export default App