import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../utils/Date';

const EventCard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/hackathons')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); // Empty dependency array ensures this runs only once
  
  return (
    <div>
      {events.map((event) => (
        <div key={event.id} className='bg-gray-100 p-4'>
          <h1 className='font-bold text-2xl text-center'>{event.name}</h1>
          <p>hackathon</p>
          <p>Theme</p>
          <div>
          <div className="relative  flex justify-center items-center ">
                    {event.themes.map((theme)=>{
                      <div className=" bg-purple-100 peer-checked:bg-purple-400  px-8 py-3 rounded-full flex justify-center items-center border-2 border-purple-400">
                        <span>{theme}</span>
                    </div>
                    })}
                    
                  </div>
          </div>
          <span>starts {formatDate(event.hackathon_starts)}</span>
          <img src={event.cover_image} alt="loading" className='h-40'/>
          <Link to={`/hackathons/${event._id}/dashboard`} >
          <button>Apply now</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default EventCard;
