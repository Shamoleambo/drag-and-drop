const httpInstance = require("http")

const httpServer = httpInstance.createServer((req, res) => {
  
})

httpServer.listen(8080, () => {
  console.log("Server listening on port 8080")
})
