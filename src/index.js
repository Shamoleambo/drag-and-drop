const httpInstance = require("http")

const httpServer = httpInstance.createServer((req, res) => {
  res.write("Reponse from server")
  res.statusCode = 200

  res.end()
})

httpServer.listen(8080, () => {
  console.log("Server listening on port 8080")
})
