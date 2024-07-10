import { motion } from 'framer-motion'
import { Power4 } from 'gsap/all'
import React from 'react'

const Spread = () => {
    return (
        <div className='w-full bg-white'>
            <div className='max-w-screen-2xl h-96 sm:h-[110vh] mx-auto px-5 sm:px-10 py-20'>
                <div className='w-full flex items-center justify-center gap-3'>
                    <svg data-v-669b4a84="" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer"><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                    <h3 className='text-sm cursor-pointer'>In the media</h3>
                </div>
                <div className='heading mt-10 text-center'>
                    {["Spread", "the news"].map((item, index) => {
                        return <h1 key={index} className='text-5xl tracking-tighter sm:text-9xl sm:tracking-normal overflow-hidden'>
                            <motion.span className='inline-block'
                                initial={{ y: "100%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                transition={{ ease: Power4.easeInOut, duration: 1 }}
                                viewport={{ once: true }}>
                                {item}
                            </motion.span>
                        </h1>
                    })}
                </div>
                <div className='flex flex-col justify-between w-full h-[10rem] items-center'>
                    <p className='text-center mt-8 text-lg sm:text-2xl sm:mt-20'>Find out more about our work <br /> on these leading design and <br /> technology platforms.</p>
                    <a className='border-b-[1px] border-zinc-400 pb-1c sm:mt-12' href="#">Browse all news</a>
                </div>
            </div>
        </div>
    )
}

export default Spread