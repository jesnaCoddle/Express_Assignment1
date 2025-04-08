const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);

const PORT = 3100;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
