const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT ?? 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES HERE
app.use(routes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening at http://localhost:${PORT}`);
    });
});