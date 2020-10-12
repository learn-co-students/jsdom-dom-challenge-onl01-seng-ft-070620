const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const commentForm = document.getElementById("comment-form")
const commentList = document.getElementById("list")

const displayCounter = function() {
    const counterNum = parseInt(counter.innerText);
    counter.innerText = counterNum + 1;
    minus.addEventListener("click", minusCounter);
    plus.addEventListener("click", plusCounter);
    pause.addEventListener("click", pauseCounter)
    heart.addEventListener("click", like)
}

const plusCounter = function() {
    const counterNum = parseInt(counter.innerText);
    counter.innerText = counterNum + 1;
}

const minusCounter = function() {
    const counterNum = parseInt(counter.innerText);
    counter.innerText = counterNum - 1;
}

const like = function() {
    let likesUl = document.getElementsByClassName('likes')[0];
    let newItem = document.createElement("li");
    let displayLike = `${counter.innerText} has been liked`;
    newItem.innerText = displayLike;
    likesUl.appendChild(newItem);
}

function pauseCounter() {
    clearInterval(timer);
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    pause.innerText = "resume";
    timerStatus = 0;
    pause.addEventListener("click", resumeTimer);
}

function resumeTimer() {
    setInterval(displayCounter, 1000);
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    pause.innerText = "pause";
    pause.addEventListener("click", pauseCounter);
}

let timer = setInterval(displayCounter, 1000);

commentForm.addEventListener("submit", addComment)

function addComment(event) {
    event.preventDefault()
    let commentText = event.target.children[0].value
    let newComment = document.createElement("li")
    newComment.textContent = commentText
    commentList.appendChild(newComment)
    event.target.reset()
}