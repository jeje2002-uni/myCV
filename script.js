const toggleBtn = document.getElementById("modeToggle");
const body = document.body;

// Load saved mode from localStorage
if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const mode = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("mode", mode);
});