const state = {
  count: 0,
  paused: false
}

const counter = document.querySelector("#counter");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const heart = document.querySelector("#heart");
const pause = document.querySelector('#pause')
const form = document.querySelector('#comment-form')
const list = document.querySelector("#list")
const likes = document.querySelector(".likes")
const nums = [];

setInterval(() => count(1), 1000);


function count(num) {
  if (!state.paused){
    state.count += num
    counter.innerText = state.count
  }
}

function pauseBtn() {
  state.paused = !state.paused
  document.querySelectorAll("button").forEach(item => {
    if (item.id !== 'pause') {
      item.disabled = !item.disabled
      if (item.disabled === true) {
        pause.innerText = "resume"
      }
      else {
        pause.innerText = "pause"
      }
    }
  })
}

function comment(e) {
  e.preventDefault()
  let input = document.querySelector('#comment-input').value
  const c = document.createElement("p")
  c.innerText = input
  list.appendChild(c)
  form.reset()
}

function like() {
  let num = counter.innerText;
  let timesLiked = 0;
  nums.push(num);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == num) {
      timesLiked++
    }
  }
  let likeLi = document.createElement("li")
  likeLi.appendChild(document.createTextNode(`${num} has been liked ${timesLiked} times.`))
  likes.appendChild(likeLi)
}

plus.addEventListener("click", () => count(1));
minus.addEventListener("click", () => count(-1));
pause.addEventListener('click', pauseBtn)
form.addEventListener('submit', comment)
heart.addEventListener('click', like)