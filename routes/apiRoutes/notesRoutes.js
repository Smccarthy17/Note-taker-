const router = require('express').Router();
const { notes } = require('../../db/db.json');
const {createNewNote} = require('../../lib/notes.js');
const uniqid = require('uniqid');

router.get('/notes', (res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid();

    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;