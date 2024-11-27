// Log message for debugging or future extensions.
console.log("Resources page loaded.");

// Example placeholder for interactive features:
document.addEventListener("DOMContentLoaded", () => {
    console.log("Resources are ready to explore!");

    // Add interactivity for resource cards if needed
    // Example: Highlight card on hover
    const resourceCards = document.querySelectorAll(".card");
    resourceCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });
        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "none";
        });
    });
});
