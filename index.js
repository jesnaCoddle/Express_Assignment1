const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);

const PORT = 3500;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
