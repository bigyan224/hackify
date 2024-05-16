import React from 'react'
import community_img from '../assets/community-5-b1e078070fa695f99d35df6d4fe845b1.png'

const We = () => {
  return (
    <div className='w-full    mt-44 p-4 flex justify-center'>
        <div className='flex gap-10'>
            <div className='w-1/2 '>
                <img src={community_img} alt="" className=''/>
            </div>
            <div className='flex flex-col items-center gap-4'>
    <h2 className='text-6xl text-center mt-10'>We Create <b>Innovation</b></h2>
    <div className='px-40 py-6 rounded-full bg-[#58D1BD] w-fit'>
        <span className='text-center text-2xl text-white font-bold'>100+ Hackathons</span>
    </div>
    <div className='px-40 py-6 rounded-full bg-[#81A2EF] w-fit'>
        <span className='text-center text-2xl text-white font-bold'>20000+ Participants</span>
    </div>
    <div className='px-40 py-6 rounded-full bg-purple-400 w-fit'>
        <span className='text-center text-2xl text-white font-bold'>5000+ Projects</span>
    </div>
            </div>
        </div>
    </div>
  )
}

export default We