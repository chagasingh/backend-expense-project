const path = require('path');
const express = require('express');

const userController = require('../controllers/expense')
const router = express.Router();





router.post('/expense/add-expense',userController.postUser)

router.get('/expense/get-expense', userController.getUser)

router.delete('/expense/delete-expense/:id', userController.deleteUser)

router.get('/', userController.getback)

module.exports = router;