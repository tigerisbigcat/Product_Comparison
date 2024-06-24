function compareProducts() {
  const input = document.getElementById("searchInput").value;
  if (input) {
    alert("Comparing products: " + input);
    // Implement the comparison logic here
  } else {
    alert("Please enter products to compare.");
  }
}

// real-time showing of the current time
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  const dateString = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  document.getElementById(
    "current-time"
  ).innerText = `${dateString} ${timeString}`;
}

setInterval(updateTime, 1000); // Update the time every second
window.onload = updateTime; // Set the initial time when the page loads

// dropdown menu for profile picture
function toggleDropdown() {
  const dropdown = document.getElementById("dropdown-menu");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

document.addEventListener("click", function (event) {
  const profilePic = document.getElementById("profile-pic");
  const dropdown = document.getElementById("dropdown-menu");
  if (!profilePic.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
});

// show support window
function showSupport() {
  const supportWindow = document.getElementById("support-window");
  supportWindow.style.display = "block";
}

function closeSupport() {
  const supportWindow = document.getElementById("support-window");
  supportWindow.style.display = "none";
}

document.addEventListener("click", function (event) {
  const supportWindow = document.getElementById("support-window");
  const supportButton = document.querySelector(".dropdown-item:nth-child(2)");
  if (
    !supportWindow.contains(event.target) &&
    !supportButton.contains(event.target)
  ) {
    supportWindow.style.display = "none";
  }
});

// change theme
let currentTheme = 0;
const themes = [
  { background: "#e6f0f8", header: "#b3c7e6" }, // light blue
  { background: "#deefde", header: "#b3e0b3" }, // light green
  { background: "#ffd3d3", header: "#e6a0a0" }, // light pink
  { background: "#fff4d3", header: "#e6d5a0" }, // light yellow
];

function changeTheme() {
  currentTheme = (currentTheme + 1) % themes.length;
  document.body.style.backgroundColor = themes[currentTheme].background;
  document.querySelector("header").style.backgroundColor =
    themes[currentTheme].header;
}
