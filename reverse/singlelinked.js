class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }

  log() {
    let res = ''
    let cur = this
    while (cur) {
      res += `${cur.val} `
      cur = cur.next
    }

    console.log(res)
  }
}

// O(n), in-place
// O(1) space
const reverse = (head) => {
  let prev = null
  let current = head

  while (current) {
    const next = current.next
    current.next = prev

    prev = current
    current = next
  }

  return prev
}

// O(n), in-place
// O(n) space cuz call stack
const reverseRec = (head) => {
  if (!head || !head.next) {
    return head
  }

  const tail = reverseRec(head.next)
  head.next.next = head
  head.next = null

  return tail
}

const list = new Node(1)
list.next = new Node(2)
list.next.next = new Node(3)
list.next.next.next = new Node(4)
list.next.next.next.next = new Node(5)
list.next.next.next.next.next = new Node(6)

list.log()
const rev = reverseRec(list)
rev.log()

const revrev = reverse(rev)
revrev.log()
