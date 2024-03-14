require("dotenv").config();
require("./connection/mysqlDB");

const Server = require("./models/server");

const server = new Server();

server.listen();
