// set initial count
let count = 0;

const value = document.querySelector("#value");

// using event bubbling, upgraded the before project
const btn = document.querySelector(".button-container");
btn.addEventListener("click", (e) => {
  const clickedBtn = e.target.classList;
  if (clickedBtn.contains("button-container")) {
    // early return
    return;
  } else if (clickedBtn.contains("decrease")) {
    count--;
  } else if (clickedBtn.contains("increase")) {
    count++;
  } else {
    count = 0;
  }
  value.textContent = count;
  if (count > 0) {
    value.style.color = "green";
  } else if (count == 0) {
    value.style.color = "black";
  } else {
    value.style.color = "red";
  }
});
