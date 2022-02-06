const jsonserver = require('json-server');

const router = jsonserver.router('db.json');
const server = jsonserver.create();
const middlewares = jsonserver.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, ()=>{
    console.log(`JSON Server is running in ${port}`)
});