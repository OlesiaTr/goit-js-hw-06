const refs = {
  input: document.querySelector("#font-size-control"),
  textLabel: document.querySelector("#text"),
};

const onInputChange = (event) => {
  refs.textLabel.style.fontSize = `${event.currentTarget.value}px`;
};

refs.input.addEventListener("input", onInputChange);
