const graph = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F'],
  'D': [],
  'E': ['F'],
  'F': []
}

// O(|V| + |E|) time
// O(|V|) space
const dfs = (node, visited = new Set()) => {
  if (!node || visited.has(node)) {
    return
  }

  console.log(node)
  visited.add(node)

  for (const neighbor of graph[node]) {
    dfs(neighbor, visited)
  }
}

dfs('A')

const iterativeDfs = (graph, startNode) => {
  const visited = new Set()
  const stack = [startNode]

  while (stack.length) {
    const currentNode = stack.pop()

    if (visited.has(currentNode)) {
      continue
    }

    console.log(currentNode)
    visited.add(currentNode)

    for (const neighbor of graph[currentNode].toReversed()) {
      if (visited.has(neighbor)) {
        continue
      }

      stack.push(neighbor)
    }
  }
}

console.log('================')

iterativeDfs(graph, 'A')
