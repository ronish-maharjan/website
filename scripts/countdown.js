// =============================
// USER CONFIGURATION
// =============================
const EVENT_NAME = "Countdown to Graduation";       // Title of the event
const START_DATE = new Date(2025, 8, 12);            // Event start date (month is 0-based)
const END_DATE   = new Date(2026, 8, 32);           // Event end date

// =============================
// CALCULATIONS
// =============================
const NOW = new Date();                             // Current date and time
const MS_PER_DAY = 86400000;                        // Milliseconds in one day

// Total number of days between start and end (inclusive)
const DAYS_TOTAL = Math.round((END_DATE - START_DATE) / MS_PER_DAY) + 1;

// Days that have passed since start (cannot be negative)
const DAYS_SINCE_START = Math.max(0, Math.round((NOW - START_DATE) / MS_PER_DAY));

// Days remaining until end (cannot be negative)
const DAYS_UNTIL_END = Math.max(0, Math.round((END_DATE - NOW) / MS_PER_DAY));

// =============================
// RENDER DOT GRID
// =============================
const gridEl = document.getElementById("grid");
gridEl.innerHTML = "";  // Clear any previous dots

// Loop through each day and create a dot
for (let day = 1; day <= DAYS_TOTAL; day++) {
    const dot = document.createElement("span");
    
    // Apply classes for filled (completed) or unfilled (upcoming) days
    dot.className = "dot " + (day <= DAYS_SINCE_START ? "filled" : "unfilled");
    
    // Add the dot to the grid
    gridEl.appendChild(dot);
}

// =============================
// RENDER FOOTER
// =============================
// Display the event name
document.getElementById("eventName").textContent = EVENT_NAME;

// Display the number of days remaining
document.getElementById("daysLeft").textContent = `${DAYS_UNTIL_END} days left`;
