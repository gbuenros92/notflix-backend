const User = require('../../models/User')
const bcrypt= require('bcrypt')

// Create a user
const create = async (req, res) => {
    try {
        const createdUser = await User.create(req.body)
        res.status(200).json(createdUser)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

// Find a user
const show = async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id)
        res.status(200).json(foundUser)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

// Update user
const update = async (req, res) => {
    try {
        // Pre and post save() hooks are not executed on update(), findOneAndUpdate(), etc
        // We need to handle our password update hash here amd not as a pre-hook
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

// Get user favorites
const getFavorites = async (req, res) => {
    try {
        const favorites = await User.findById(req.params.id).populate('favorites').select('favorites')
        res.status(200).json(favorites)
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

module.exports = {
    create,
    show,
    update,
    getFavorites
}