const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "..")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend.html"));
});

app.get("/api/greet", (req, res) => {
    const { name } = req.query;

    if (!name || name.trim() === "") {
        return res.status(400).json({ error: "Name is required" });
    }

    res.json({
        message: `Hello, ${name.trim()}! Welcome to YoungLabs.`
    });
});

module.exports = app;
