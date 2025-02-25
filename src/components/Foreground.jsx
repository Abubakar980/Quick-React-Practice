import React, { useRef } from 'react'
import Cards from './Cards'


const Foreground = () => {

    const ref = useRef(null)
    const data = [
        {
            desc: "This is the background color that is displayed.",
            filesize: ".8mb",
            close: false,
            tag:{isOpen: true, tagTitle: "Hello There", tagColor: "blue"}
        },
        {
            desc: "This is the background color that is displayed.",
            filesize: ".8mb",
            close: false,
            tag:{isOpen: false, tagTitle: "Download Now", tagColor: "green"}
        },
        {
            desc: "This is the background color that is displayed.",
            filesize: ".8mb",
            close: false,
            tag:{isOpen: true, tagTitle: "Download Now", tagColor: "green"}
        },
        {
            desc: "This is the background color that is displayed.",
            filesize: ".8mb",
            close: false,
            tag:{isOpen: true, tagTitle: "Download Now", tagColor: "green"}
        },
        {
            desc: "This is the background color that is displayed.",
            filesize: ".8mb",
            close: false,
            tag:{isOpen: true, tagTitle: "Download Now", tagColor: "green"}
        },
    ]
  return (
    <>
    <div ref={ref} className='p-5 fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap'>
        {data.map((item, index)=>(
            <Cards data={item} reference={ref}/>
        ))}
    </div>
    </>
  )
}

export default Foreground