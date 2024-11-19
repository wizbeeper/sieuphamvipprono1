const express = require('express');
const bodyParser = require('body-parser');
const connectDatabase = require('./config/database.config');
const employeeRoutes = require('./routes/employee.routes');

const app = express();
connectDatabase();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', employeeRoutes);

app.use(express.static('public'));

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));