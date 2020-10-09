function oneSecond()
{
    let timer = document.getElementById("counter")
    let time = Number(timer.textContent)
    time ++
    timer.textContent = "\n" + time + "\n"
    
}

function like()
{
    let likeList = document.getElementsByClassName("likes")[0]
    let timer = document.getElementById("counter")
    let time = Number(timer.textContent)
    if (document.getElementById(time) == null)
    {
        newNumber = document.createElement("li")
        newNumber.id = time
        newNumber.textContent = "Number " + time + " has 0 likes"
        likeList.appendChild(newNumber)
    }
    let likeItem = document.getElementById(time)
    likes = Number(likeItem.textContent.split(" ")[3])
    likes ++
    likeItem.textContent = "Number " + time + " has " + likes + " likes"


}

let paused = false
let intervalID = setInterval(oneSecond, [1000]);
let pauseButton = document.getElementById(`pause`)
pauseButton.addEventListener(`click`, function(e, p = !paused, i = intervalID) {
    paused = !paused
    if (!p)
    {
        pauseButton.textContent = "pause"
        intervalID = setInterval(oneSecond, [1000]);
    }
    else 
    {
        pauseButton.textContent = "resume"
        clearInterval(intervalID)
    }
});

let plusButton = document.getElementById("plus")
plusButton.addEventListener('click', function(e, p = paused){
    if(!paused)
    {
        oneSecond()
    }
});

let minusButton = document.getElementById("minus")
minusButton.addEventListener('click', function(e, p = paused){
    if (!p)
    {
        let timer = document.getElementById("counter")
        let time = Number(timer.textContent)
        time --
        timer.textContent = "\n" + time + "\n"
    }
});

let likeButton = document.getElementById("heart")
likeButton.addEventListener('click', function(e, p = paused){
    if (!p)
    {
        like()
    }
});

document.addEventListener('submit', function(e){
    e.preventDefault()
    let commentField = document.getElementById("comment-input")
    let commentText = commentField.value
    let newComment = document.createElement('p')
    newComment.textContent = commentText
    let commentsSection = document.querySelector(`div#list.comments`)
    commentsSection.appendChild(newComment)
});

