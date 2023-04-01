import React from 'react'
// import {call} from './call.jpg'

export default function Footer() {
  return (
    <>

    <div className='flex justify-between w-10/12 mx-auto'>

        <div>
            LOGO
        </div>

        <div className='w-[190px] text-start'>
            <h3 className='text-xl font-bold mt-4'> Contact Us</h3>
            <ul className='text-yellow-500 font-semibold text-sm mt-2'>

                <div className='flex gap-1 -ml-8'>
                <span><img src="https://t3.ftcdn.net/jpg/05/37/14/18/360_F_537141803_8DtJhLnj3GND9BBLWXdzMLjDOoF3DhX7.jpg" alt="" width={30} /></span>

                <li> <a href="#">1234567890</a></li>

                </div>


               <div className='flex -ml-8'>
                    
                
                <span><img src="https://www.shutterstock.com/image-vector/map-pointer-yellow-pin-icon-260nw-1658545420.jpg" alt="" width={100} /></span>

               <li><a href="#">Delhi Technological University, Shahbad Daulatpur, Main Bawana Road</a></li>
               
               </div>
                
            </ul>
        </div>

        <div className='w-[200px]'>
                <h1 className='text-xl font-bold mt-4'>Follow Us</h1>

                <div className='flex gap-2 mt-3'>


                    <div>
                    <img src="https://e7.pngegg.com/pngimages/904/880/png-clipart-instagram-logo-screenshot-white-wine-logo-computer-icons-instagram-black-label-photography-thumbnail.png" alt="" width={50}/>
                   </div>
                    <div>
                   <img src="data:image/png;base64,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" alt="" width={50}/>
                   </div>
                    <div>
                   <img src="https://p.kindpng.com/picc/s/766-7665984_twitter-black-twitter-logo-png-transparent-png.png" alt="" width={50}/>
                   </div>
                    <div>
                   <img src="https://www.pngitem.com/pimgs/m/183-1839634_linkedin-png-icon-linkedin-icon-black-circle-transparent.png" alt="" width={50}/>
                   </div>

                </div>

              </div>

    </div>

{/* Blue Footer */}
    <div className='bg-violet-900 flex justify-between w-full h-16 items-center text-white font-semibold mt-4'>

        <div className='ml-8'>
            <h1>EDUCATLY</h1>
        </div>

        <div>
            <h1>Copyright 2023 EDUCATLY Inc. All rights reserved</h1>
        </div>

        <div className='mr-8'>
            <h1>Terms/Privacy Policy</h1> 
        </div>
    </div>

    </>
  )
}
