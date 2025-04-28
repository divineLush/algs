// O(n^2)
// stable, in-place
const bubble1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}

console.log(bubble1([1, 3, 4, 2, 7, 9]))

// stable, in-place
// optimized, but still O(n^2)
// faster for nearly sorted or small arrays
const bubble2 = (arr) => {
  let n = arr.length
  let swapped = false

  do {
    swapped = false
    let lastSwapPos = 0

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
        lastSwapPos = i + 1
      }
    }

    n = lastSwapPos

  } while (swapped)

  return arr
}
console.log(bubble2([1, 3, 4, 2, 7, 9]))
