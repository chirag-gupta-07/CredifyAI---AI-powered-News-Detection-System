# 📰 CredifyAI – Fake News Detection System

**CredifyAI** is an AI-powered web platform that detects fake or misleading news from text or image input.  
Built for hackathons and research purposes, this project integrates **n8n.io** automation with **OpenAI GPT** models and a **simple web dashboard** for analysis results.

---

## 🚀 Features

- 🧾 **Text & Image Analysis** – Detects fake news from both written text or screenshots.
- ⚡ **Real-time AI Results** – Instant verdict with confidence percentage.
- 📊 **Dashboard** – Displays all analyzed news with date, type, and result.
- 🧠 **Confidence Score** – Shows AI’s certainty level.
- 🧰 **User-Friendly UI** – Clean design for quick checks.

---

## 🧩 Tech Stack

| Category | Tools / Technologies |
|-----------|----------------------|
| AI/ML | OpenAI GPT Model |
| Workflow Automation | n8n.io |
| Frontend | HTML, CSS, JavaScript |
| Backend | n8n Cloud Webhook |
| Hosting | GitHub Pages / Netlify |

---

## ⚙️ Workflow Overview

1. **User Input** – User uploads an image or enters news text.
2. **OCR Processing** – Extracts text if an image is provided.
3. **AI Verification** – OpenAI model classifies news as *Fake*, *Real*, or *Unclear*.
4. **Display Results** – Web UI shows label, confidence, and summary.
5. **Dashboard** – Stores news checked by visitors with timestamps.

---

## 🖼️ Example Output

```json
{
  "label": "Fake",
  "confidence": "97"
}
```

---

## 📁 Project Structure

```
CredifyAI/
├── index.html           # Main input page
├── dashboard.html       # Dashboard page
├── style.css            # Styling for all pages
├── script.js            # Logic for AI and webhook handling
├── dashboard.js         # Dashboard functionality
└── README.md            # Documentation file
```

---

## 🧠 How It Works (High-Level Flow)

```
User → Webpage → n8n Workflow → OpenAI Model → Response (Fake/Real) → Dashboard
```

---

## 🧪 Setup Instructions

1. Clone or download this repository.
2. Connect your n8n webhook URL inside **script.js**:
   ```js
   const webhookUrl = "https://YOUR-N8N-URL.webhook-test/...";
   ```
3. Host the files using **GitHub Pages** or **Netlify**.
4. Open `index.html` in your browser to test the app.

---

## 💡 Future Enhancements

- Add a database (Firebase / Supabase) for permanent storage.
- Integrate multilingual fake news detection.
- Build a mobile version of the web app.
- Implement AI-powered news summarization.

---

## 🧑‍💻 Contributors

- **Chirag** – Developer, AI Workflow & Integration  
- Hackathon Team Members (Optional)

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

### 🌐 “Truth Matters — Let’s Make the Internet Trustworthy Again.”
