const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "114.70.22.49", // 데이터베이스 서버 주소
    user: "inpro123", // 마리아DB 사용자 이름
    password: "Rjsrnrtmakxmvka123@", // 마리아DB 암호
    database: "KU", // 데이터베이스 이름
    port: 3306 // 포트 번호 (기본값: 3306)
  });

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database as id " + connection.threadId);
});


app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.listen(8080, function () {
  console.log("listening on 8080");
});
