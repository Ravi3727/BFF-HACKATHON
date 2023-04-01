import React from 'react'

export default function Becomeamentor() {
  return (
    <>
   <div className='bg-gradient-to-b from-slate-50 to-slate-300 '>

  
    <div className='border-2 text-start flex flex-col w-10/12 mx-auto justify-center items-center h-[100vh] rounded-md bg-gradient-to-b from-slate-400 to-slate-400'>


        <form action="">

            <div className='flex justify-between gap-8 mt-12 '>

            

        {/* names */}
            <div className=''>

            <div className='mt-2 mb-4'>
           <h1 className='text-2xl font-bold underline'>PERSONAL DETAILS</h1>
           </div>

            <div className=''>
            <label htmlFor="Firstname" className='required text-lg font-semibold'>Enter First Name <span className='text-red-500'> *</span></label>
            <br />
            <input placeholder='Sinha' type="text" name='Firstname'className='border-2 border-yellow-400 w-[350px] h-8 rounded-md mt-2 p-2'/>
            </div>

                <br />

            <div className=''>
            <label htmlFor="Lastname" className='required text-lg font-semibold'>Enter Last Name <span className='text-red-500'> *</span></label>
            <br />
            <input placeholder='John' type="text" name='Lastname' className='border-2 border-yellow-400 w-[350px] h-8 rounded-md mt-2 p-2' />
            </div>

            <br />


            <div className='flex flex-col'>

                <div>
                
                <h1 className='required text-lg font-semibold'>Gender <span className='text-red-500'> *</span>
                </h1>
            </div>


                <div className='flex mt-4 gap-3'>

                <div>
                    <button className='border-2 rounded-lg p-2 bg-slate-500'>MALE</button>
                </div>

                <div>
                    <button className='border-2 rounded-lg p-2 bg-slate-500'>FEMALE</button>
                </div>

                <div>
                    <button className='border-2 rounded-lg p-2 bg-slate-500'>OTHER</button>
                </div>

                </div>
                


            </div>



        </div>
<hr />

            {/* mail,ph,dob */}

            <div className='mt-14'>

            
            <div>
            <label htmlFor="email" className='required text-lg font-semibold'>Enter Email Id<span className='text-red-500'> *</span></label>
            <br />
            <input placeholder='abc123@gmail.com' type="email" name='email' className='border-2 border-yellow-400 w-[350px] h-8 rounded-md mt-2 p-2' />
            </div>

                <br />


            <div>
            <label htmlFor="phone" className='required text-lg font-semibold'>Enter Phone No. <span className='text-red-500'> *</span></label>
            <br />
            <input placeholder='1234567890' type="text" name='phone' className='border-2 border-yellow-400 w-[350px] h-8 rounded-md mt-2 p-2' />
            </div>

            <br />

            <div>
            <label htmlFor="dob" className='required text-lg font-semibold'>Enter DOB <span className='text-red-500'> *</span></label>
            <br />
            <input placeholder='DD/MM/YYYY' type="date" name='dob' className='border-2 border-yellow-400 w-[350px] h-8 rounded-md mt-2 p-2' />
            </div>

            </div>

         </div>
            <br />

<hr /><hr /><hr /><hr />
<br />


            {/* college details */}


            <div className='flex gap-16'>

        <div>

           <div className='mt-2 mb-4'>
           <h1 className='text-2xl font-bold underline'>PROFFESIONAL DETAILS</h1>
           </div>

        <div>
            <label htmlFor="clgname" className='required text-lg font-semibold'>Enter Your College Name <span className='text-red-500'> *</span></label>
            <br />
            <input placeholder='Delhi Tecnological University' type="text" name='clgname' className='border-2 border-yellow-400 w-[350px] h-8 rounded-md mt-2 p-2' />
            </div>

            <br />

            <div>
            <label htmlFor="clgyear" className='required text-lg font-semibold'>Current College Year <span className='text-red-500'> *</span></label>
            <br />
            <input placeholder='1,2,3,4' type="number" name='clgname' className='border-2 border-yellow-400 w-[350px] h-8 rounded-md mt-2 p-2' />
            </div>

            <br />

            <div>
                
            <label htmlFor="clgyear" className='required text-lg font-semibold'>Linked Profile Link <span className='text-red-500'> *</span></label>
            <br />
            <input placeholder='https://www.linkedin.com/in/ravi-kant-73b132203/' type="number" name='clgname' className='border-2 border-yellow-400 w-[350px] h-8 rounded-md mt-2 p-2' />

            </div>

        </div>


           <div className='mt-12'>

                
            <div>
            <label htmlFor="photo" className='required text-lg font-semibold'>Upload Your Photo<span className='text-red-500'> *</span></label>
            <br />
            <input  type="file" name='photo' className='border-2 border-yellow-400 w-[350px] h-12 rounded-md mt-2 p-2' />
            </div>

            <br />

            <div>
            <label htmlFor="clgid" className='required text-lg font-semibold'>Upload Your College ID<span className='text-red-500'> *</span></label>
            <br />
            <input type="file" name='clgid' className='border-2 border-yellow-400 w-[350px] h-12 rounded-md mt-2 p-2' />
            </div>


                    
            </div>

            
            </div>
           
            
        </form>
    </div>

    </div>

    </>
  )
}
