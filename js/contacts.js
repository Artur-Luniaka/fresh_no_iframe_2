document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");

  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
});

async function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  try {
    // Here you would typically send the data to your server
    // For now, we'll just log it and show a success message
    console.log("Form data:", data);

    // Show success message
    showMessage(
      "Thank you for your message! We will get back to you soon.",
      "success"
    );

    // Reset form
    e.target.reset();
  } catch (error) {
    console.error("Error submitting form:", error);
    showMessage(
      "Sorry, there was an error sending your message. Please try again.",
      "error"
    );
  }
}

function showMessage(message, type) {
  // Create message element
  const messageElement = document.createElement("div");
  messageElement.className = `message ${type}`;
  messageElement.textContent = message;

  // Add styles
  messageElement.style.position = "fixed";
  messageElement.style.top = "20px";
  messageElement.style.right = "20px";
  messageElement.style.padding = "var(--spacing-md) var(--spacing-lg)";
  messageElement.style.borderRadius = "var(--border-radius-md)";
  messageElement.style.color = "var(--color-white)";
  messageElement.style.backgroundColor =
    type === "success" ? "var(--color-success)" : "var(--color-error)";
  messageElement.style.boxShadow = "var(--shadow-md)";
  messageElement.style.zIndex = "1000";
  messageElement.style.animation = "slideIn 0.3s ease-out";

  // Add to document
  document.body.appendChild(messageElement);

  // Remove after 5 seconds
  setTimeout(() => {
    messageElement.style.animation = "slideOut 0.3s ease-in";
    setTimeout(() => {
      document.body.removeChild(messageElement);
    }, 300);
  }, 5000);
}

// Add keyframes for animations
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
