const fs = require("fs")
const http = require("http")

const httpServer = http.createServer((req, res) => {
  if(req.url === "/") {
    fs.readFile("./src/public/index.html", (error, data) => {
      if(error) {
        console.log(error)
        res.writeHead(404, "No page for u")
        res.write(`Sorrey, not sorry: ${error.code}`)
        res.end()
      } else {
        res.writeHead(200, "Here is your page Sir!", { "Content-Type": "text/html" })
        res.end(data, "utf-8")
      }
    })
  }
})

httpServer.listen(8080, () => {
  console.log("Server listening on port 8080")
})
