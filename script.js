function numberOfPrimes(N) {
  // Your code here
  var cnt = 0
  let isPrime = true
  for (let i = 2; i <= N; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) {
      cnt++
    }
  }
  console.log(cnt)
}
numberOfPrimes(5);