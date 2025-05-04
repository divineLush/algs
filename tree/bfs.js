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
const bfs = (graph, startNode) => {
  const visited = new Set()
  const queue = [startNode]

  while (queue.length) {
    const currentNode = queue.shift()

    if (visited.has(currentNode)) {
      continue
    }

    console.log(currentNode)
    visited.add(currentNode)

    for (const neighbor of graph[currentNode]) {
      if (visited.has(neighbor)) {
        continue
      }

      queue.push(neighbor)
    }
  }
}

bfs(graph, 'A')
