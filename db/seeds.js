const Vent = require('../models/Vent')
const Comment = require('../models/Comment')
const mongoose = require('mongoose')

const comment1 = new Comment({
    author: "xqc",
    body: "Haha, big head ugly ass nigga bitch headass hoe, fuck you"
})

const vent1 = new Vent({
    author: "summit1g",
    mood: "Annoyed",
    body: "People keep calling my head big, and it makes me sad :(",
    comments: [comment1]
})

Vent.deleteMany({})
.then(()=> Comment.deleteMany({}))
.then(()=> Comment.insertMany([comment1]))
.then(()=> Vent.save())
.then(()=> console.log("Database Seeded"))
.then(()=> mongoose.connection.close())