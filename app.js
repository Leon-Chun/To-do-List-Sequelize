const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const PORT = process.env.PORT || 3000


//使用套件後產生的
const app = express()

//view engine
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//user body get 
app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

//router setting
app.get('/', (req, res) => {
  res.send('This is my test page for initialization(初始化， 成功) ')
})


app.get('/users/login', (req, res) => {
  res.render('login')
})

app.post('/users/login', (req, res) => {
  res.send('login')
})

app.get('/users/register', (req, res) => {
  res.render('register')
})

app.post('/users/register', (req, res) => {
  res.send('register')
})

app.get('/users/logout', (req, res) => {
  res.send('logout')
})

app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})