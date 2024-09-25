const a = "Priya"; const b = "Abhi"
setTimeout(()=>{
    console.log("setTimeout called")
}, 0)

function add(x, y){
    return x+y
}

const c = add(a, b)
console.log("A and b is :", c)


// Output would be 
// A and b is : PriyaAbhi
// setTimeout called

// This is because even we give 0ms but when js engine see the SetTImeout it ofload to LibUV and libUV 
// is register the callback and wait until the call stack is empty
// it will only called once call stak of main thread is empty