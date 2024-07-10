import gsap, { Power4, ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const Pictures = () => {
    const first = useRef(null)
    const second = useRef(null)
    const third = useRef(null)
    const fourth = useRef(null)
    const parent = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        var t1 = gsap.timeline({
            scrollTrigger: {
                trigger: parent.current,
                start: "0 90%",
                scrub: 1
            }
        })
        t1
            .to(first.current,
                {
                    x: "40%",
                    ease: Power4,
                }, 'a')
            .to(second.current,
                {
                    x: "-40%",
                    ease: Power4,
                }, 'a')
            .to(third.current,
                {
                    x: "-40%",
                    ease: Power4,
                }, 'a')
            .to(fourth.current,
                {
                    x: "40%",
                    ease: Power4,
                }, 'a')
    })


    return (
        <div ref={parent} className='w-full h-[70vh] sm:h-[110vh] bg-white flex justify-center items-center overflow-hidden sm:mt-36'>
            <div className='w-[40%] h-1/2 relative sm:w-[30%] sm:h-[90%] cursor-pointer'>
                <div ref={first} className='absolute -right-1/3 top-6 w-16 sm:w-40 sm:h-[15rem] h-[6rem]'>
                    <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" />
                </div>
                <div ref={second} className='absolute w-36 sm:w-96 aspect-video -left-1/2 top-1/3'>
                    <video autoPlay loop muted src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
                </div>
                <div ref={third} className='absolute w-[10rem] sm:w-[19rem] sm:h-[12rem] aspect-video -left-[60%] sm:-left-[50%] -bottom-20 sm:-bottom-30'>
                    <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" />
                </div>
                <div ref={fourth} className='absolute w-[8rem] sm:w-[19rem] sm:h-[13rem]  aspect-video left-[80%] top-[80%]'>
                    <video autoPlay loop muted src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
                </div>
                <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" />
            </div>
        </div>
    )
}

export default Pictures