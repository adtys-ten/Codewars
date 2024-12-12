function findSmallestInt(arr) {
    let arr2 = arr.sort(function(a,b) {
      return a-b
    })
    return arr2[0]
   }