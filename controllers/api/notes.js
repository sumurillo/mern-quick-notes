// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const User = require('../../models/user');
const Note = require('../../models/note');

module.exports = {
  create,
  index
};


async function create(req, res) {
  try {
    req.body.user = req.user._id

    const createdNote = await Note.create(req.body);
    res.json(createdNote);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {

    const allNotes = await Note.find({});
  
    res.json(allNotes);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}
