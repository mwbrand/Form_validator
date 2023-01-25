const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

// show error outline and message.
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success outline.
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Capitalize fieldnames.
function fieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check input length
function checkLength(inputArray, min, max) {
  inputArray.forEach((input) => {
    if (input.value.length < min) {
      showError(
        input,
        `${fieldName(input)} must be at least ${min} characters.`
      );
    } else if (input.value.length > max) {
      showError(
        input,
        `${fieldName(input)} must be less than ${max} characters.`
      );
    } else {
      showSuccess(input);
    }
  });
}

// Check if email is valid
function checkEmail(input) {
  const regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regEx.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid.");
  }
}

// Check if fields are required.
function checkRequired(inputArray) {
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${fieldName(input)} is required`);
    } else {
      showError(input);
    }
  });
}

// Check if passwords match.
function checkPasswordsMatch(input, confirm) {
  if (input.value !== confirm.value) {
    showError(input, "");
    showError(confirm, "Passwords do not match");
  }
}

// Event listener.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkRequired([username, email, password, confirmPassword]);
  checkLength([username, password, confirmPassword], 3, 15);
  checkEmail(email);
  checkPasswordsMatch(password, confirmPassword);
});
