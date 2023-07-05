// HTML ROUTES
const express = require('express');
const router = express.Router();
const path = require('path');

// GET (return index.html)
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/../routes/public/index.html'));
});

// GET (return notes.html)
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/notes.html'));
});

module.exports = router;