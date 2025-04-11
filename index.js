require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const loggerMiddleware = require('./middleware/loggerMiddleware');
const errorHandler = require('./middleware/error');

const userRoutes = require('./routes/userRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');

app.use(express.json());
app.use(loggerMiddleware);
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/equipment', equipmentRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use(errorHandler);

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
