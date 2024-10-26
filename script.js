const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordError = document.querySelector(".forms-division");
const submit = document.querySelector(".submit");

let passwordValue;
let confirmPasswordValue;
let isPasswordMatch = false;

submit.addEventListener("click", (e) => {
  passwordValue = password.value;
  confirmPasswordValue = confirmPassword.value;
  validatePassword();
  preventUnMatchPassword(e);
  console.log(passwordValue);
});

function validatePassword() {
  if (passwordValue !== confirmPasswordValue) {
    passwordError.classList.remove("password-match");
    passwordError.classList.add("password-not-match");
    isPasswordMatch = false;
  } else if (
    passwordValue &&
    confirmPasswordValue &&
    passwordValue.length === 8 &&
    confirmPasswordValue.length === 8
  ) {
    passwordError.classList.remove("password-not-match");
    passwordError.classList.add("password-match");
    isPasswordMatch = true;
  } else {
    passwordError.classList.remove("password-not-match");
    passwordError.classList.remove("password-match");
    isPasswordMatch = false;
  }
}

function preventUnMatchPassword(e) {
  if (!isPasswordMatch) {
    e.preventDefault();
  }
}

function checkMatchingPassword() {
  passwordValue = password.value;
  confirmPasswordValue = confirmPassword.value;
  validatePassword();
}
