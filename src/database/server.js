const path = require('path');
const jsonServer = require('json-server');
const router = jsonServer
    .router(path.join(__dirname, 'db.json'));
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const PORT = 5000;
console.log(middlewares);


server.use(middlewares);
server.use(router);
server.use(jsonServer.bodyParser)
server.listen(PORT, () => {
    console.log('JSON Server is running');
})



