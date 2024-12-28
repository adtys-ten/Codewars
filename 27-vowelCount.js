function getCount(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
      if(str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'e' || str[i] == 'o') {
        count++
      }
    }
    return count
  }

  //or

  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }