function repeatStr (n, s) {
    let sum = ""
    for(let i = 0; i < n; i++) {
    sum += s
    }
    return sum
  }

  console.log(repeatStr( 3, 'aku'))