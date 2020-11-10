const express = require('express')
const showdata = require('./showData')
const showData = require('./showData')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.get('/', (request, response) => {
  return response.render('index', { showData })
})

app.get('/seasons/:id', (request, response) => {
  const show = showdata.seasons[request.params.id - 1]

  return response.render('seasons', { show })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})
app.listen(1337, () => {
  console.log('Listening on port 1337..')
})
