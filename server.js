require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const app = express()
const routes = require('./routes/index')


app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/api', routes)

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', err => {
    console.log(err)
})

db.on('open', () => {
    console.log('Connected to MongoDB')
})



const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('App is up and running on port ' + PORT)
})