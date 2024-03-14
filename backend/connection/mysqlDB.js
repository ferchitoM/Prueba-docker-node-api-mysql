const mysql = require("mysql2");
("user strict");

const connection = {
    host: "mysqldb",
    user: "user",
    password: "123",
    database: "Base-datos-prueba",
};

// database init
function mysqlConnect() {
    global.connection = mysql.createConnection(connection);

    global.connection.connect(function (err) {
        if (err) {
            console.log("error when connecting to db", err);
            setTimeout(mysqlConnect, 2000);
        }
        console.log("connected to database");
    });
    global.connection.on("error", function (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            mysqlConnect();
        } else {
            throw err;
        }
    });
}

mysqlConnect();

module.exports = connection;
