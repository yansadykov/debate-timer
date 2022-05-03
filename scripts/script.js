const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const millisecondsElement = document.querySelector('.milliseconds');

const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');

let minutes = "0",
    seconds = "0",
    milliseconds = "0",
    interval;


function startTimer(){
    milliseconds++
    if(milliseconds < 9){
        millisecondsElement.innerText = "0" + milliseconds;
    }
    if(milliseconds > 9){
        millisecondsElement.innerText = milliseconds;
    }

    if(milliseconds > 99){
        seconds++;
        secondsElement.innerText = "0" + seconds;
        milliseconds = 0;
        millisecondsElement.innerText = "0" + milliseconds;
    }

    if(seconds < 9){
        secondsElement.innerText = "0" + seconds;
    }
    if(seconds > 9){
        secondsElement.innerText = seconds;
    }
    if(seconds > 59){
        minutes++;
        minutesElement.innerText = "0" + minutes;
        seconds = 0;
        secondsElement.innerHTML = "0" + seconds;
    }

}

startButton.addEventListener('click', () =>{
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

