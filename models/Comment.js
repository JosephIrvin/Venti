const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Comment = new Schema({
    author: String,
    body: String,  
})

module.exports = mongoose.model('Comment', Comment)