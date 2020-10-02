
const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');

const displayCounter = function() {
  const counterNum = parseInt(counter.innerText);
  counter.innerText = counterNum + 1;
  minus.addEventListener('click', minusCounter);
  plus.addEventListener('click', plusCounter);
  pause.addEventListener('click', pauseCounter);
}

const minusCounter = function() {
  const counterNum = parseInt(counter.innerText);
  counter.innerText = counterNum - 1;
}

const plusCounter = function() {
  const counterNum = parseInt(counter.innerText);
  counter.innerText = counterNum + 1;
}

function pauseCounter() {
  clearInterval(timer);
  minus.disabled = true;
  plus.disabled = true;
  heart.disabled = true;
  pause.innerText = "resume";
  pause.addEventListener('click', resumeTimer);
}

function resumeTimer() {
  setInterval(displayCounter, 1000);
  minus.disabled = false;
  plus.disabled = false;
  heart.disabled = false;
  pause.innerText = "pause";
  pause.addEventListener('click', pauseCounter);
}

let timer = setInterval(displayCounter, 1000);