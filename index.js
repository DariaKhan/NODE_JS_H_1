const http = require("http");
let countMain = 0;
let countAbout = 0;


const server = http.createServer((req, res) => {
  console.log("Запрос получен");


  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end("<h1>Добро пожаловать на мой сайт!<h1>");
    console.log(`Запрос Main обработан ${++countMain} раз`);
  } else if (req.url === "/about") {
    res.writeHead(200, {
        "Content-Type": "text/html; charset=UTF-8",
      });
      res.end("<h1>About<h1>");
    console.log(`Запрос About обработан ${++countAbout} раз`);
  } else {
    res.writeHead(200, {
        "Content-Type": "text/html; charset=UTF-8",
      });
      res.end("<h1>Страница не найдена!<h1>");
  }
});

const port = 3000;

// Сервер слушает на порту 3000
//127.0.0.1:3000
//localhost:3000
server.listen(port, () => {
  console.log(`The server has been launched on the port: ${port}`);
});