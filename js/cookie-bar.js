document.addEventListener("DOMContentLoaded", () => {
  const cookieBar = document.querySelector(".cookie-bar");
  const acceptButton = document.querySelector(".cookie-button");

  // Check if user has already accepted cookies
  const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");

  if (!hasAcceptedCookies) {
    // Show cookie bar immediately
    requestAnimationFrame(() => {
      cookieBar.classList.add("show");
    });
  }

  // Handle accept button click
  acceptButton.addEventListener("click", () => {
    // Save acceptance to localStorage
    localStorage.setItem("cookiesAccepted", "true");

    // Hide cookie bar
    cookieBar.classList.remove("show");
  });
});
