const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mygroceryDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection;

//mongoose connection