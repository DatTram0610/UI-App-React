// const path = require('path');
// const testModel = require('../models/user-model');

// module.exports = 

const router = require('express').Router();
const path = require('path');
const userController = require('../controllers/user-controller')();

module.exports = router;

router.get('/', userController.getAllUser);
router.get('/:id', userController.getUserById);
router.post('/', userController.postUser);
router.put('/:id', userController.updateById);
router.delete('/:id', userController.removeById);
router.get('/add', userController.add);