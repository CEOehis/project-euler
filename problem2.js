function fibonacci () {
  var prev = 0
  var next = 1
  var interim
  var sequence = []
  while (next < 4000000) {
    sequence.push(next)
    interim = next
    next = next + prev
    prev = interim
  }
  return sumEvenItems(sequence)

  function sumEvenItems (arr) {
    var evenItems = []
    for (var i = 0; i < arr.length; i++) {
      if ((arr[i] % 2) == 0) {
        evenItems.push(arr[i])
      }
    }
    return evenItems.reduce(function (sum, value) {
      return sum + value
    })
  }
}
