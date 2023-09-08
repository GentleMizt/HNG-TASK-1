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
    const currentDateInMilli = currentDate.getTime();

    timeInMilli.textContent = `${currentDateInMilli}`;
}

displayCurrentDayOfWeek();
displayTimeinMilli();