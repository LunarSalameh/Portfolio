import React from 'react'
import Typewriter from "typewriter-effect";


export default function HeroSection () {

    return (
        <div className="w-[85%] mt-16 mx-8 flex flex-col justify-center items-center">


            <div className="flex gap-6 items-center justify-center w-full  ">
                <div className='flex flex-col gap-2  w-full motion-preset-fade motion-delay-[700ms]'>
                    <h1 className='max-md:text-4xl text-6xl font-bold text-light-text dark:text-dark-text'>LUNAR SALAMEH </h1>
                    <div className='max-md:text-xl flex gap-2 w-full text-3xl font-medium text-light-accent dark:text-dark-accent'>
                        <span>I'm A</span>
                        <Typewriter
                            options={{
                                strings: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        /> 
                    </div>
                    <div className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iusto, inventore voluptate esse quisquam impedit doloribus voluptates .
                    </div>
                    <div className='flex w-full h-[15vh] gap-4 justify-center items-center'>
                        <a href='/contactMe' className='w-full h-fit hover:shadow-md dark:hover:shadow-dark-primary hover:shadow-light-secondary  text-center border-2 border-light-secondary font-bold dark:border-dark-accent bg-light-background dark:bg-dark-background rounded-lg py-3 px-6'>
                        <p className='max-md:text-[9px] max-md:hover:text-sm hover:text-lg'>Contact Me</p>
                        </a>
                        <a href='./LunarCV.pdf' target='_blank' className='w-full text-center  hover:shadow-md dark:hover:shadow-dark-primary hover:shadow-light-secondary  h-fit border-2 border-light-secondary font-bold  bg-light-secondary text-light-background  dark:bg-light-primary dark:text-light-text rounded-lg py-3 px-6'>
                        <p className='max-md:text-[9px] max-md:hover:text-sm hover:text-lg'>Download CV</p>
                        </a>
                    </div>
                </div>
                <div className='max-sm:hidden w-1/2 justify-center items-center flex motion-delay-[1000ms] motion-ease-spring-bouncier motion motion-preset-slide-left'>
                    <img src='./lunarPP.png' alt='LunarsPicture' className=' w-[80%] md:w-[70%] rounded-b-full'/>
                </div>  
            </div>
           
            {/* <div className='flex justify-center items-center  bottom-0 motion-preset-focus motion-delay-[700ms] '>
                <p className='max-md:text-6xl text-nowrap overflow-hidden inline-block font-bold marquee animate-marquee text-[150px] text-[#f6e2d9] dark:text-[#382f2c] z-100'>
                    LUNAR SALAMEH</p>
            </div> */}

        </div>
    )
}