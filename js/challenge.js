
let intervalOfCounter
let clockCounter = 0
let displayCount = document.getElementById('counter')
let displayPause = document.getElementById('pause')
let pauseTracker = 1

let displayLike = document.getElementsByClassName('likes')[0]
let heartButton = document.getElementById('heart')

let commentForm = document.getElementById('comment-form')
let commentList = document.getElementById('list')


// Counter Methods

function startCounter() {
    intervalOfCounter = window.setInterval(counterIncrementer, 1000)
}

function counterIncrementer() {
    clockCounter++
    displayCounter()
}

function displayCounter() {
    displayCount.innerHTML = clockCounter
}

function stopCounter() {
    if (pauseTracker == 1) {
        window.clearInterval(intervalOfCounter)    
        displayPause.innerHTML = 'resume'
        pauseTracker = 0
    }
    else {
        startCounter()
        displayPause.innerHTML = 'pause'
        pauseTracker = 1
    }
}

function plusCounter() {
    clockCounter++
    displayCounter()
}
function minusCounter() {
    clockCounter--
    displayCounter()
}

// Like Methods

heartButton.addEventListener("click", likeUpdate)

function likeUpdate() {
    let addLi = document.createElement("li")
    addLi.innerHTML = `${clockCounter} has been liked 1 time`
    displayLike.appendChild(addLi)
}

// Comment List

commentForm.addEventListener("submit", addComment)

function addComment(event) {
    event.preventDefault()
    let commentText = event.target.children[0].value
    let addP = document.createElement("p")
    addP.textContent = commentText
    commentList.appendChild(addP)
    event.target.reset()
}