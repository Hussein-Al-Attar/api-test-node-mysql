// get the client
const mysql = require("mysql2");

// create the connection to database
const con = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12610724",
  database: "sql12610724",
  password: "1HkyWbz2tF",
});
 con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

const express = require("express");
const app = express();
const port = 3000;

app.get("/",async (req, res)  => {
  
await con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    return res.json(result);
  });
});
  //res.send("not");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
