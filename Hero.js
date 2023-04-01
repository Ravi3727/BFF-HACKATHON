import React from 'react'
import Cards from './Cards'
import image1 from './collage.jpeg'
import image2 from './dtu.jpg'
import image3 from './Lakhimpur-Medical-College-1.jpg'
import image4 from './aiims.jpg'

export default function Hero() {
  return (
    <div className='h-full w-full flex flex-col gap-8 mx-auto bg-gradient-to-b from-amber-300 to-yellow-100'>
        <h1 className='text-3xl text-center font-semibold '>MENTORS RANGING FROM</h1>
        <div className='flex gap-5'>
            <Cards image={image1} para="IIT's"/>
            <Cards image={image2} para="DTU"/>
            <Cards image={image4} para="AIIMS DELHI"/>
            <Cards image={image3} para="LAKHIMPUR MEDICAL COLLEGE"/>
        </div>
    </div>
  )
}
