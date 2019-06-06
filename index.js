const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()

const PC = require('./controllers/products_controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    console.log('WE LIT')
    app.set('db', db) 
    app.listen(SERVER_PORT, ()=> console.log('listening boi', SERVER_PORT))
}).catch(err => console.log(err))

app.post('/api/products', PC.create)
app.get('/api/products/:id', PC.read)
app.get('/api/products', PC.reads)
app.put('/api/products/:id', PC.update)
app.delete('/api/products/:id', PC.delete)

