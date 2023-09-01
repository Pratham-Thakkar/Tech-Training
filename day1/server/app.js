const http = require('http') //importing core module
const {routeHandler} = require('./routeHandler')

http.createServer(routeHandler).listen(3000)

