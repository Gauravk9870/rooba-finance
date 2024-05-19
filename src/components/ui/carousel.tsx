"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';



const CarouselItem = ({ index, position, children }) => {
  const offset = index + 1;
  const r = position - offset;
  const abs = Math.max(r * -1, r);

  const itemStyle = {
    transform: `rotateY(${-1 * r}deg) translateX(${-330 * r}px)`,
    zIndex: position - abs,
  };

  return <div className="item w-72 h-96 absolute transition-transform duration-500 ease-out flex items-center justify-center" style={itemStyle}>{children}</div>;
};


const Carousel = ({ items }) => {
  const [position, setPosition] = useState(1);
  const totalItems = items.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition % totalItems) + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <section className='' >
      <main className=' w-full h-full flex items-center justify-center overflow-hidden  transform-preserve-3d perspective-[600px] pointer-events-none '>
        {items.map((item, index) => (
          <CarouselItem key={index} index={index} position={position}>
            <div className=' relative w-full h-full'>
              <Image src={item.img} fill={true} alt={item.name} className=' absolute inset-0 object-cover' />
            </div>
          </CarouselItem>
        ))}
      </main>
    </section>
  );
};
export default Carousel;