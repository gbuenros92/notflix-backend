const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    genre: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    plot: {
        type: String,
        required: true
    },
    image: String,
    contentRating: String,
    runTimeMins: Number,
    imdDbRating: Number
}, {
    timestamps: true
})

module.exports = mongoose.model('Movie', movieSchema)