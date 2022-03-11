import http from "http";

let num = 0;

const server = http.createServer((req, res) => {
    console.log("request received. url:", req.url);
    res.writeHead(200, { "Content-Type": "text/plain" });
    

  function setNum(plusNum) {
    num += plusNum;
  }

  if (req.url === "/now") {
    const date = new Date();
    res.write(date.toDateString());
    res.end();
  

} else if (req.url === "/count") {
    setNum(1);
    res.write(num.toString());
    res.end();
  

} else {
    res.write("Hello World");
    res.end();
  }
});

const port = 4000;
server.listen(port, () => {
  console.log(`Server was started. Listening to http://localhost:${port}`);
});
