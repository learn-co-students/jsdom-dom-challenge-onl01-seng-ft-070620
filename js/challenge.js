<<<<<<< HEAD
let counter = document.getElementById("counter");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let likes = document.querySelector(".likes");
let pause = document.getElementById("pause");
let play = 0;
let likeCounter = 0;

let timer = () => {
  return setInterval(() => {
    let a = parseInt(counter.innerText);
    counter.innerText = a + 1;
    likeCounter = 0;
  }, 1e3);
};

timer();

minus.addEventListener("click", () => {
  let a = parseInt(counter.innerText);
  counter.innerText = a - 1;
});

plus.addEventListener("click", () => {
  let a = parseInt(counter.innerText);
  counter.innerText = a + 1;
});

heart.addEventListener("click", () => {
  likeCounter++;
  let listItem = document.createElement("li");
  listItem.innerText = `You have liked ${counter.innerText} ${likeCounter} times`;
  likes.appendChild(listItem);
});

pause.addEventListener("click", () => {
  if (play == 0) {
    play = 1;
  } else {
    play = 0;
  }
=======
addEventListener('DOMContentLoaded', function () {
    let timer = function () {
        return setInterval(function () {
            var a = document.getElementById("counter"),
                b = parseInt(a.innerText);
            a.innerText = b + 1
        }, 1e3)
    };
    timer();
});

let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');

let likes = document.getElementsByClassName('likes');
let listItem = document.createElement('li')

minus.addEventListener('click', function () {
    let a = document.getElementById("counter"),
        b = parseInt(a.innerText);
    a.innerText = b - 1
});

plus.addEventListener('click', function () {
    let a = document.getElementById("counter"),
        b = parseInt(a.innerText);
    a.innerText = b + 1
});

heart.addEventListener('click', function () {
    likes.appendChild('li')
>>>>>>> 7ba429fa2d8c2a895852d65db4bd782507f393d5
});
