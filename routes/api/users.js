const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

// POST /api/v1/users
router.post('/', usersCtrl.create)

// POST /api/v1/users/login
// router.post('/login', usersCtrl.login)

// GET /api/v1/users/:id
router.get('/:id', usersCtrl.show)

// GET /api/v1/users/:id/favorites
router.get('/:id/favorites', usersCtrl.getFavorites)

// PUT /api/v1/users/:id
router.put('/:id', usersCtrl.update)

module.exports = router