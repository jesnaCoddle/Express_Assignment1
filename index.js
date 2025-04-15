require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
const loggerMiddleware = require('./middleware/loggerMiddleware.js');
const errorHandler = require('./middleware/error.js');

const userRoutes = require('./routes/userRoutes.js');
const equipmentRoutes = require('./routes/equipmentRoutes.js');
const authRoutes = require('./routes/authRoutes.js');

app.use(express.json());
app.use(loggerMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("api is working!");
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/equipment', equipmentRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use(errorHandler);

const PORT = process.env.PORT || 3800;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});