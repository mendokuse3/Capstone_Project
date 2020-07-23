const express = require('express');
const router = express.Router();

const Notes = require('../models/notes.js');

// =======
// GET
// =======

router.get('/', (req, res) => {
    Notes.find({}, (err, foundNotes) => {
        res.json(foundNotes);
    })
})

// =======
// POST
// =======

router.post('/', (req, res) => {
    console.log(req.body)
    Notes.create(req.body, (err, createdNote) => {
        res.json(createdNote);
    })
})

module.exports = router;