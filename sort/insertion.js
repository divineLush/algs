// best case O(n), average/worst case O(n^2)
// stable, in-place
// nice for small arrays or nearly sorted data
const insertion = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i]
    let j = i - 1

    for (; j >= 0; j--) {
      if (arr[j] <= cur) {
        break
      }

      arr[j + 1] = arr[j]
    }

    arr[j + 1] = cur
  }

  return arr
}

console.log(insertion([1, 4, 2, 3, 6, 8, 7, 3, 1]))
