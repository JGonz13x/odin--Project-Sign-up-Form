const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordError = document.querySelector(".forms-division");

const submit = document.querySelector(".submit");

submit.addEventListener("click", (e) => {
  validatePassword(e);
});

function validatePassword(e) {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    passwordError.classList.remove("password-match");
    passwordError.classList.add("password-not-match");
  } else if (password.value && confirmPassword.value) {
    passwordError.classList.remove("password-not-match");
    passwordError.classList.add("password-match");
  } else {
    e.preventDefault();
    passwordError.classList.remove("password-not-match");
    passwordError.classList.remove("password-match");
  }
}
