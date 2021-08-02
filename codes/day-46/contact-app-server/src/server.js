const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')
const { routerMiddleware } = require('./routes/app-routes')
const { connectdb } = require('./db/db')


const PORT = 3001

const app = express()

const jsonParserMiddleware = json()
const corsMiddleware = cors()

app.use(corsMiddleware)
app.use(jsonParserMiddleware)
app.use(routerMiddleware)

app.listen(PORT, () => {
    connectdb()
    console.log('server is running using http://localhost:' + PORT)
})