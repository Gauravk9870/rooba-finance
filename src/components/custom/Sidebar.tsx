import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <section className='h-full p-8 flex flex-col gap-6 justify-between'>
      <div className="top">
        <h2 className=' text-base font-bold text-white'>Explore Your First <br /> Event</h2>
      </div>
      <div className="middle flex gap-4 flex-col">
        <h1 className=' text-4xl text-white font-bold'>Event Name</h1>
        <ul className='flex items-center justify-start gap-6'>
          <li className=' flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            <span className=' text-white text-base '>Venu</span>
          </li>
          <li className=' flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>           <span className=' text-white text-base'>04/3/2024 @19:00</span>
          </li>

        </ul>
        <p className=' text-base text-white w-[85%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia in maxime, minus explicabo voluptatem corporis ea assumenda! Maxime, quisquam blanditiis.</p>

        <div className=' flex flex-col gap-6'>
          <h6 className='text-base font-bold text-white'>Artist Lineup</h6>
          <div className=' flex '>
            <div className=' rounded-lg overflow-hidden  w-32 h-32 relative'>
              <Image src={'/artist/1.png'} fill={true} alt='artist' objectFit='cover' />
            </div>
            <div className='rounded-lg overflow-hidden w-32 h-32 relative scale-125 z-10' style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
              <Image src={'/artist/3.png'} fill alt='artist' objectFit='cover' />
            </div>
            <div className=' rounded-lg overflow-hidden  w-32 h-32 relative'>
              <Image src={'/artist/2.png'} fill={true} alt='artist' objectFit='cover' />
            </div>
          </div>
        </div>
      </div>

      <div className=' flex items-end justify-between'>
        <Image src={'/qr.png'} width={60} height={60} alt='qr-code' />

        <button className='bg-[#ffca5f] text-[#15181b] text-base font-bold py-2 px-8 rounded-3xl hover:bg-[#d38d01] transition-all'>Join Waitlist</button>
      </div>
    </section>
  )
}

export default Sidebar