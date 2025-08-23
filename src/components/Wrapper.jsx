import React from 'react'
import { useState } from 'react';

const HeroWrapper = ({ children }) => {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    return (
        // <div>
        <div
            onMouseMove={handleMouseMove}
            className="relative w-full h-4/5 overflow-hidden"
        >


            {/* Vertical lines (3 equally spaced) */}


            {/* spotlight gradient */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: `radial-gradient(circle 50vw at ${pos.x}px ${pos.y}px, rgba(255, 229, 0, 0.51), transparent 80%)`,
                }}
            />
            {children}
        </div>
    )
}


const LineWrapper = () => {
    const width = window.innerWidth
    return (
        <>
            {
                width > 1000 ? (
                    <div className="absolute top-[80px] left-0 w-full h-px bg-gray-400 z-0" />
                ) : ""
            }
            <div className="absolute top-0 left-1/4 h-full w-px bg-gray-300 z-0" />
            <div className="absolute top-0 left-1/2 h-full w-px bg-gray-300 z-0" />
            <div className="absolute top-0 left-3/4 h-full w-px bg-gray-300 z-0" />
            
            {/* <div className='z-1'>
                {children}

            </div> */}
        </>
    )
}
export { HeroWrapper, LineWrapper }