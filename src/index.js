const fs = require("fs")
const http = require("http")

const httpServer = http.createServer((req, res) => {
  if(req.url === "/") {
    res.writeHead(200, "success", { "Content-Type":"text/html" })
    fs.readFile("./src/public/index.html", (error, data) => {
      res.end(data)
    })
  } else {
    res.writeHead(404, "not found", { "Content-Type": "text/html" })
    fs.readFile("./src/public/notFound.html", (error, data) => {
      res.end(data)
    })
  }
})

httpServer.listen(8080, () => {
  console.log("Server listening on port 8080")
})
