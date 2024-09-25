const http = require("http")

const server = http.createServer((req, res)=>{
    
    res.end("<h1>Hello Priya</h1>")
})

server.listen('0118')