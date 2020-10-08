const counter = document.querySelector("#counter");
const ul = document.querySelector(".likes");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const submit = document.querySelector("#submit");
const form = document.querySelector("#comment-form");

var interval;


function incrementCounter() {
    let n = parseInt(counter.innerHTML);
    counter.innerHTML = n + 1;
}

function decrementCounter() {
    let n = parseInt(counter.innerHTML);
    counter.innerHTML = n - 1;
}

function addLike() {
    if (!!document.getElementById(`${counter.innerHTML}`)) {
        let li = document.getElementById(`${counter.innerHTML}`)
        c = parseInt(li.getAttribute("count"))
        li.setAttribute("count", `${c+1}`)
        li.innerHTML = `${li.id} has ${li.getAttribute("count")} likes`
    } else {
        let li = document.createElement("li")
        li.setAttribute("id", `${counter.innerHTML}`)
        li.setAttribute("count", "1")
        li.innerHTML = `${li.id} has 1 like`
        ul.appendChild(li)
    }
}

function startInterval () {
    interval = window.setInterval(incrementCounter, 1000);
}

function pauseInterval () {
    clearInterval(interval);
}

function toggleInterval () {
    if (minus.disabled) {
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
        pause.innerHTML = "pause"
        startInterval();
    } else {
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
        pause.innerHTML = "resume"
        pauseInterval();
    };
}

plus.addEventListener("click", incrementCounter);

minus.addEventListener("click", decrementCounter);

heart.addEventListener("click", addLike);

window.addEventListener("DOMContentLoaded", startInterval);

pause.addEventListener("click", toggleInterval);

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let comment = document.querySelector("#comment-input");
    let p = document.createElement("p")
    p.innerHTML = comment.value;
    document.querySelector(".comments").appendChild(p);
    comment.value = "";
});

