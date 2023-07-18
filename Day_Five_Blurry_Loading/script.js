const load_text = document.querySelector(".loading_text");
const background = document.querySelector(".bg");

let load = 0;

let int = setInterval(blur, 30);

function blur() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }
  load_text.innerText = `${load}%`;
  load_text.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
