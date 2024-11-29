// const fs = require("fs")
const http = require("http")

const httpServer = http.createServer((req, res) => {
  console.log(req.url)

  res.writeHead(200, "success")
  res.write("Response from server")
  res.end()
})

httpServer.listen(8080, () => {
  console.log("Server listening on port 8080")
})
