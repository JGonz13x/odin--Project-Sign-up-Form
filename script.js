const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordError = document.querySelector(".forms-division");

const submit = document.querySelector(".submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  validatePassword(confirm);
});

function validatePassword(confirm) {
  if (password.value !== confirmPassword.value) {
    passwordError.classList.remove("password-match");
    passwordError.classList.add("password-not-match");
  } else {
    passwordError.classList.remove("password-not-match");
    passwordError.classList.add("password-match");
  }
}
