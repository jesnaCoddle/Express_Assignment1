
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); 
const equipmentRoutes = require('./routes/equipmentRoutes'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);
app.use("/", equipmentRoutes);

const PORT = 3500;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
