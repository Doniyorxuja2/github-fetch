// toglle
const body = document.querySelector("body");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const toggleText = document.querySelector(".toggle");

const meodeLocal = localStorage.getItem("mode");
if (meodeLocal) {
  body.classList.add("dark-mode");
  dark.classList.toggle("hidden");
  light.classList.toggle("hidden");
  toggleText.textContent = "LIGHT";
}

const toggle = () => {
  dark.classList.toggle("hidden");
  light.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};
dark.addEventListener("click", () => {
  toggle();
  toggleText.textContent = "DARK";
  localStorage.setItem("mode", "");
});
light.addEventListener("click", () => {
  toggle();
  toggleText.textContent = "LIGHT";
  localStorage.setItem("mode", "dark-mode");
});
