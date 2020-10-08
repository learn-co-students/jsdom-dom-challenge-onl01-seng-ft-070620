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
});
