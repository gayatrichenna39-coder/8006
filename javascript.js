const countdown = document.getElementById("countdown");

// Get wedding date from HTML
const weddingDate = new Date(
    countdown.dataset.date
).getTime();

// Countdown function
function tick() {

    // Get current time
    const now = Date.now();

    // Calculate remaining time
    const diff = weddingDate - now;

    // Check whether the countdown has finished
    if (diff <= 0) {

        countdown.innerHTML = "The wedding celebration has begun!";
        return;
    }

    // Calculate days, hours and minutes
    const days = Math.floor(diff / 86400000);

    const hours = Math.floor(
        (diff % 86400000) / 3600000
    );

    const minutes = Math.floor(
        (diff % 3600000) / 60000
    );

    // Display countdown values
    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");
}

// Run immediately
tick();

// Update every second
setInterval(tick, 1000);