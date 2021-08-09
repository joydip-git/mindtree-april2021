const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')
const { routerMiddleware } = require('./routes/app-routes')
const { connectdb } = require('./db/db')
const dotenv = require('dotenv')
dotenv.config()

// const args = process.argv.splice(2)
// console.log(args)
// console.log(process.env.PORT)
// console.log(process.env.NAME)
const PORT = process.env.PORT

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