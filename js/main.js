document.addEventListener("DOMContentLoaded", async () => {
  // Load features
  try {
    const featuresResponse = await fetch("data/features.json");
    const featuresData = await featuresResponse.json();
    renderFeatures(featuresData.features);
  } catch (error) {
    console.error("Error loading features:", error);
  }

  // Load how to play
  try {
    const gameplayResponse = await fetch("data/how-to-play.json");
    const gameplayData = await gameplayResponse.json();
    renderGameplay(gameplayData.steps);
  } catch (error) {
    console.error("Error loading gameplay:", error);
  }

  // Load reviews
  try {
    const reviewsResponse = await fetch("data/reviews.json");
    const reviewsData = await reviewsResponse.json();
    renderReviews(reviewsData.reviews);
  } catch (error) {
    console.error("Error loading reviews:", error);
  }

  // Load challenges
  try {
    const challengesResponse = await fetch("data/challenges.json");
    const challengesData = await challengesResponse.json();
    renderChallenges(challengesData.challenges);
  } catch (error) {
    console.error("Error loading challenges:", error);
  }

  // Load garage upgrades
  try {
    const upgradesResponse = await fetch("data/upgrades.json");
    const upgradesData = await upgradesResponse.json();
    renderUpgrades(upgradesData.upgrades);
  } catch (error) {
    console.error("Error loading upgrades:", error);
  }

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

function renderFeatures(features) {
  const container = document.getElementById("features-container");
  if (!container) return;

  const featuresHTML = features
    .map(
      (feature) => `
        <div class="feature-card">
            <div class="feature-icon">
                ${getFeatureEmoji(feature.icon)}
            </div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `
    )
    .join("");

  container.innerHTML = featuresHTML;
}

function getFeatureEmoji(icon) {
  const emojiMap = {
    physics: "⚡",
    weather: "🌦️",
    customization: "🔧",
    world: "🗺️",
    multiplayer: "👥",
    missions: "🎯",
  };
  return emojiMap[icon] || "🚙";
}

function renderGameplay(steps) {
  const container = document.getElementById("gameplay-container");
  if (!container) return;

  const stepsHTML = steps
    .map(
      (step, index) => `
        <div class="step">
            <div class="step-number">${index + 1}</div>
            <h3>${step.title}</h3>
            <p>${step.description}</p>
        </div>
    `
    )
    .join("");

  container.innerHTML = stepsHTML;
}

function renderReviews(reviews) {
  const container = document.getElementById("reviews-container");
  if (!container) return;

  const reviewsHTML = reviews
    .map(
      (review) => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-info">
                    <h4>${review.name}</h4>
                    <div class="review-rating">${"★".repeat(
                      review.rating
                    )}${"☆".repeat(5 - review.rating)}</div>
                </div>
            </div>
            <p class="review-text">${review.text}</p>
        </div>
    `
    )
    .join("");

  container.innerHTML = reviewsHTML;
}

function renderChallenges(challenges) {
  const container = document.getElementById("challenges-container");
  if (!container) return;

  const challengesHTML = challenges
    .map(
      (challenge) => `
        <div class="challenge-card">
            <img src="images/${challenge.image}" alt="${
        challenge.title
      }" class="challenge-image">
            <h3>${challenge.title}</h3>
            <p>${challenge.description}</p>
            <div class="challenge-difficulty">
                <span>Difficulty:</span>
                <div class="difficulty-stars">${"★".repeat(
                  challenge.difficulty
                )}${"☆".repeat(5 - challenge.difficulty)}</div>
            </div>
        </div>
    `
    )
    .join("");

  container.innerHTML = challengesHTML;
}

function renderUpgrades(upgrades) {
  const container = document.getElementById("upgrades-container");
  if (!container) return;

  const upgradesHTML = upgrades
    .map(
      (upgrade) => `
        <div class="upgrade-card">
            <img src="images/${upgrade.image}" alt="${upgrade.title}" class="upgrade-image">
            <h3>${upgrade.title}</h3>
            <p>${upgrade.description}</p>
            <div class="upgrade-stats">
                <div class="stat">
                    <span>Performance:</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${upgrade.performance}%"></div>
                    </div>
                </div>
                <div class="stat">
                    <span>Durability:</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${upgrade.durability}%"></div>
                    </div>
                </div>
            </div>
        </div>
    `
    )
    .join("");

  container.innerHTML = upgradesHTML;
}

// Add scroll-based animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
