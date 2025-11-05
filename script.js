// CredifyAI Website Logic
const webhookUrl = "https://webndev7890.app.n8n.cloud/webhook/50af1f68-98f3-49a8-b6cb-86dbf554c98c"; 

const checkBtn = document.getElementById("checkBtn");
const loading = document.getElementById("loading");
const resultDiv = document.getElementById("result");
const loadingBarContainer = document.getElementById("loadingBarContainer");

checkBtn.addEventListener("click", async () => {
  const text = document.getElementById("textInput").value.trim();
  const image = document.getElementById("imageInput").files[0];

  if (!text && !image) {
    alert("Please enter text or upload an image.");
    return;
  }

  const formData = new FormData();
  if (text) formData.append("text", text);
  if (image) formData.append("image", image);

  loadingBarContainer.classList.remove("hidden");
  loading.classList.remove("hidden");
  resultDiv.classList.add("hidden");

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Webhook error");

    const textResponse = await response.text();
    let data;
    try {
      data = JSON.parse(textResponse);
    } catch {
      throw new Error("Invalid JSON received from webhook.");
    }

    const result = Array.isArray(data) ? data[0] : data?.result || data;

    document.getElementById("prob").textContent =
      result?.confidence ? result.confidence + "%" : "N/A%";

    document.getElementById("summary").textContent =
      result?.label
        ? result.label === "Fake"
          ? "⚠️ Fake or Misleading"
          : result.label === "Real"
          ? "✅ Verified as Real"
          : "✅ Verified as Real"
        : "No summary available.";

    document.getElementById("aisummary").textContent =
      result?.aisummary ? result.aisummary : "N/A";

    loadingBarContainer.classList.add("hidden");
    loading.classList.add("hidden");
    resultDiv.classList.remove("hidden");

    // ✅ Save to localStorage
    const reader = new FileReader();
    reader.onload = () => {
      const newsItem = {
        id: Date.now(),
        text: text || "No text provided",
        image: image ? reader.result : null,
        label: result.label || "Unknown",
        confidence: result.confidence || "N/A",
        aisummary: result.aisummary || "N/A",
        date: new Date().toLocaleString(),
      };

      const existing = JSON.parse(localStorage.getItem("credifyAI_results")) || [];
      existing.unshift(newsItem);
      localStorage.setItem("credifyAI_results", JSON.stringify(existing));
    };
    if (image) reader.readAsDataURL(image);
    else reader.onload();
  } catch (err) {
    alert("Error analyzing. Please check your n8n webhook or internet connection.");
    console.error(err);
    loading.classList.add("hidden");
  }
});
