import gsap, { Power4, ScrollTrigger } from 'gsap/all';
import _ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'

const PlayReel = () => {

    const parent = useRef(null);
    const reel = useRef(null);
    const play = useRef(null);
    const videodiv = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        var t1 = gsap.timeline({
            scrollTrigger: {
                trigger: parent.current,
                top: "0",
                scrub: 3,
                pin: true
            }
        })
        t1
        .to(videodiv.current, {
            width: "100%",
            height: "100%",
            ease: Power4
        },'a')
        .to(play.current, {
            x: "-500%",
            opacity:0,
            ease: Power4
        }, 'a')
        .to(reel.current, {
            x: "500%",
            opacity:0,
            ease: Power4
        }, 'a')


})
return (
    <div ref={parent} className='w-full h-screen overflow-hidden mt-20 relative bg-zinc-900'>
        <div ref={videodiv} className='w-40 sm:w-96 aspect-video overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <video autoPlay loop muted className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.2]' src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
        </div>
        <div className='overlay absolute h-full w-full text-white flex flex-col justify-between py-20'>
            <div className='w-full flex items-center justify-center gap-3'>
                <svg data-v-669b4a84="" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3"><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                <h3 className='text-sm'>Work in motion</h3>
            </div>
            <h1 className='w-full flex justify-center items-center gap-24 sm:gap-96'>
                <div ref={play} className='text-6xl sm:text-8xl font-lighter'>Play</div>
                <div ref={reel} className='text-6xl sm:text-8xl font-lighter'>Reel</div>
            </h1>
            <p className={`text-center px-10 text-sm ${1 === 1 ? "sm:w-1/3 sm:mx-auto" : null}`}>
                Our work is best experienced in motion.
                Don’t forget to put on your headphones.
            </p>
        </div>
    </div>
)
}

export default PlayReel