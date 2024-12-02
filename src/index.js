const fs = require("fs")
const http = require("http")

const httpServer = http.createServer((req, res) => {
  const filePath = (req.url === "/" ? "./src/public/index.html" :`./src/public/${req.url}`)
  fs.readFile(filePath, (error, data) => {
    if(error) {
      res.writeHead(404, { "Content-Type": "text/html" })
      fs.readFile("./src/public/notFound.html", (err, data) => {
        res.end(data)
      })
    } else {
      res.writeHead(200, { "Content-Type": "text/html" })
      res.end(data)
    }
  })
})

httpServer.listen(8080, () => {
  console.log("Server listening on port 8080")
})
