// HTML ROUTES
const express = require('express');
const router = express.Router();
const path = require('path');

// GET (return index.html)
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/../index.html'));
});

// GET (return notes.html)
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/notes.html'));
});

// DELETE (delete a note)
router.delete("/notes/:id", (req, res) => {
    const noteId = req.params.id;

    // Return a response indicating the note was deleted
    res.send(`Note with ID ${noteId} deleted successfully`);
});

module.exports = router;