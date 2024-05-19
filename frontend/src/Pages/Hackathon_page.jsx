import React from 'react'
import Navbar from '../Components/Navbar'
import Searchbar from '../Components/Searchbar'
import Eventcard from '../Components/Event_card'



const Hackathon_page = () => {
  
  return (
    <div className=''>
        <Navbar></Navbar>
        <div className='px-40 w-full'>
    <Searchbar></Searchbar>
    <div className='w-full flex flex-col items-center justify-center py-20 flex-wrap text-black'>
    <Eventcard></Eventcard>
    </div>
        </div>
        
    </div>
  )
}

export default Hackathon_page