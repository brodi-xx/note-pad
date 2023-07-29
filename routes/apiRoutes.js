// apiRoutes.js

const express = require('express');
const router = express.Router();
const Store = require('../db/store');

// GET (return db.json)
router.get('/notes', (req, res) => {
  Store.getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// POST (return new note)
router.post('/notes', (req, res) => {
  const newNote = req.body;
  Store.addNote(newNote)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// DELETE (remove note)
router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  Store.removeNote(noteId)
    .then(() => res.json({ message: 'Note deleted successfully' }))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
