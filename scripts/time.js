function updateNepalTime() {
  const options = {
    timeZone: "Asia/Kathmandu", // Timezone for Nepal
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // AM/PM format
  };
  const now = new Date().toLocaleTimeString("en-US", options);
  document.getElementById(
    "nepalTime"
  ).textContent = `TIME IN NEPAL - ${now} NPT`;
}

updateNepalTime(); // Initial call to set the time immediately
setInterval(updateNepalTime, 1000); // Update the time every second
