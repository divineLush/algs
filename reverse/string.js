const reverseFor = (str) => {
  let res = ''

  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i]
  }

  return res
}

console.log(reverseFor('12345'))

const reverseRec = (str) => {
  if (str.length <= 1) {
    return str
  }

  return str.slice(-1) + reverseRec(str.slice(0, str.length - 1))
}

console.log(reverseRec('12345'))
