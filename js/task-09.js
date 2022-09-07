function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  spanEl: document.querySelector(".color"),
  btnEl: document.querySelector(".change-color"),
};

const onColorChange = (event) => {
  refs.spanEl.textContent = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = refs.spanEl.textContent;
};

refs.btnEl.addEventListener("click", onColorChange);
