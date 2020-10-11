const minusSecond = document.getElementById("minus");
const plusSecond = document.getElementById("plus");
const counter = document.getElementById("counter");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const submit = document.getElementById("submit")
let likes = 0;
let timer;

document.addEventListener('DOMContentLoaded', (event) => {

    function countUp() {
        likes = 1;
        seconds = parseInt(counter.innerText);
        seconds += 1;
        counter.innerText = seconds;
        counter.innerText.toString;
    }

    timer = window.setInterval(countUp, 1000);

    pause.addEventListener('click', (event) => {   
        if (pause.innerText == 'pause') {
            pause.innerText = 'resume';
            window.clearInterval(timer)
            heart.disabled = true;
            minusSecond.disabled = true;
            plusSecond.disabled = true;
            submit.disabled = true;
        } else {
            pause.innerText = 'pause'
            heart.disabled = false;
            minusSecond.disabled = false;
            plusSecond.disabled = false;
            submit.disabled = false;
            timer = window.setInterval(countUp, 1000);
        };
    });

});

minusSecond.addEventListener('click', (event) => {
    seconds = parseInt(counter.innerText);
    seconds -= 1;
    counter.innerText = seconds;
    counter.innerText.toString
});

plusSecond.addEventListener('click', (event) => {
    seconds = parseInt(counter.innerText);
    seconds += 1;
    counter.innerText = seconds;
    counter.innerText.toString;
});

heart.addEventListener('click', (event) => {
    let second = parseInt(counter.innerText)
    
    if (document.getElementById(second)) {
        const li = document.getElementById(second);
        li.innerText = `${second} has been liked ${likes++} times`;
    } else {
        const ul = document.querySelector("ul.likes");
        const li = ul.appendChild(document.createElement("li"));
        li.id = second;
        li.innerText = `${second} has been liked ${likes++} times`;
    };
});

submit.addEventListener('click', (event) => {
    event.preventDefault()
    const div = document.getElementById("list");
    const input = document.getElementById("comment-input")
    const form = document.getElementById("comment-form")
    let p = div.appendChild(document.createElement("p"))
    p.innerText = input.value
    form.reset()
});