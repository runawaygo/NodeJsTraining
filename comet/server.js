const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

let clientList = []

app.get('/',  (req, res) => {
  res.send('hello world')
})

app.get('/onnew', (req, res)=>{
  clientList.push(res)
  console.log("onnew" + clientList.length)
})

app.post('/send',  (req, res) => {
  const data = req.body
  data.date = Date.now()

  const responses = clientList
  clientList = []

  res.end()
  console.log("send" + responses.length)
  for(let i = 0;i<responses.length;i++){
    responses[i].json(data)
  }
})

app.listen(1300)