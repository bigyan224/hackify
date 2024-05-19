import React, { useState, useEffect } from 'react';
import getTimeRemaining from '../utils/getTimeRemaining'

const Countdown = ({ endtime }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(endtime));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeRemaining = getTimeRemaining(endtime);
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [endtime]);

  if (timeRemaining.total <= 0) {
    return <div>Application has closed</div>;
  }

  return (
    <div>
      <span>{timeRemaining.days} days </span>
      <span>{timeRemaining.hours} hours </span>
      <span>{timeRemaining.minutes} minutes </span>
      <span>{timeRemaining.seconds} seconds </span>
    </div>
  );
};

export default Countdown;
