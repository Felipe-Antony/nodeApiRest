const express = require('express');
const bodyParser = require('body-parser');


//criação do app
const app = express();

//config requisições json e URL
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//rotas
require('./controllers/authController')(app);
require('./controllers/projectController')(app);

//porta
app.listen(5000);