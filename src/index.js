const fs = require("fs")
const http = require("http")

const httpServer = http.createServer((req, res) => {
  const url = req.url

  if(url === "/") {
    fs.readFile("./src/public/index.html", (error, data) => {
      res.writeHead(200, { "Content-Type": "text/html" })
      res.end(data)
    })
  } else if(url === "/styles/index.css") {
    fs.readFile("./src/public/styles/index.css", (error, data) => {
      res.writeHead(200, { "Content-Type" : "text/css" })
      res.end(data)
    })
  } else {
    fs.readFile("./src/public/notFound.html", (error, data)=> {
      res.writeHead(404, { "content-Type": "txt/css" })
      res.end(data)
    })
  }
})

httpServer.listen(8080, () => {
  console.log("Server listening on port 8080")
})
