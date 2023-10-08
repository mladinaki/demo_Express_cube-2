const express = require('express');
const { PORT } = require('./constant');
const expressConfig = require('./src/config/expressConfig');
const handlebarsConfig = require('./src/config/handlebarsConfig');
const routers = require('./router');
const app = express();

expressConfig(app);
handlebarsConfig(app)

app.use(routers);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

