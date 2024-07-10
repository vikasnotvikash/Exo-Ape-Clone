import { motion } from 'framer-motion'
import { Power4 } from 'gsap/all'
import React from 'react'




const Footer = () => {
    return (
        <div className='w-full h-[100vh] sm:h-[100vh] text-white bg-black mt-20 sm:pt-20 overflow-hidden' style={{ color: "#E0CCBB" }} >
            <div className='w-full h-full'
                data-scroll
                data-scroll-speed="-1">
                <div className='w-[80%] mx-auto h-[60%] sm:ml-[7%] pt-28 sm:border-none sm:py-10' style={{ borderBottomColor: "#E0CCBB" }}>
                    <div className='w-1/2 flex flex-col' >
                        {["Our", "Story"].map((item, index) => {
                            return <h1 className='text-6xl sm:text-[9rem] overflow-hidden' key={index}>
                                <motion.span className='inline-block sm:pb-2.5'
                                initial={{y:"100%", opacity: 0}}
                                whileInView={{y:"0", opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: Power4.easeInOut, duration:1, delay: index*.2}}
                                >
                                    {item}
                                </motion.span>
                            </h1>
                        })}
                    </div>
                    <div className='mt-8'>
                        {["The story behind Exo Ape is one of", "exploration, creativity and curiosity."]
                            .map((item, index) => {
                                return <p key={index} className='text-lg sm:text-2xl opacity-[0.8]'>
                                    {item}
                                </p>
                            })}
                    </div>
                    <div className='mt-5'>
                        <a className='sm:mt-12 block sm:hidden underline' href="#">Our Story</a>
                    </div>
                </div>
                <div className='w-[80%] h-[25%] mx-auto pt-10 sm:pt-10 opacity-[0.8] sm:ml-[7%] sm:mt-[4%] border-t-2 border-orange-100'>
                    <div className='flex gap-28'>
                        <div className='flex flex-col'>
                            {["Work", "studio", "news", "contact"].map((item, index) => {
                                return <a className='text-md sm:text-lg mb-2 capitalize cursor-pointer' key={index}>{item}</a>
                            })}
                        </div>
                        <div>
                            <div className='flex flex-col'>
                                {["behance", "dribble", "twitter", "instagram"].map((item, index) => {
                                    return <a className='text-md sm:text-lg mb-2 capitalize cursor-pointer' key={index}>{item}</a>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer