function compareProducts() {
  const input = document.getElementById("searchInput").value;
  if (input) {
    alert("Comparing products: " + input);
    // Implement the comparison logic here
  } else {
    alert("Please enter products to compare.");
  }
}

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
