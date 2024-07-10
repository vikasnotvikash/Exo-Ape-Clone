import { motion } from 'framer-motion';
import { Power4 } from 'gsap/all';
import React from 'react'

const Landing = () => {
    return (
        <div className='w-full h-[150vh] sm:h-[300vh] relative'>
            <div className='w-full h-full picture overflow-hidden'>
                <img 
                data-scroll
                data-scroll-speed="-1"
                className='w-full h-full object-cover object-top' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" />
            </div>
            <div className='w-full absolute top-0'>
                <div className='max-w-screen-xl mx-auto px-5 sm:px-10 h-full text-white'>
                    <div className='para mt-72 sm:mt-[22rem]'>
                        {["Global digital design studio partnering with", "brands and businesses that create exceptional",
                            "experiences where people live, work, and unwind."
                        ].map((item, index) => {
                            return <p key={index} className='masker text-md sm:text-2xl overflow-hidden'>
                                <motion.span
                                    className='elem inline-block origin-left'
                                    initial={{ rotate: 9, y: "100%", opacity: 0 }}
                                    animate={{ rotate: 0, y: "0", opacity: 1 }}
                                    transition={{ ease: Power4.easeInOut, duration: 1.2, delay:index *.5 }}>
                                    {item}
                                </motion.span>
                            </p>
                        })}
                    </div>
                    <div className='headings mt-12 sm:mt-20'>
                        {["Digital", "Design", "Experience"].map((item,index)=> {
                            return <motion.h1 
                            key={index}
                            initial={{ rotate: 9, y:"100%" , opacity:0 }}
                            animate={{ rotate: 0, y:"0%" , opacity:1 }}
                            transition={{ease:Power4.easeInOut, duration: 1, delay: 2+index* .5}}
                            className='text-6xl tracking-tighter sm:leading-[16rem] leading-none sm:text-[17rem] font-lighter'>{item}</motion.h1>
                        })}
                    </div>
                    <div className='para2 sm:mt-36 mt-12 sm:w-[36vw]'>
                        <p className='sm:text-2xl'>We help experience-driven companies thrive
                            by making their audience feel the refined
                            intricacies of theirbrand and product in the
                            digital space.Unforgettable journeys start
                            with a click.
                        </p>
                        <a href="#" className='border-b-[.3px] sm:border-b-[1px] border-zinc-100 pb-[0.5px] mt-10 inline-block font-medium sm:mt-24'>The Studio</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;