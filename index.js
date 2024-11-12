const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();
// || es "o" u "or"
const port = process.env.PORT || 10000; //Web service

server.use(middlewares);
server.use(router);

server.listen(port);