const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book', // If you have a Book model
  }],
  // Add more fields as needed
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
