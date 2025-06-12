document.addEventListener("DOMContentLoaded", () => {
  // Load game updates
  fetch("/data/updates.json")
    .then((response) => response.json())
    .then((data) => {
      const updatesContainer = document.getElementById("updates-container");
      if (updatesContainer) {
        data.updates.forEach((update) => {
          const updateElement = document.createElement("article");
          updateElement.className = "update-card";
          updateElement.innerHTML = `
                        <div class="update-image">
                            <img src="images/${update.image}" alt="${update.title}">
                        </div>
                        <div class="update-content">
                            <div class="update-date">${update.date}</div>
                            <h3>${update.title}</h3>
                            <p>${update.content}</p>
                        </div>
                    `;
          updatesContainer.appendChild(updateElement);
        });
      }
    })
    .catch((error) => console.error("Error loading updates:", error));

  // Load trail diaries
  fetch("/data/diaries.json")
    .then((response) => response.json())
    .then((data) => {
      const diariesContainer = document.getElementById("diaries-container");
      if (diariesContainer) {
        data.diaries.forEach((diary) => {
          const diaryElement = document.createElement("article");
          diaryElement.className = "diary-card";
          diaryElement.innerHTML = `
                        <div class="diary-header">
                            <div class="diary-date">${diary.date}</div>
                            <div class="diary-author">By ${diary.author}</div>
                        </div>
                        <h3>${diary.title}</h3>
                        <p>${diary.content}</p>
                        <div class="diary-stats">
                            <span class="likes">❤️ ${diary.likes}</span>
                            <span class="comments">💬 ${diary.comments}</span>
                        </div>
                    `;
          diariesContainer.appendChild(diaryElement);
        });
      }
    })
    .catch((error) => console.error("Error loading diaries:", error));
});

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}
