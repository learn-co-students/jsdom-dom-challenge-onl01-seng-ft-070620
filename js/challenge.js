
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

const pauseCounter = function() {
  clearInterval(timer);
  minus.disabled = true;
  plus.disabled = true;
  heart.disabled = true;
}

const timer = setInterval(displayCounter, 1000);