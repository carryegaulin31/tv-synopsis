const express = require('express')
const showData = require('./showData')
const app = express()

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index', { showData })
})

app.get('/showData/:title', (request, response) => { // colon important it says HEY ITS A VARIABLE
  const showData = showData.find((show) => show.title === parseInt(request.params.title)) // THIS IS HOW YOU GET PARAM VALUES FROM THE URL!!!!!!

  return response.render('showData', {})
})

app.use(express.static('public'))


app.all('*', (request, response) => {
  return response.sendStatus(404)
})
app.listen(1337, () => {
  console.log('Listening on port 1337..')
})
