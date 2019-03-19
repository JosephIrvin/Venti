const Vent = require('../models/Vent')
const Comment = require('../models/Comment')
const Coupon = require('../models/Coupon')
const mongoose = require('mongoose')

const comment1 = new Comment({
    author: "ventiguy4",
    body: "That really sucks! Wishing the best for you"
})

const comment2 = new Comment({
    author: "Mark",
    body: "Same thing happened to me amy, there are plenty of opportunities"
})

const vent1 = new Vent({
    author: "Amy",
    mood: "Annoyed",
    body: "I just got fired from work today",
    comments: [comment1, comment2]
})

const coupon1 = new Coupon({
    title: "Size Upgrade",
    date: "4/10/2020",
    desc: "Buy a coffee of any size and upsize it for free."
})
const coupon2 = new Coupon({
    title: "Free Pastry",
    date: "5/5/2019",
    desc: "Grab a free pastry from any viable store with the purchase of a coffee."
})
const coupon3 = new Coupon({
    title: "Latte of the Week",
    date: "7/10/2029",
    desc: "Get a free small size latte of the participating stores choice of flavor."
})

Vent.deleteMany({})
.then(()=> Comment.deleteMany({}))
.then(()=> Comment.insertMany([comment1, comment2]))
.then(()=> vent1.save())
.then(()=> coupon3.save())
.then(()=> coupon2.save())
.then(()=> coupon1.save())
.then(()=> console.log("Database Seeded"))
.then(()=> mongoose.connection.close())