// ######################################################### Mouse track

let wholeXY = document.querySelector('.coordinates');
let innerXY = document.querySelector('.innerCoordinates');
let box = document.querySelector('.coordinateBox');

box.addEventListener('mousemove', (event) => {
    innerXY.textContent = `x: ${Math.round(event.clientX - box.getBoundingClientRect().left)}
     y: ${Math.round(event.clientY - box.getBoundingClientRect().top)}`
});

console.log(box.getBoundingClientRect().top);

window.addEventListener('mousemove', (event) => {
    wholeXY.textContent = `x: ${event.clientX} y: ${event.clientY}`
});

//##################################################### time
let clock = document.createElement('H2');
document.querySelector('.timeBox').prepend(clock);

let showTime = function() {
    let time = new Date();
    let currentTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    clock.textContent = currentTime;
}
showTime(); // выводим время на экран, но оно не идет, пока не нажмем start
let timer = null; // создаем таймер

// этот способ работает, но при двойном нажатии на старт - стоп не работает, способ ниже эту проблему решает
/* let timeHandler = function(swicher) {
    switch (swicher) {
        case true:
            timer = setInterval(() => showTime(), 1000);
            startBtn.removeEventListener('click', () => timeHandler());
            break
        case false:
            clearInterval(timer);
            break
    }
}

let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');

startBtn.addEventListener('click', () => timeHandler(true));

stopBtn.addEventListener('click', () => timeHandler(false)); */

let setTimer = function() {
    timer = setInterval(() => showTime(), 1000);
    startBtn.removeEventListener('click', setTimer);
}

let removeTimer = function() {
    clearInterval(timer);
    startBtn.addEventListener('click', setTimer);
}

let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');

startBtn.addEventListener('click', setTimer);
stopBtn.addEventListener('click', removeTimer);