module.exports = app => {
    const router = require('express').Router();

    const controller = require('../controllers/todos.controller');

    //get all todos
    router.get('/', controller.findAll);

    //get todos by id
    router.get('/:id', controller.findById);

    app.use('/api/todos', router);
}