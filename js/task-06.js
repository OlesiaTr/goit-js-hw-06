const input = document.querySelector("#validation-input");

const onInputChange = (event) => {
  if (event.currentTarget.value.length !== 6) {
    input.classList.remove("valid");
    return input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
  }

  return input.classList.add("valid");
};

input.addEventListener("blur", onInputChange);
