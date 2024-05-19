import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import formatDate from '../utils/Date';
import Countdown from '../Components/Countdown'

const Dashboard = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/hackathons/${eventId}`)
      .then((response) => response.json())
      .then((data) => {
        setEvent(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className='text-black bg-gray-100'>
        <Navbar></Navbar>
        <div className='w-full h-[30vh] bg-white'>
          <img src={event.cover_image} alt={event.name} className='h-full w-full object-cover'/>
        </div>
        <div className='p-4 flex justify-between mt-8'>
        <div className='flex gap-8 items-center'>
            <img src={event.cover_image} alt="" className='h-40'/>
            <div>
            <h1 className='text-4xl font-bold'>{event.name}</h1>
            <span>Hackathon</span>
            </div>
            
        </div>
        <div className='bg-purple-200 p-4 rounded-lg flex flex-col gap-2'>
            <div>
            <h1 className='text-xl font-bold'>Runs from</h1>
            <span>{`${formatDate(event.hackathon_starts)} to ${formatDate(event.hackathon_ends)}`}</span>
            </div>
            <div>
            <h1 className='text-xl font-bold'>Happening at</h1>
            <span>{event.venue}</span>
            </div>
            
            <Countdown endtime={event.application_close} />
        </div>
        </div>
      
    </div>
  );
};

export default Dashboard;
