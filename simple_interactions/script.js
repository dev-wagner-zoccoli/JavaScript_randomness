function loaded() {
  t1.addEventListener("click", changeColor);
  t2.addEventListener("mouseover", changeText);
  t2.addEventListener("mouseout", reChangeText);

  console.log("Executed");
}

function changeColor(event) {
  if (event.target.style.color === "black") {
    event.target.style.color = "red";
  } else {
    event.target.style.color = "black";
  }
}

function changeText(event) {
  event.target.innerHTML = "Mouse over Element";
}
function reChangeText(event) {
  event.target.innerHTML = "Mouse out of Element";
}
