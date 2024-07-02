// script.js
document.addEventListener('DOMContentLoaded', function() {
    function updateTimeAndDay() {
        const now = new Date();
        const timeUTC = now.toUTCString().split(' ')[4];
        const day = now.toLocaleString('en-US', { weekday: 'long' });

        console.log('Time (UTC):', timeUTC); // Debugging: Log time
        console.log('Day:', day); // Debugging: Log day

        document.getElementById('time').innerText = timeUTC;
        document.getElementById('day').innerText = day;
    }

    // Call the function immediately to set initial values
    updateTimeAndDay();

    // Update time and day every second
    setInterval(updateTimeAndDay, 1000);
});
