import React from 'react'

const Searchbar = () => {
  return (
    <div>
        <div className='w-full p-4 flex justify-evenly   gap-12'>
        <input type="text" placeholder='Search hackathons' className='p-4 bg-zinc-100 rounded-md outline-1 outline-purple-400 border-zinc-200 border-2 w-3/4'/>
        <button className='px-6 py-4 bg-[#D2E0FF] rounded-lg hover:border-[#8097F2] border-[#a5b7ff] border-2 text-blue-700 font-bold'>Organize a hackathon</button>
    </div>
    </div>
  )
}

export default Searchbar