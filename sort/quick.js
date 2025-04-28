// not stable, in-place
const quicksort1 = (arr, low = 0, high = arr.length - 1) => {
  if (low >= high) {
    return arr
  }

  const pivot = arr[high]
  let i = low - 1

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
  i++

  quicksort1(arr, low, i - 1)
  quicksort1(arr, i + 1, high)

  return arr
}
console.log(quicksort1([1, 4, 2, 3, 6, 8, 7, 3, 1]))

// stable, not in-place
// random pivot
const quicksort2 = (arr) => {
  if (!Array.isArray(arr) || !arr.length) {
    return arr
  }

  const pivotIdx = Math.floor(Math.random() * arr.length)
  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIdx) {
      continue
    }

    if (arr[i] < arr[pivotIdx]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quicksort2(left), arr[pivotIdx], ...quicksort2(right)]
}

console.log(quicksort2([1, 4, 2, 3, 6, 8, 7, 3, 1]))
