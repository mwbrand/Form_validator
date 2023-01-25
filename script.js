const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

// show error outline and message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check if email is valid
function isValidEmail() {
  const regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(email).toLowerCase());
}

// Event listener
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (username.value === "") {
    showError(username, "Gebruikersnaam is verplicht");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "E-mail is verplicht");
  } else if (!isValidEmail(email.value)) {
    showError(email, "E-mail is ongeldig");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Wachtwoord is verplicht");
  } else {
    showSuccess(password);
  }

  if (confirmPassword.value === "") {
    showError(confirmPassword, "Wachtwoord is verplicht");
  } else {
    showSuccess(confirmPassword);
  }
});
