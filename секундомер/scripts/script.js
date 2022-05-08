const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const millisecondsElement = document.querySelector('.milliseconds');

const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');

const minutesUpButton = document.querySelector('.minutes-up');
const minutesDownButton = document.querySelector('.minutes-down');
const secondsUpButton = document.querySelector('.seconds-up');
const secondsDownButton = document.querySelector('.seconds-down');

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

    if(minutes < 9){
        minutesElement.innerText = "0" + minutes;
    }
    if(minutes > 9){
        minutesElement.innerText = minutes;
    }

}



function clearFields(){
    minutes = "0"
    seconds = "0"
    milliseconds = "0"

    millisecondsElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
}

startButton.addEventListener('click', () =>{
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

pauseButton.addEventListener('click', () => {
    clearInterval(interval);
})

stopButton.addEventListener('click', () =>{
    clearInterval(interval);
    clearFields();
})

minutesUpButton.addEventListener('click', () =>{
    if(minutes <= 9){
        minutes++;
        minutesElement.innerText = "0" + minutes;
    }
    if(minutes > 9){
        
        minutesElement.innerText = minutes;
        minutes++;
    }

})

minutesDownButton.addEventListener('click', () =>{
    if(minutes <= 9){
        minutes--;
        minutesElement.innerText = "0" + minutes;
       
        
    }
    if(minutes > 9){
        minutes--;
        minutesElement.innerText = minutes;
    }

})