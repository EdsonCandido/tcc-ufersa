const express = require('express');
const routes = require('./routes');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json())
app.use(fileUpload({
    createParentPath: true,
}));
app.use(routes);

app.listen(3333);