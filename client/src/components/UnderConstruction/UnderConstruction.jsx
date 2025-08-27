// UnderConstruction.js
import React, { useEffect, useState } from "react";
import "./UnderConstruction.css"; // Add relevant styles here

const UnderConstruction = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("March 31, 2025 23:59:59").getTime();
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(timerInterval);
        setTimeLeft({ message: "We're Live!" });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="construction-container">
      <header>
        <nav>
          <ul className="navbar">
            <li><a href="#flights">Flights</a></li>
            <li><a href="#car-rentals">Car Rentals</a></li>
            <li><a href="#attractions">Attractions</a></li>
            <li><a href="#airport-taxi">Airport Taxi</a></li>
          </ul>
        </nav>
      </header>
      <div className="construction-content">
        <h1>We're Currently Under Construction</h1>
        <p>We're working hard to bring you a new experience. Stay tuned and check back soon!</p>
        <div className="countdown">
          <h2>Launching in:</h2>
          {timeLeft.message ? (
            <p>{timeLeft.message}</p>
          ) : (
            <div id="timer">
              <span>{timeLeft.days}</span>d : 
              <span>{timeLeft.hours}</span>h : 
              <span>{timeLeft.minutes}</span>m : 
              <span>{timeLeft.seconds}</span>s
            </div>
          )}
        </div>
        <div className="contact-info">
          <p>For inquiries, reach out to us at:</p>
          <h3>rananitinrxt@gmail.com</h3>
          {/*<a href="rananitinrxt@gmail.com">rananitinrxt@gmail.com</a>*/}
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
