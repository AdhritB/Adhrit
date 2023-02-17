'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';
export const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <div className='w-[300px] lg: w-full flex flex-col justify-center items-center'>
                        <h1 className="lg:text-5xl text-primary font-bold tracking-widest text-white">Get Your Own AI-Generated<br />
                            <Typewriter
                                options={{
                                    strings: ['Image', 'Blog', 'LinkedIn Post'],
                                    autoStart: true,
                                    loop: true,
                                }} />
                        </h1>
                    </div><br />
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}
