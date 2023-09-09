import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [currentDay, setCurrentDay] = useState('');
  const [currentUTCTime, setCurrentUTCTime] = useState('');

  useEffect(() => {
    // Function to get the current day of the week
    const getCurrentDay = () => {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const today = new Date();
      const dayIndex = today.getUTCDay();
      return daysOfWeek[dayIndex];
    };

    // Function to format the current UTC time
    const formatCurrentUTCTime = () => {
      const now = new Date();
      const hours = now.getUTCHours().toString().padStart(2, '0');
      const minutes = now.getUTCMinutes().toString().padStart(2, '0');
      const seconds = now.getUTCSeconds().toString().padStart(2, '0');
      const milliseconds = now.getUTCMilliseconds().toString().padStart(3, '0');
      return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    };

    // Update current day and time every second
    const interval = setInterval(() => {
      setCurrentDay(getCurrentDay());
      setCurrentUTCTime(formatCurrentUTCTime());
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocIO-hzaQ0yNYnSW8in3wUij-HHL1GpP6ohTE8J32DyipSQ=s576-c-no" // Replace with your Slack profile picture URL
        alt="Segun Moses" // Replace with your Slack username
        data-testid="slackDisplayImage"
      />
      <h1 data-testid="slackUserName">Segun Moses</h1>
      <p data-testid="currentDayOfTheWeek">{currentDay}</p>
      <p data-testid="currentUTCTime">{currentUTCTime} UTC</p>
      <p data-testid="myTrack">Frontend</p>
      <a
        href="https://github.com/bySegunMoses"
        data-testid="githubURL"
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Recommended for security
        style={{ color: 'lightgray' }} // Set the text color to bright gray
      >
        GitHub Repository
      </a>
    </div>
  );
}

export default App;
