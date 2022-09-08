const refs = {
  form: document.querySelector(".login-form"),
};

const onFormInput = (event) => {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const pswrd = formEl.password.value;
  const formData = {
    email,
    pswrd,
  };

  // const formData = new FormData(event.currentTarget);
  // formData.forEach((value, name) => {return `name, value`})

  if (email === "" || pswrd === "") {
    alert(`All fields must be filled in!!!`);
  } else {
    refs.form.reset();
    console.log(formData);
  }
};

// const onClearOutput = (event) => {
//   const formEl = event.currentTarget.elements;
//   formEl.email.value = "";
//   formEl.password.value = "";
// };

refs.form.addEventListener("submit", onFormInput);
// refs.form.addEventListener("submit", onClearOutput);
