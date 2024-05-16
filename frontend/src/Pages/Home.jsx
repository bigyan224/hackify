import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Particle from '../Components/Particle'
import We from '../Components/We'


const Home = () => {
  return (
    <div className='bg-[#F5F7F7'>
    <Particle></Particle>
    <Navbar></Navbar>
    <Hero></Hero>
    <We></We>
    </div>
  )
}

export default Home