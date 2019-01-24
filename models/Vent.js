const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Vent = new Schema({
    author: String,
    mood: String,
    body: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }]

    
})

module.exports = mongoose.model('Vent', Vent)