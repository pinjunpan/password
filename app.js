const express = require('express')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000
const {generatePassword} = require('./public/javascripts/password_generator.js') //import

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) //form data sent via POST would be accessible in req.body

app.get('/', (req, res) => {
  res.render('index', { password: null, options: {} }) //When the page first loads, there’s no generated password and form data
})

app.post('/', (req, res) => {
  const options = req.body //form data(name & value attributed in index.hbs)
  const password = generatePassword(options)
  res.render('index', { password, options })
})

app.listen(port, () => {
    console.log(`express server is running on https://localhost:${port}`)
})
