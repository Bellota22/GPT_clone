import React from 'react'
import { useState } from 'react'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import logo from '../../../public/vecteezy_chatgpt-logo-chat-gpt-icon-on-white-background_21059827.jpg'

function Header() {
  return (
    <>
        <div className='p-6 mt-2 w-full h-10 flex justify-between items-center ' >
            <div className='flex w-3/5  justify-between items-center gap-4' >
            <img src={logo} alt='img' className='w-[40px] h-full object-cover rounded-full' />
            <p className='text-white w-full font-semibold ' >ChatGPT</p>
            </div>
            <PencilSquareIcon className=' w-6 h-6 text-white' />
        </div>

        <div className='p-6 mt-2 w-full h-10 flex justify-between items-center ' >
            <div className='flex w-3/5 justify-between items-center gap-4' >
            <img src='https://files.oaiusercontent.com/file-SxYQO0Fq1ZkPagkFtg67DRVb?se=2123-10-12T23%3A57%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dagent_3.webp&sig=pLlQh8oUktqQzhM09SDDxn5aakqFuM2FAPptuA0mbqc%3D' alt='img' className='w-[40px] h-full object-cover rounded-full' />
            <p className='text-white w-full font-semibold ' >DALL-E</p>
            </div>
        </div>
        
        <div className='p-6 mt-2 w-full h-10 flex justify-between items-center ' >
            <div className='flex w-4/5 justify-between items-center gap-4' >
            <img src='https://files.oaiusercontent.com/file-id374Jq85g2WfDgpuOdAMTEk?se=2123-10-13T00%3A31%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dagent_2.png&sig=qFnFnFDVevdJL3xvtDE8vysDpTQmkSlF1zhYLAMiqmM%3D' alt='img' className='w-[40px] h-full object-cover rounded-full border' />
            <p className='text-white w-full font-semibold ' >Data Analysis</p>
            </div>
        </div>
    </>
  )
}

export default Header