const express = require('express')
const serverController = require('./controllers/serverController');
const fileController = require('./controllers/filesController');
const routes = express.Router();

routes.get('/', (req, res)=>{
    res.json({api : "true"})
});

/**SERVERS ROUTES */
routes.get('/servers', serverController.index);
routes.post('/servers', serverController.create);
routes.put('/servers/:registration', serverController.update);

/**FILES ROUTES */
routes.post('/files', fileController.createForFile);

routes.get('');

module.exports = routes;