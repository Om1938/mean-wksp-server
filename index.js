require('dotenv-safe').config()
const express = require('express');
const { PORT } = require('./constants');
const app = express()


app.get('/', (req, res, next) => {
    res.end('Hello from index.js main')
})


app.use('/books', require('./routes/books'))

app.listen(PORT, () => {
    console.log(`Server Listenting on port ${PORT}`)
})
