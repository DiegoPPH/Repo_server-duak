const express = require('express');
const { createForm, getForm } = require('../controllers/form.controller');
const routes = express.Router();
routes.post('/create', createForm);
routes.get('/all', getForm);
module.exports = routes;

