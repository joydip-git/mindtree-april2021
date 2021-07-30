const http = require('http')
const PORT = 3000

let requestCount = 0
/*
const serverCallback = (req, res) => {
    console.log(req)
    console.log('received request: ' + (requestCount + 1))
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Welcome to HTTP Server</h1>')

    // res.setHeader('Content-Type', 'text/json')
    // res.end(JSON.stringify({ name: 'anil', salary: 1000 }))

    //res.end('welcome to Node Server')

    //res.end('3600')
}
*/
//pass a callback (which will be executed when the server receives any request through the PORT number) to the createServer method
//const httpServer = http.createServer(serverCallback)
const httpServer = http.createServer((req, res) => {
    console.log(req.url)
    console.log('received request: ' + (requestCount + 1))
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Welcome to HTTP Server</h1>')

    // res.setHeader('Content-Type', 'text/json')
    // res.end(JSON.stringify({ name: 'anil', salary: 1000 }))

    //res.end('welcome to Node Server')

    //res.end('3600')
})

//pass the port number and a callback (which will be executed when the server starts running and ready to listen to any request coming via that port number) to the 'listen()' method
httpServer.listen(PORT, () => {
    console.log('server is running using port no: ' + PORT)
})