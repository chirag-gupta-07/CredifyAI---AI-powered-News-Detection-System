const newsContainer = document.getElementById("newsContainer");
const refreshBtn = document.getElementById("refreshBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

function loadDashboard() {
  newsContainer.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("credifyAI_results")) || [];

  if (data.length === 0) {
    newsContainer.innerHTML = "<p>No news analyzed yet.</p>";
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "news-card";

    card.innerHTML = `
      ${item.image ? `<img src="${item.image}" alt="Uploaded news" class="news-img"/>` : ""}
      <div class="news-content">
        <p><strong>🧾 Text:</strong> ${item.text.slice(0, 150)}...</p>
        <p><strong>🧠 Label:</strong> ${item.label}</p>
        <p><strong>🎯 Confidence:</strong> ${item.confidence}%</p>
        <p><strong>🎯 AI Summary:</strong> ${item.aisummary}</p>
        <p><strong>🕒 Date:</strong> ${item.date}</p>
        <button class="delete-btn" data-id="${item.id}">Delete</button>
      </div>
    `;
    newsContainer.appendChild(card);
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      deleteNews(id);
    });
  });
}

function deleteNews(id) {
  let data = JSON.parse(localStorage.getItem("credifyAI_results")) || [];
  data = data.filter((item) => item.id !== id);
  localStorage.setItem("credifyAI_results", JSON.stringify(data));
  loadDashboard();
}

refreshBtn.addEventListener("click", loadDashboard);

clearAllBtn.addEventListener("click", () => {
  if (confirm("Delete all stored news?")) {
    localStorage.removeItem("credifyAI_results");
    loadDashboard();
  }
});

loadDashboard();
