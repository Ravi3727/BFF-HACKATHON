import React from 'react'

export default function Cards(props) {
  return (
    <div className='flex w-[350px] h-[600px]  rounded-xl flex-col mx-auto items-center absolutes'>
        <div>
            <img src={props.image}  className="rounded-xl  w-full border-2 gap-3 flex" style={{ width: 320, height: 450 }} alt=""/>
        </div>

        <div className='bg-gradient-to-b from-amber-400 to-amber-900 w-[320px] h-[50px] -mt-2 rounded-md'>
        <p className='font-bold text-xl mt-3 '>{props.para}</p>
        </div>
    </div>
  )
}
