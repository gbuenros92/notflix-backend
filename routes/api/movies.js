const express = require('express')
const router = express.Router()
const moviesCtrl = require('../../controllers/api/movies')

// GET  /api/v1/movies
router.get('/', moviesCtrl.index)

// POST /api/v1/movies
router.post('/', moviesCtrl.create)

// PUT /api/v1/movies/:id
router.put('/:id', moviesCtrl.update)

// DELETE /api/v1/movies/:id/
router.delete('/:id', moviesCtrl.remove)

module.exports = router