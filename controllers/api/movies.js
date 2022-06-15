const Movie = require('../../models/Movie')

// Find all movies
const index = async (req, res) => {
    try {
        const movies = await Movie.find({})
        res.status(200).json(movies)
    } catch (err) {
        res.status(400).json({msg: err.message})
    }
}

module.exports = {
    index
}