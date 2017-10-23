const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first: {
        type: String,
        required: true
    }, 
    last: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);