const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/fs-in-15", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const Schema = mongoose.Schema
const inputSchema = new Schema({
    text: String
})
const Input = mongoose.model("Input", inputSchema)

app.get('/getInputs', function(req, res) {
    Input.find({}, function(err, result) {
        res.send(result)
    })
})

app.post('/saveInput', function(req, res) {
    let input = { text: req.body.text }
    let inputDB = new Input(input)
    inputDB.save()
    res.send(inputDB)
})

const port = 3000
app.listen((process.env.PORT || port), function() {
    console.log(`Server running on port ${port}`)
})