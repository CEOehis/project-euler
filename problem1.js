function sumMultiplesOfNum (num) {
  var result = []
  for (let i = 2; i < num; i++) {
    if ((i % 3 == 0) || (i % 5 == 0)) {
      result.push(i)
    }
  }
  return result.reduce(function (sum, value) {
    return sum + value
  })
}
