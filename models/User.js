const bcrypt = require('bcrypt')
const saltRounds = 10
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    picture: String,
    active: Boolean,
    favorites: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ]
}, {
    timestamps: true, 
    toJSON: {
        // ret is the JSON'd User document
        transform: function(doc, ret) {
            // We don't want to return the passowrd back to the client
            delete ret.password
            return ret
        }
    }
})

userSchema.pre('save', async function(next) {
    // This will only hash the passowrd for a newly created user
    this.password = await bcrypt.hash(this.password, saltRounds)
    return next()
})

module.exports = mongoose.model('User', userSchema)