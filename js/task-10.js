function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controlsEl: document.querySelector("#controls"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxEl: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", createBoxes);

let markupTable = [];

function createBoxes(amount) {
  amount = refs.controlsEl.firstElementChild.value;

  for (let i = 0; i < amount; i += 1) {
    const markupEl = `<div style ="background-color: ${getRandomHexColor()};width: ${
      30 + i * 10
    }px;height: ${30 + i * 10}px"></div>`;

    markupTable.push(markupEl);
    console.dir(refs.boxEl);
  }
  // return (refs.boxEl.innerHTML = markupTable.join(" "));
  return refs.boxEl.insertAdjacentHTML("beforeend", markupTable.join(""));
}

const destroyBoxes = () => {
  refs.boxEl.innerHTML = "";
  refs.controlsEl.firstElementChild.value = null;
  markupTable = [];
};

refs.btnDestroy.addEventListener("click", destroyBoxes);
