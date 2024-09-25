const fs = require('fs')
const http = require("http")
var a = "Abhi" ; var b = "Priya";


// Async operations 
fs.readFile('./file.text', 'utf-8', (err, data)=>{
    console.log('the file data :-', data)
})

http.get('http://reqres.in/api/users?page=2', (res)=>{
    console.log("fetch data succesfully")
})

setTimeout(()=>{
    console.log("setTimeout called")
}, 1000)

function add(x, y){
    return x+y
}

const c = add(a, b)
console.log("A and b is :", c)