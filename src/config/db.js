const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gowtham:7oA6lOhdQAvtjjY0@cluster0.oyjmb.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB!'))
  .catch(error => console.error('Error connecting to MongoDB:', error));
