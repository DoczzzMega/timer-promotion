/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
"use strict";
// this function is strict...


let finalDate = new Date();

finalDate.setFullYear(2023, 3, 19);
finalDate.setUTCHours(3, 0, 0, 0);

let finalTimestamp = finalDate.getTime();

console.log(finalDate);

let currentTimestamp = Date.now();


let ms = finalTimestamp - currentTimestamp;
let countSec = Math.floor(ms / 1000);


function startTimer() {
    let idInt = setInterval(function () {
        countSec--;
        printTimer();
        if (countSec === 0) {
            clearInterval(idInt);
            body.classList.add('color');
            let p = document.querySelector('p');
            p.innerText = 'Акция закончилась';
        }
    }, 1000);
}

function printTimer() {
    let sec = document.getElementById('seconds');
    let min = document.getElementById('minutes');
    let hr = document.getElementById('hours');

    let hours = Math.floor(countSec / 3600);

    let minutes = Math.floor((countSec - hours * 3600) / 60);

    let seconds = countSec - (hours * 3600 + minutes * 60);

    hr.value = hours;
    min.value = minutes;
    sec.value = seconds;
}

startTimer();