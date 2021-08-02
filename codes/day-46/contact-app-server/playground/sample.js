const express = require('express')
const expressApp = express()
const jsonMiddleware = require('body-parser').json()

const PORT = 3001
const baseURI = '/contactservice'
const baseURL = `http://localhost:${PORT}/${baseURI}`

//register json parser middleware in the express js middleware pipeline
expressApp.use(jsonMiddleware)

expressApp.get(baseURI, (req, res) => {
    res.send('hello contacts')
})
expressApp.get(`${baseURI}/:id`, (req, res) => {
    //req.params.id

    res.send('hello contact')
})
// expressApp.get(`${baseURI}?id=`, (req, res) => {
//    //req.query.id
//     res.send('hello contact')
// })
expressApp.delete(`${baseURI}/:id`, (req, res) => {
    res.send('deleted contact')
})
expressApp.post(baseURI, (req, res) => {
    console.log(req.body)
    res.send('added contact')
})
expressApp.put(baseURI, (req, res) => {
    console.log(req.body)
    res.send('updated contact')
})


expressApp.listen(PORT, () => {
    console.log(`server is running using the URL ${baseURL}`)
})