const mongoose = require('mongoose')

const WordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const Word = mongoose.model('word', WordSchema)

module.exports = Word