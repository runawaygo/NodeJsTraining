const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

let chatList = []

app.get('/',  (req, res) => {
  res.send('hello world')
})


app.post('/send',  (req, res) => {
  const data = req.body
  data.date = Date.now()
  chatList.unshift(data)
  chatList = chatList.slice(0, 9)
  console.log(chatList)
  res.end()
})

app.get('/chatlist',  (req, res) => {
  res.json(chatList)
})


app.listen(1300)