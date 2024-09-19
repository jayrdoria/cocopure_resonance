import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url"; // To define __dirname in ES modules
import cors from "cors";

const app = express();
app.use(express.json());

// Enable CORS for localhost:5173 (React Dev Server)
app.use(cors({ origin: "http://localhost:5173" }));

// Manually define __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to the correct public folder (no double public)
const publicPath = path.join(__dirname, "../public");

// Serve static files from the correct public folder
app.use(express.static(publicPath));

// Log the serving path for debugging purposes
console.log(`Serving static files from ${publicPath}`);

// Endpoint to fetch FAQs from the JSON file
app.get("/faqData.json", (req, res) => {
  const filePath = path.join(publicPath, "faqData.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file", err);
      return res.status(500).send("Failed to load FAQs");
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint to update the FAQs in the JSON file
app.post("/updateFaqs", (req, res) => {
  const updatedFaqs = req.body;

  // File path to the JSON file inside the public folder
  const filePath = path.join(publicPath, "faqData.json");

  // Write the updated FAQ data to faqData.json
  fs.writeFile(filePath, JSON.stringify(updatedFaqs, null, 2), (err) => {
    if (err) {
      console.error("Error writing to file", err); // Log the error
      return res.status(500).send("Failed to update FAQs");
    }
    res.send("FAQs updated successfully");
  });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
