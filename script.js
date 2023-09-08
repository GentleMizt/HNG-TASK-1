'use strict';

const currentDay = document.getElementById('day');
const timeInMilli = document.getElementById('time');

// Function to display current Day of the week
const displayCurrentDayOfWeek = () =>{
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    currentDay.textContent = `${dayOfWeek}`;
}

// Function to display Current time in Milliseconds
const displayTimeinMilli = () => {
    const currentDate = new Date();
    const hours = String(currentDate.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');

    let currentTimeInMilli = `${hours}:${minutes}:${seconds}`;

    if (hours >= 12) {
        currentTimeInMilli = `${hours}:${minutes}:${seconds} PM`;
    } else {
        currentTimeInMilli = `${hours}:${minutes}:${seconds} AM`;   
    }
    
    timeInMilli.textContent = `${currentTimeInMilli}`;
}

setInterval(displayTimeinMilli, 1000);
displayCurrentDayOfWeek();