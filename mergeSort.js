function merge(l1, l2, iters) {
  let result = []
  let [i, j] = [0, 0]
  let k = 0
  while (l1.length > i && l2.length > j) {
    if (k > iters) {
      break
    }
    if (l1[i] < l2[j]) {
      result.push(l1[i])
      i++
    } else {
      result.push(l2[j])
      j++
    }
    k++
  }
  return result.concat(l1.slice(i)).concat(l2.slice(j))
}

function mergeSort(arr, iters) {
  if (iters <= 0) {
    return arr
  }
  if (arr.length in [0, 1]) {
    return arr
  }
  let midpoint = Math.floor(arr.length/2)
  let l1 = arr.slice(0, midpoint);
  let l2 = arr.slice(midpoint);
  return merge(mergeSort(l1, iters-1), mergeSort(l2, iters-2), iters-1)
}
