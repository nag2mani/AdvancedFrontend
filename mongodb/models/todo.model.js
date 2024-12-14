const mongoose = require('mongoose');

const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: false
    }
},
    { timestamp: true }
);


module.exports = mongoose.model('Todo', todoSchema)