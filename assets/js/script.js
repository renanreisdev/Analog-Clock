let continuosPointer = document.querySelector('.continuous-pointer');
let continuosPointerText = document.querySelector('.continuous-pointer-area p');
let inputContinuosPointer = document.querySelector('.continuous-pointer input');
continuosPointer.style.transition = '0.5s';

function updateClock() {
    let digitalClock = document.querySelector(".digital-clock span");
    let analogClockSeconds = document.querySelector(".pointer-seconds");
    let analogClockMinutes = document.querySelector(".pointer-minutes");
    let analogClockHours = document.querySelector(".pointer-hours");
    let now = new Date;
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let miliseconds = now.getMilliseconds();

    if (inputContinuosPointer.checked) {
        analogClockSeconds.style.transform = `rotate(${((seconds * 6) + miliseconds * 0.006) - 90}deg)`;
    } else {
        analogClockSeconds.style.transform = `rotate(${(seconds * 6) - 90}deg)`;
    }

    analogClockMinutes.style.transform = `rotate(${(minutes * 6) - 90}deg)`;
    analogClockHours.style.transform = `rotate(${(hours * 30) - 90}deg)`;

    digitalClock.innerHTML = `${fixZeroLeft(hours)}:${fixZeroLeft(minutes)}:${fixZeroLeft(seconds)}`;
    
}

inputContinuosPointer.addEventListener('change', (e) => {
    if (inputContinuosPointer.checked) {
        continuosPointerText.innerHTML = 'Ponteiro Contínuo';
        continuosPointer.style.paddingLeft = '1.3em';
        continuosPointer.style.backgroundColor = 'rgba(100, 8, 8, 0.7)';
    } else {
        continuosPointerText.innerHTML = 'Ponteiro Padrão';
        continuosPointer.style.paddingLeft = '0.1em';
        continuosPointer.style.backgroundColor = 'rgba(120, 120, 120, 0.7)';
    } 
});

function fixZeroLeft(element) {
    return element > 9 ? element : `0${element}`;
}

updateClock();
setInterval(updateClock, 10);