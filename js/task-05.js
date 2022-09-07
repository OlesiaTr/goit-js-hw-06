const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

const onIputChange = (event) => {
  refs.nameLabel.textContent =
    event.currentTarget.value === "" ? `Anonymous` : event.currentTarget.value;
};

refs.input.addEventListener("input", onIputChange);
