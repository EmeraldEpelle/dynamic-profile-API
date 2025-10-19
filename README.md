# 🧙‍♀️ Backend Wizards — Stage 0 Task  
### 🚀 Dynamic Profile Endpoint  

This project was built as part of the **Backend Wizards Stage 0 Task**.  
It’s a simple RESTful API that returns my profile information along with a **dynamic cat fact** fetched from the [Cat Facts API](https://catfact.ninja/fact).

---

## 📋 Task Overview

The goal was to build an endpoint `/me` that:
- Returns JSON data with the content type `application/json`
- Fetches a **random cat fact** from the Cat Facts API on every request
- Returns the current UTC timestamp in **ISO 8601** format
- Displays my personal details (email, full name, and backend stack)

---

## ⚙️ Tech Stack
- **Node.js**
- **Express.js**
- **Axios** (for fetching from the Cat Facts API)
- **Railway** (for hosting)

---

## 🧠 API Endpoint

### **GET /me**

**Live URL:**  
👉 [https://dynamic-profile-api-production-e114.up.railway.app/me](https://dynamic-profile-api-production-e114.up.railway.app/me)

**Example Response:**
```json
{
  "status": "success",
  "user": {
    "email": "emeraldepelle@gmail.com",
    "name": "Emerald Boma Epelle",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-19T10:12:45.678Z",
  "fact": "Cats sleep for 70% of their lives."
}


---

🧩 How It Works

1. When a GET request is made to /me, the server:

Fetches a random cat fact from the Cat Facts API.

Generates the current UTC time in ISO 8601 format.

Responds with your profile details and the cat fact.





---

🌐 Deployment

The backend API was deployed on Railway for easy cloud hosting and public accessibility.


---

👩🏽‍💻 Author

Emerald Boma Epelle
 emeraldepelle@gmail.com
