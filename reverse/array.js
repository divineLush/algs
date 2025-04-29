const reverseStack = (arr) => {
  const res = []

  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i])
  }

  return res
}

console.log(reverseStack([1, 2, 3, 4, 5]))

const reverseInPlace = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]
  }

  return arr
}

console.log(reverseInPlace([1, 2, 3, 4, 5]))

const reverseInPlace2 = (arr) => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }

  return arr
}

console.log(reverseInPlace2([1, 2, 3, 4, 5]))

const reverseRec = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) {
    return arr
  }

  [arr[left], arr[right]] = [arr[right], arr[left]]

  return reverseRec(arr, left + 1, right - 1)
}

console.log(reverseRec([1, 2, 3, 4, 5]))

const reverseRec2 = (arr) => {
  if (arr.length === 1) {
    return arr
  }

  return [...arr.slice(-1), ...reverseRec(arr.slice(0, arr.length - 1))]
}

console.log(reverseRec2([1, 2, 3, 4, 5]))
