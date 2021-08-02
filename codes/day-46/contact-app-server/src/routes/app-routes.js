//using router mioddleware to configure routes in express js
const { Router } = require('express')
const { getContactsHandler, getContactHandler, addContactHandler, updateContactHandler, deleteContactHandler } = require('../controller/contactController')

const routerMiddleware = Router()
const baseURI = '/contactservice'

routerMiddleware.get(baseURI, getContactsHandler)
routerMiddleware.get(`${baseURI}/:phone`, getContactHandler)
routerMiddleware.post(baseURI, addContactHandler)
routerMiddleware.put(baseURI, updateContactHandler)
routerMiddleware.delete(`${baseURI}/:phone`, deleteContactHandler)

module.exports = { routerMiddleware }