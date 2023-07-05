// API ROUTES
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// GET (return db.json)
router.get('/notes', (req, res) => {
    res.json(notes);
});

// POST (return new note)
router.post("/notes", (req, res) => {
    res.json(notes);
});

module.exports = router; 