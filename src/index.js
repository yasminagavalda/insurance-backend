const express = require('express')

const getUserData = require('./handlers/getUserData')
const getPoliciesByUserName = require('./handlers/getPoliciesByUserName')

const app = express()

const PORT = 8080

app.get('/user', getUserData)
app.get('/policies', getPoliciesByUserName)

console.log(`Listening on port ${PORT}`)
app.listen(PORT)