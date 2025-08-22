import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const data = [
    {
        img: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239a34145625a862ba3d54_icon-1.svg",
        title: "Empowering Creators",
        class: 'left'
    },
    {
        img:"https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ac5ddc2008b2da9b7_icon-2.svg",
        title:"Transforming Publishing", 
        class: 'middle'
    },
    {
        img: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ab5708009ef8f649e_icon-3.svg",
        title: "Reclaiming Canadian Media",
        class: 'right'
    }
    
    

]

const Card = () => {

    useGSAP(()=>{
        gsap.from('.left', {
            x: 420,
            // repeat: -1,
            rotation: -3,
            yoyo: true,
            ease: 'power1.inOut',
            duration: .4,
            scrollTrigger: {
                trigger: "#cards",
                start: "80% bottom", // when 80% of the viewport hits cards
                toggleActions: "play none none reverse", 
              },
        })
        gsap.from('.right', {
            x: -420,
            // repeat: -1,
            rotation: 3,
            yoyo: true,
            ease: 'power1.inOut',
            duration: .5,
            scrollTrigger: {
                trigger: "#cards",
                start: "80% bottom",
                toggleActions: "play none none reverse",
              },
        })
        gsap.from('.middle', {
            x: 0,
        })

    },[])
  return (
    <div id='cards' className='flex justify-between gap-[44px] z-10 px-[40px]'>
        {data.map((item, index)=>{
            return<>
            <div key={index} className={`flex flex-col h-[30vw]  p-[40px] bg-black justify-between rounded-[40px] ${item.class}`}>
                <img src={item.img} alt="" className='w-[74px]'/>
                <h1 className='text-white text-[36px]'>{item.title}</h1>
            </div>
            
            </>

        })}

    </div>
  )
}

export default Card