const express = require('express')
const mongoose = require('mongoose')
const user = require('./route/profile')


const app = express()
//conecting mongoose
const base = 'mongodb+srv://emmaro:1234@tutorial.klpqo.mongodb.net/korin?retryWrites=true&w=majority'

mongoose.connect(base)
.then((result) => console.log('rose-base has connected'))
.catch((err) => console.log(err, 'error has ocured in rose-base'))
//end

app.set('view engine', 'ejs')

//
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))
//using routes middleware
app.use(user)


app.listen(9000, () => console.log('coonected'))