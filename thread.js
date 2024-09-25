const fs = require('fs')
const crypto = require('crypto')

// By default the size of thread pool in lib uv is 4 so it can execute 4 async function but we can 
// increase this as per our requirment process.env.UV_THREADPOOL_SIZE= 5

// {
//     ...  
//     "main": "app.js",
//     "scripts": {
//        "start": "set UV_THREADPOOL_SIZE=2 & node app.js"
//     },
//     ...
process.env.UV_THREADPOOL_SIZE=10

crypto.pbkdf2("password", 'salt', 500000, 50, 'sha512', (err, key)=>{
    console.log("1st crypto is done!!")
})

crypto.pbkdf2("password", 'salt', 500000, 50, 'sha512', (err, key)=>{
    console.log("2st crypto is done!!")
})
crypto.pbkdf2("password", 'salt', 500000, 50, 'sha512', (err, key)=>{
    console.log("3st crypto is done!!")
})
crypto.pbkdf2("password", 'salt', 500000, 50, 'sha512', (err, key)=>{
    console.log("4st crypto is done!!")
})
crypto.pbkdf2("password", 'salt', 500000, 50, 'sha512', (err, key)=>{
    console.log("5st crypto is done!!")
})