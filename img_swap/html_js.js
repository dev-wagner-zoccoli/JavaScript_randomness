function load() {
  btn.addEventListener("click", swapPics);
  img01.addEventListener("mouseover", changePics);
  img01.addEventListener("mouseout", changePics);
}

function swapPics() {
  if (img02.src.endsWith("/html5.png") == true) {
    img02.src = "/JS.png";
  } else {
    img02.src = "/html5.png";
  }

  if (img03.src.endsWith("/JS.png") == true) {
    img03.src = "/html5.png";
  } else {
    img03.src = "/JS.png";
  }
}
