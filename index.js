const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes.js');
const equipmentRoutes = require('./routes/equipmentRoutes.js');

const loggerMiddleware = require('./middleware/loggerMiddleware.js');

app.use(express.json());
app.use(loggerMiddleware);

app.use("/", userRoutes);
app.use("/", equipmentRoutes);

const PORT = 3500;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});