const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the STI Awareness App');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/STIawarenessApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
