import { motion } from 'framer-motion'
import { Power4 } from 'gsap/all'
import React, { useState } from 'react'

const Work = () => {

    const [elems, setelems] = useState([
        {
            heading: "Columbia pictures",
            subHeading: "Celebrating a Century of Cinema",
            video: "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
            image: "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
        },
        {
            heading: "Rino & pelle",
            subHeading: "Effortless chic lifestyle",
            video: "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
            image: "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
        },
        {
            heading: "Aebele Interiors",
            subHeading: "Luxurious Design Experience",
            video: "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
            image: "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)"
        },
        {
            heading: "On the Walk",
            subHeading: "Valuable things happen",
            video: "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
            image: "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)"
        }
    ])


    return (
        <div className='w-full relative'>
            <div className='max-w-screen-2xl mx-auto px-5 sm:px-32 py-20'>
                <div className='featured flex gap-2 sm:mx-9'>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                    <h3 className='capitalize cursor-pointer'>Featured projects</h3>
                </div>
                <h1 className='text-6xl my-5 sm:mx-9 sm:text-[15rem] sm:leading-none sm:tracking-tight overflow-hidden'>
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        transition={{ ease: Power4.easeInOut, duration: 0.5 }}
                        viewport={{ once: true }}
                        className='origin-bottom inline-block'>Work</motion.span>
                </h1>
                <p className='font-medium text-zinc-700 leading-2 sm:mx-20 sm:mb-24 overflow-hidden'>
                    <motion.span className='inline-block origin-bottom'
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        transition={{ ease: Power4.easeInOut, duration: 1, delay: .2 }}
                        viewport={{ once: true }}>
                        Highlights of cases that we <br />
                        passionately built with forward-thinking clients and friends over the years.
                    </motion.span>
                </p>
                <div className='elems mt-10 sm:flex sm:gap-8 sm:flex-wrap'>
                    {elems.map((item, index) => {
                        return <div className={`elem w-full mt-10 sm:w-[40%] cursor-pointer ${index % 2 === 0 ? "sm:w-[50%] sm:mt-[0%] sm:px-20" : "sm:w-[40%] sm:mt-[28%]"}`} key={index}>
                            <div className='video w-full h-[104vw] relative overflow-hidden sm:h-[45vw]'>
                                <motion.img
                                    initial={{opacity: 1}}
                                    whileHover={{opacity: 0}}
                                    data-scroll
                                    data-scroll-speed="-.2"
                                    className='hidden sm:absolute z-[2] sm:top-0 sm:left-0 sm:block w-full h-full object-cover' src={item.image} />
                                <video 
                                autoPlay muted loop className='block relative z-[1] scale-[1.3] w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                    src={item.video}></video>
                            </div>
                            <div className='mt-4 sm:flex gap-3'>
                                <h1 className='capitalize font-medium text-zinc-700 overflow-hidden text-center'>
                                    <motion.span className='origin-bottom inline-block'
                                        initial={{ y: "100%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        transition={{ ease: Power4.easeInOut, duration: 1 }}
                                        viewport={{ once: true }}>
                                        {item.heading}
                                    </motion.span>
                                </h1>
                                <p className='text-zinc-500 font-lighter overflow-hidden text-center'>
                                    <motion.span className='origin-bottom inline-block'
                                        initial={{ y: "100%", opacity: 0 }}
                                        whileInView={{ y: "0%", opacity: 1 }}
                                        transition={{ ease: Power4.easeInOut, duration: 1 }}
                                        viewport={{ once: true }}>
                                        {item.subHeading}
                                    </motion.span>
                                </p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Work