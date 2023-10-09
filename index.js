const express = require('express');

const { PORT } = require('./constant');
const expressConfig = require('./src/config/expressConfig');
const handlebarsConfig = require('./src/config/handlebarsConfig');
const dbConnect = require('./src/config/dbConfig')
const routers = require('./router');

const app = express();

//Config
expressConfig(app);
handlebarsConfig(app);

//Connecting to the database
dbConnect()
    .then(() => console.log('Successfully connected to the DB!'))
    .catch(err => console.log(`Error while connecting to DB!!!:, ${err}`));

app.use(routers);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

