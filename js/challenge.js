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
});
