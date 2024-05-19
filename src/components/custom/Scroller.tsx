import React from 'react'

const data = [
  "Event : Oasis Bus four, JLM Statdium, Delhi",
  "Collection Live : Meta Live, Talkatora Stadium, Delhi"
]

const Scroller = () => {
  return (
    <div className=' bg-[#b9a0ff] h-20 lg:h-full overflow-hidden'>
      <ul className='w-full  flex gap-2 items-center  lg:flex-col animate-scrollX lg:animate-scrollY'>
        {data.map((item, idx) => (
          <React.Fragment key={idx}>
            <li className='flex lg:flex-col lg:-space-y-1'>{item.split('').map((char, idx) => (
              <span key={idx} className='lg:rotate-90 text-2xl font-bold'>{char + ' '}</span>
            ))}</li>
            <li className='text-8xl'>*</li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}

export default Scroller