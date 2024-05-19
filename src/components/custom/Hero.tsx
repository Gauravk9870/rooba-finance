"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Carousel from '../ui/carousel'

const events = [
    {
        id: "1",
        name: "Event Name 1",
        location: "",
        img: "/events/1.png"
    },
    {
        id: "2",
        name: "Event Name 2",
        location: "",
        img: "/events/3.png"
    },
    {
        id: "3",
        name: "Event Name 3",
        location: "",
        img: "/events/2.png"
    },

    {
        id: "4",
        name: "Event Name 4",
        location: "",
        img: "/events/4.png"
    },
]


const Hero = () => {
    const [type, setType] = useState("event")
    return (
        <div className='w-full h-screen lg:h-full flex flex-col items-start justify-between p-4 relative overflow-hidden '>
            <div className='flex flex-col justify-center items-start gap-20 absolute top-1/2 left-6 transform -translate-y-1/2 z-0'>
                <h3 className=' text-gray-500/50 text-7xl font-black uppercase text-left  tracking-widest'>Astr <br />ix</h3>
                <h4 className='text-gray-500/50 text-7xl font-black uppercase text-left  tracking-widest'>Coll<br />ect<br />ion</h4>
            </div>
            <div className="logo flex items-center justify-start gap-2 z-10">
                <Image src={'/astrix.png'} alt='logo' width={32} height={32} />
                <span className=' text-[#ffca5f] font-bold text-2xl'>Astrix.</span>
            </div>
            <div className=' z-10 w-full'>
                <Carousel items={events} />
            </div>
            <div className=' z-10 bg-[#282b30] text-white  rounded-3xl'>
                <button className={`py-2 px-8 rounded-3xl  transition ease-in-out  ${type === "event" && "bg-[#484e56]"}`} onClick={() => setType("event")}>Events</button>
                <button className={`py-2 px-8 rounded-3xl  transition ease-in-out  ${type === "collection" && "bg-[#484e56]"}`} onClick={() => setType("collection")}>Collections</button>
            </div>
        </div>
    )
}

export default Hero