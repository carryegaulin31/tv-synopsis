const { response } = require('express')
const express = require('express')
const showData = require('./showdata')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.get('/', (request, respond) => {
  console.log showData
  return response.render('index', { showData })
})
app.listen(1337, () => {
  console.log('Listening on port 1337..')
})