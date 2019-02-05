const Vent = require('../models/Vent')
const Comment = require('../models/Comment')
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

Vent.deleteMany({})
.then(()=> Comment.deleteMany({}))
.then(()=> Comment.insertMany([comment1, comment2]))
.then(()=> vent1.save())
.then(()=> console.log("Database Seeded"))
.then(()=> mongoose.connection.close())