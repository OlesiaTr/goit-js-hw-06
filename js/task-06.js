const input = document.querySelector("#validation-input");
const inputDataLength = input.getAttribute("data-length");

const onInputChange = (event) => {
  if (event.currentTarget.value.length !== Number(inputDataLength)) {
    input.classList.remove("valid");
    return input.classList.add("invalid");
  }

  input.classList.remove("invalid");
  return input.classList.add("valid");
};

input.addEventListener("blur", onInputChange);
