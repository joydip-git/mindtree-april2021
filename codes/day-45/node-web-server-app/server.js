const http = require('http')
const fs = require('fs')
const { readContacts } = require('./file-operations')
const PORT = 4000

const httpServer = http.createServer(
    (req, res) => {
        readContacts((err, data) => {
            if (err) {
                res.statusCode = 404
                res.setHeader('Content-Type', 'text/html')
                res.end(`<h1>Error:${err}`)
            }

            if (data) {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/json')
                res.end(JSON.stringify(JSON.parse(data)))
            }
        })
    }
)

httpServer.listen(PORT, () => {
    console.log(`server is running through http://localhost:${PORT}/`)
})