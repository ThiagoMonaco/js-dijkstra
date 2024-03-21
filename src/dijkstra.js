const hasUnvisited = (visited) => {
    return visited.some(v => !v)
}

const getLowestUnvisited = (visited, distance) => {
    let result = -1
    let resultDistance = Infinity

    for(let i = 0; i < visited.length; i++) {
        if(visited[i]) {
            continue
        }
        const vDistance = distance[i]

        if(vDistance <= resultDistance || 
            (resultDistance == -1 && vDistance === Infinity)) {
            resultDistance = vDistance
            result = i
        }
    }

    return result
}

const getResult = (path, start, end) => {
    const result = []

    let current = end
    result.push(current)
    while(current !== start) {
        current = path[current]
        result.push(current)
    }

    return result.reverse()
}


export default function dijkstra(graph, start, end) {
   const distance = new Array(graph.length).fill(Infinity)
   const visited = new Array(graph.length).fill(false)
   const path = new Array(graph.length).fill(null)
   let current = start
   distance[start] = 0
    path[start] = start
   while(hasUnvisited(visited)) {
        for(let i = 0; i < graph[current].length; i++) {
            const weight = graph[current][i]
            if(weight === null) {
                continue
            }
            const currentWeight = distance[current] + weight

            if(currentWeight <= distance[i] && weight !== null) {
                distance[i] = currentWeight
                path[i] = current
            }
        }
        visited[current] = true
        current = getLowestUnvisited(visited, distance)
    }
    
    return getResult(path, start, end)
}
