const Vent = require('../models/Vent')
const Comment = require('../models/Comment')
const mongoose = require('mongoose')

const comment1 = new Comment({
    author: "xqc",
    body: "My head is big too, dont worry it gets better.... headass, jk"
})

const comment2 = new Comment({
    author: "summits hat",
    body: "you have to get help, I can't stretch any farther headass bitch"
})

const vent1 = new Vent({
    author: "summit1g",
    mood: "Annoyed",
    body: "People keep calling my head big, and it makes me sad :(",
    comments: [comment1, comment2]
})

Vent.deleteMany({})
.then(()=> Comment.deleteMany({}))
.then(()=> Comment.insertMany([comment1, comment2]))
.then(()=> vent1.save())
.then(()=> console.log("Database Seeded"))
.then(()=> mongoose.connection.close())