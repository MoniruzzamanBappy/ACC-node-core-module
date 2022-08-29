// const  other = require('./other')

// const res = other.add(112,123)
// const res1 = other.sub(112,123)

// console.log(other.name, res, res1)
// console.log(other.name, res, res1)

const http = require("http");
const url = require("url");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // const address_url = 'http://localhost:5000/home?name=bappy&country=bangladesh';
  // const parsed_url = url.parse(address_url, true);
  // console.log(parsed_url);
  // console.log(parsed_url.query.name);
  if (req.url == "/") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.write(`<P>This is home</p>`);
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.write(`<P>This is contact</p>`);
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.write(`<P>This is about</p>`);
    res.end();
  } else if (req.url == "/home") {
    res.writeHead(200, { "content-Type": "application/json" });
    res.write(JSON.stringify({ abc: "data" }));
    res.end();
  } else if (req.url == "/file") {
    fs.readFile("data.txt", (err, data) => {
      if (err) {
        res.write("Failed to read data");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url == "/filesync") {
    const data = fs.readFileSync("data.txt");

    res.write(data);
    res.end();
  } else if (req.url == "/filewrite") {
    fs.writeFile("data.txt", "hello dear friend ! how r u?", (err) => {
      if (err) {
        res.write("Failed to read data");
        res.end();
      } else {
        res.write(" data write successfylly");
        res.end();
      }
    });
  }
});
const PORT = 5000;
server.listen(PORT);
console.log(`server is running ${PORT}`);
