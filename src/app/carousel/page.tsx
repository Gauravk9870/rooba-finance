import Carousel from '@/components/ui/carousel'
import React from 'react'

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
        img: "/events/2.png"
    },
    {
        id: "3",
        name: "Event Name 3",
        location: "",
        img: "/events/3.png"
    },
    {
        id: "4",
        name: "Event Name 4",
        location: "",
        img: "/events/4.png"
    },
]
const page = () => {
    return (
        <Carousel items={events} />
    )
}

export default page