const fib = numb => {
    let a = 0
    let b = 1
    let fibonacci = []
    fibonacci.push(a)
    fibonacci.push(b)
    
   for(var i = 2; i< numb; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci [i-2]
   } 
   console.log(fibonacci)
}

fib(8)