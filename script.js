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
    let currentTimeInMilli = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    if (currentDate.getHours() >= 12) {
        currentTimeInMilli = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} PM`;
    } else {
        currentTimeInMilli = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} AM`;   
    }
    
    timeInMilli.textContent = `${currentTimeInMilli}`;
}

displayCurrentDayOfWeek();
displayTimeinMilli();