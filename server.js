const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "114.70.22.49", // 데이터베이스 서버 주소
  user: "inpro123", // 마리아DB 사용자 이름
  password: "Rjsrnrtmakxmvka123@", // 마리아DB 암호
  database: "KU", // 데이터베이스 이름
  port: 3306, // 포트 번호 (기본값: 3306)
});

/*
REQ
엔드포인트: /api/environment
요청 파라미터: startDate, endDate (날짜 범위)
응답: JSON 형태로 해당 기간의 KU_TBL_ENVIRONMENT 데이터 반환

RES
성공 응답 (200 OK)

Content-Type: application/json
Body: 테이블 KU_TBL_ENVIRONMENT의 데이터 (JSON 형식)
에러 응답 (500 Internal Server Error)

Content-Type: application/json
Body: { "error": "Internal Server Error" }
*/
const corsOptions = {
    origin: "localhost:8080"
  };
  
  app.use(cors(corsOptions));

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database as id " + connection.threadId);
});

app.get("/sensorData1", (req, res) => {
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;
  console.log(startDate, endDate);

  // MySQL 쿼리 작성
  const query = `SELECT * FROM KU_TBL_ENVIRONMENT_HIST_BACK WHERE (WRT_DATE BETWEEN ? AND ?) AND (MAIN_SEQ = '001')`;

  // MySQL 쿼리 실행
  connection.query(query, [startDate, endDate], (err, results) => {
    //startDate와 endDate가 ? 자리에 들어간다.
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    
    // 쿼리 결과를 JSON 형태로 반환
    res.json(results);
  });
});

app.get("/sensorData2", (req, res) => {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    console.log(startDate, endDate);    
  
    // MySQL 쿼리 작성
    const query = `SELECT * FROM KU_TBL_ENVIRONMENT_HIST_BACK WHERE (WRT_DATE BETWEEN ? AND ?) AND (MAIN_SEQ = '002')`;
  
    // MySQL 쿼리 실행
    connection.query(query, [startDate, endDate], (err, results) => {
      //startDate와 endDate가 ? 자리에 들어간다.
      if (err) {
        console.error("Error executing query: " + err.stack);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
  
      // 쿼리 결과를 JSON 형태로 반환
      res.json(results);
    });
  });



// MySQL 쿼리 작성

app.get("/scaleData1", (req, res) => {
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;
  // MySQL 쿼리 작성
  const query = `SELECT * FROM KU_TBL_SCALE_HIST WHERE (WRT_DATE BETWEEN ? AND ?) AND (MAIN_SEQ = '001')`;

  // MySQL 쿼리 실행
  connection.query(query, [startDate, endDate], (err, results) => {
    //startDate와 endDate가 ? 자리에 들어간다.
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    // 쿼리 결과를 JSON 형태로 반환
    res.json(results);
  });
});

app.get("/scaleData2", (req, res) => {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    // MySQL 쿼리 작성
    const query = `SELECT * FROM KU_TBL_SCALE_HIST WHERE (WRT_DATE BETWEEN ? AND ?) AND (MAIN_SEQ = '002')`;
  
    // MySQL 쿼리 실행
    connection.query(query, [startDate, endDate], (err, results) => {
      //startDate와 endDate가 ? 자리에 들어간다.
      if (err) {
        console.error("Error executing query: " + err.stack);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
  
      // 쿼리 결과를 JSON 형태로 반환
      res.json(results);
    });
  });

  app.get("/scaleData3", (req, res) => {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    // MySQL 쿼리 작성
    const query = `SELECT * FROM KU_TBL_SCALE_HIST WHERE (WRT_DATE BETWEEN ? AND ?) AND (MAIN_SEQ = '003')`;
  
    // MySQL 쿼리 실행
    connection.query(query, [startDate, endDate], (err, results) => {
      //startDate와 endDate가 ? 자리에 들어간다.
      if (err) {
        console.error("Error executing query: " + err.stack);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
  
      // 쿼리 결과를 JSON 형태로 반환
      res.json(results);
    });
  });

app.use(express.static(path.join(__dirname, "build")));

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
