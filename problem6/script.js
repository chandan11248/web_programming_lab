function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerText = timeString;
}

setInterval(updateClock, 1000);
updateClock();

let timerInterval;

function startTimer() {
    clearInterval(timerInterval);

    const minInput = document.getElementById('minutes').value;
    const secInput = document.getElementById('seconds').value;

    let totalTimeInSeconds = (Number(minInput) * 60) + Number(secInput);

    if (totalTimeInSeconds <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    displayTime(totalTimeInSeconds);

    timerInterval = setInterval(function () {
        totalTimeInSeconds--;

        displayTime(totalTimeInSeconds);

        if (totalTimeInSeconds <= 0) {
            clearInterval(timerInterval);
            alert("Time's Up!");
        }
    }, 1000);
}

function displayTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;

    const mString = m.toString().padStart(2, '0');
    const sString = s.toString().padStart(2, '0');

    document.getElementById('timerDisplay').innerText = `${mString}:${sString}`;
}
