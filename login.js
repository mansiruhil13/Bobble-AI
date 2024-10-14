const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Toggle password visibility
function togglePassword(fieldId, icon) {
  const field = document.getElementById(fieldId);
  const isPassword = field.type === "password";

  // Toggle between 'password' and 'text'
  field.type = isPassword ? "text" : "password";

  // Change the icon class between eye and eye-slash
  icon.classList.toggle("fa-eye-slash", isPassword);
  icon.classList.toggle("fa-eye", !isPassword);
}

// Check password strength
function checkPasswordStrength() {
  const password = document.querySelector(
    ".sign-up-form input[type='password']"
  ).value;
  const strengthWeak = document.getElementById("strength-weak");
  const strengthMedium = document.getElementById("strength-medium");
  const strengthStrong = document.getElementById("strength-strong");

  let strength = 0;

  if (password.length >= 8) strength++;
  if (password.match(/[A-Z]/)) strength++;
  if (password.match(/[a-z]/)) strength++;
  if (password.match(/[0-9]/)) strength++;
  if (password.match(/[^a-zA-Z0-9]/)) strength++;

  strengthWeak.className = "";
  strengthMedium.className = "";
  strengthStrong.className = "";

  if (strength >= 1) strengthWeak.className = "weak";
  if (strength >= 3) strengthMedium.className = "medium";
  if (strength >= 5) strengthStrong.className = "strong";
}

// Call the checkPasswordStrength function on password input
document
  .querySelector(".sign-up-form input[type='password']")
  .addEventListener("input", checkPasswordStrength);
