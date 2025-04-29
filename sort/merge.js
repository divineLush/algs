// O(nlogn) for all cases
// space complexity is O(n)
// stable, not in-place
const merge = (arr) => {
  if (!Array.isArray(arr) || arr.length <= 1) {
    return arr
  }

  const sort = (left, right) => {
    const res = []
    let leftIdx = 0
    let rightIdx = 0

    while (leftIdx < left.length && rightIdx < right.length) {
      const l = left[leftIdx]
      const r = right[rightIdx]

      if (l < r) {
        res.push(l)
        leftIdx++
      } else {
        res.push(r)
        rightIdx++
      }
    }

    return [...res, ...left.slice(leftIdx), ...right.slice(rightIdx)]
  }

  const middle = Math.floor(arr.length / 2)

  return sort(merge(arr.slice(0, middle)), merge(arr.slice(middle)))
}

console.log(merge([1, 4, 2, 3, 6, 8, 7, 3, 1]))
