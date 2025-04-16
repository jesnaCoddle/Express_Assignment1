// require('dotenv').config();
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const loggerMiddleware = require('./middleware/loggerMiddleware.js');
const errorHandler = require('./middleware/error.js');

app.use(express.json());
app.use(loggerMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));

const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const equipmentRoutes = require('./routes/equipmentRoutes.js');


app.get('/', (req, res) => {
  res.send("api is working!");
});

app.use('/auth', authRoutes);
app.use('/equipment', equipmentRoutes);
app.use('/users', userRoutes);

app.use(errorHandler);

const PORT = 3800;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});