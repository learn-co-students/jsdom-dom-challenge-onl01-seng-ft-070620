// define functions

function toggleButtons() {
    submitButton.disabled ? submitButton.disabled = false : submitButton.disabled = true
    minusButton.disabled ? minusButton.disabled = false : minusButton.disabled = true
    plusButton.disabled ? plusButton.disabled = false : plusButton.disabled = true
    heartButton.disabled ? heartButton.disabled = false : heartButton.disabled = true
    pauseButton.innerHTML == ' pause ' ? pauseButton.innerHTML = ' play ' : pauseButton.innerHTML = ' pause '
}

function togglePause() {
    isPaused ? isPaused = false : isPaused = true
}

// function timeIncrement() {
//     if (!isPaused) {
//         incrementCounter()
//     }
// }

function incrementCounter() {
    if (!isPaused) {
        counter.innerText = String(parseInt(counter.innerText) + 1)
    }
}

function decrementCounter() {
    counter.innerText = String(parseInt(counter.innerText)-1)
}

function addComment() {
    const newComment = comments.appendChild(document.createElement('p'))
    newComment.textContent = commentField.value
}

// set elements to play with
const submitButton = document.querySelector('#submit')
const minusButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus')
const heartButton = document.querySelector('#heart')
const pauseButton = document.querySelector('#pause')
const likesUl = document.querySelector('.likes')
const commentField = document.querySelector('#comment-input')
const commentForm = document.querySelector('#comment-form')
const counter = document.querySelector('#counter')
const comments = document.querySelector('#list')

// set variable to determine whether counter is incremented or not
let isPaused = false

// set interval behavior
setInterval(incrementCounter, 1000)

// set button/form listeners
// pause
pauseButton.addEventListener('click', function(e) {
    togglePause()
    toggleButtons()
})

// plus
plusButton.addEventListener('click', function(e) {
    incrementCounter()
})

// minus
minusButton.addEventListener('click', function(e) {
    decrementCounter()
})

// comment form
commentForm.addEventListener('submit', function(e) {
    e.preventDefault()
    addComment()
    e.target.reset()
})

// likes
let spanTag
heartButton.addEventListener('click', function(e) {
    const li = document.querySelector(`[data-num='${counter.innerText}']`)
    if (li == null) {
        const newLike = likesUl.appendChild(document.createElement('li'))
        newLike.setAttribute('data-num', counter.innerText)
        newLike.innerHTML = `${counter.innerText} has been liked <span>1</span> time`
    } else {
        spanTag = li.querySelector('span')
        spanTag.innerText = parseInt(spanTag.innerText)+1
        if (!li.innerHTML.endsWith('s')) {li.innerHTML += 's'}
    }
})