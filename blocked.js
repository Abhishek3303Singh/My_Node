const crypto = require("crypto")


const a = "Priya"; const b = "Abhi"

// blocked main thread through synchronous
// Synchronous function It block the main Thread --> never used this 
crypto.pbkdf2Sync("password", "salt", 18000, 50, "sha512")
console.log("first password generated")

crypto.pbkdf2("password", "salt", 180000, 50, "sha512", (err, key)=>{
    console.log("2nd password is ")
})

function add(x, y){
    return x+y
}
const c = add(a, b)
console.log('a and b is ' , c)