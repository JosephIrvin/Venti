const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Coupon = new Schema({
    title: String,
    date: String, 
    desc: String 
})

module.exports = mongoose.model('Coupon', Coupon)