let counter = document.querySelector("h1#counter")
let subtract = document.querySelector("button#minus")
let add = document.querySelector("button#plus")
let heart = document.querySelector("button#heart")
let pause = document.querySelector("button#pause")
let commentButton = document.querySelector("#comment-form button#submit")
let commentList = document.querySelector("div#list")
let commentForm = document.querySelector("#comment-form input")
let intervalID

// invokes increment() every second
function start() {
  intervalID = window.setInterval(increment, 1000)
}

// increases the counter by 1
function increment() {
  counter.innerHTML = parseInt(counter.innerHTML) + 1
}

// decreases the counter by 1
function decrement() {
  counter.innerHTML = parseInt(counter.innerHTML) - 1
}

// stops and starts the counter
function stop() {
  // pause the timer, disable other buttons, adjust the pause button to display 'resume'
  if (pause.innerText == "pause") {
    clearInterval(intervalID)
    subtract.disabled = true
    add.disabled = true
    heart.disabled = true
    commentButton.disabled = true
    pause.innerText = "resume"
  // restart the timer, enable other buttons, restore pause button's text
  } else if (pause.innerText == "resume") {
    start()
    subtract.disabled = false
    add.disabled = false
    heart.disabled = false
    commentButton.disabled = false
    pause.innerText = "pause"
  }
}

// if there is already an li for the current second, adds a like for that li
  // pluralize the text if it's not already
// if not an existing li, adds a new li to the likes ul for the current second
function like() {
  let ul = document.querySelector("ul.likes")
  let li = document.querySelector(`li[data-num="${counter.innerHTML}"]`)

  if (li != null) {
    span = li.querySelector("span")
    span.innerText = parseInt(span.innerText) + 1

    if (!li.innerHTML.endsWith("s")) {
      li.innerHTML += "s"
    }

  } else {
    let li = document.createElement("li")
    li.dataset.num = counter.innerHTML
    li.innerHTML = `${li.dataset.num} has been liked <span>1</span> time`
    ul.appendChild(li)
  }
}

// after DOM fully loads, invokes start()
document.addEventListener("DOMContentLoaded", start)

// invokes increment() on plus button click
add.addEventListener("click", increment)

// invokes decrement() on minus button click
subtract.addEventListener("click", decrement)

// invokes like() on heart button click
heart.addEventListener("click", like)

// invokes stop() on pause button click
pause.addEventListener("click", stop)

// adds user inputted comment to comment section on submit button click
commentButton.addEventListener("click", function(e) {
  e.preventDefault()
  let p = document.createElement("p")
  let text = commentForm.value

  if (text != null && text != "") {
    p.innerHTML = text
    commentList.appendChild(p)
  }
})
