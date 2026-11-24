const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rituj@1234",
    database: "shms"
});

db.connect((err) => {
    if (err) {
        console.log("MySQL connection failed!");
        console.log(err);
        return;
    }

    console.log("MySQL connected successfully!");
});

module.exports = db;