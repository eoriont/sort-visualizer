function insertionSort(array, iters) {
  let arr = array.slice()
  let k = 0
  for (let i = 0; i < arr.length; i++) {
    let l = i
    if (k > iters) {
      return arr
    }
    for (let j = i-1; j > 0; j--) {
      if (arr[l] < arr[j]) {
        [arr[l], arr[j]] = [arr[j], arr[l]]
        l = j
      } else {
        break
      }
    }
    k++
  }
  return arr
}
