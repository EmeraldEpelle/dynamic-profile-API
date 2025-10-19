// server.js
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

// GET /me endpoint
app.get("/me", async (req, res) => {
  try {
    // Fetch cat fact
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });
    const catFact = response.data.fact;

    // Prepare the response
    const data = {
      status: "success",
      user: {
        email: "emeraldepelle@gmail.com",
        name: "Emerald Boma Epelle",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact. Please try again later.",
    });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
