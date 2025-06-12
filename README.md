# 📊 Telecom Customer Churn Prediction

This full-stack project predicts whether telecom customers are likely to churn based on historical data. It features a PyTorch-trained deep learning model served via Flask API and a dynamic React + Tailwind CSS frontend for interactive prediction and visualization.

---

## 🚀 Live Demo

- 🔮 [Frontend Website](https://telecom-customer-churn-prediction.netlify.app/)
- 🔌 [Backend Flask API](https://huggingface.co/spaces/Radhapriyadarshan/Telecom-Customer-Churn-Prediction-API)
- 📬 [Postman API Docs](https://documenter.getpostman.com/view/22447139/2sB2x5JYwP)

---

## 🧠 Project Overview

This project allows users to:

- Upload a `.csv` file with telecom customer data
- Get AI-generated churn predictions with probabilities and reasons
- Visualize churn distribution with charts
- Interactively manage customers with "Contact & Resolve" actions

---

## 📂 Project Structure

### 🔷 Frontend
- Built with React + Tailwind CSS
- Uploads CSV and displays prediction results
- Features:
  - Responsive UI
  - Vanta animated background
  - Table filters (All, Churn, Not Churn)
  - Live charts and summaries

### 🔶 Backend
- Flask-based REST API
- Deployed on Hugging Face Spaces
- Endpoints:
  - `GET /` → API homepage
  - `POST /predict` → Accepts CSV and returns predictions

---

## 🧬 Model Details

This project uses a **Multilayer Perceptron (MLP)** implemented in PyTorch.

### 🏗 Architecture
- **Input Layer:** 53 features
- **Hidden Layer 1:** 64 neurons (ReLU)
- **Hidden Layer 2:** 32 neurons (ReLU)
- **Output Layer:** 1 neuron (Sigmoid)

### ⚙️ Training Config
- **Loss Function:** Binary Cross-Entropy (BCELoss)
- **Optimizer:** Adam
- **Epochs:** 150

### 📤 Output Format
```json
[
  {
    "customerID": "7590-VHVEG",
    "Churn": "Yes",
    "Probability": 0.88,
    "Reason": "Short tenure, Electronic Check"
  }
]
```

---

## 📈 Dataset

Source: [Telco Customer Churn Dataset on Kaggle](https://www.kaggle.com/datasets/blastchar/telco-customer-churn)

---

## 🛠 Installation (Local Dev)

### Backend (Flask)
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

---

## ✨ Features

- 🔍 AI-based churn detection
- 📊 Interactive dashboards
- 🎨 Beautiful responsive design
- 🧠 Model-powered insights
- 🧪 Postman API access

---

## 👨‍💻 Author

**Radha Priyadarshan Jagadeesan**  
📧 radhapriyan786@gmail.com  
🔗 [GitHub](https://github.com/RadhaPriyadarshan)  
🔗 [LinkedIn](https://www.linkedin.com/in/radha-priyadarshan-jagadeesan)  

---

## ⭐️ Show Your Support

If you found this project useful, please give it a ⭐ on [GitHub](https://github.com/RadhaPriyadarshan/churn-prediction-site)!