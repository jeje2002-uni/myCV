// Get the toggle button by ID
const toggleBtn = document.getElementById("modeToggle");

// Reference to the <body> tag
const body = document.body;

// Check localStorage for saved mode (dark/light)
if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark"); // Apply dark mode class if saved
}

// Add click event to toggle button
toggleBtn.addEventListener("click", () => {
  // Toggle dark mode on or off
  body.classList.toggle("dark");

  // Save the user's mode preference in browser storage
  const mode = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("mode", mode);
});