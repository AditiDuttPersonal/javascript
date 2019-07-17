// const fib = numb => {
//     console.log('numb', numb)
//     if( numb <= 1) return numb
//     return fib(numb-1) + fib(numb-2)
// }
// console.log(fib (8))

// const fibonacci = num => {
//     // if num is either 0 or 1 return num
//     if(num < 2) {
//       return num
//     }
//     // recursion here
//     // console.log(num)
//     return fibonacci(num - 1) + fibonacci(num - 2)
//   }
// fibonacci(6)

var fibonacci = num => {
    console.log(num)
  if (num===1) 
  {
    console.log('here')
    return [0, 1];
  } 
  else 
  {
    console.log('else')
    var series = fibonacci(num - 1);
    console.log(series ,num)
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
};

 console.log(fibonacci(2));