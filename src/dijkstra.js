const hasUnvisited = (visited) => {
    return visited.some(v => !v)
}

const getLowestUnvisited = (visited, distance) => {
    let result = -1
    let resultDistance = Infinity

    console.log('visited', visited)
    console.log('distance', distance)

    for(let i = 0; i < visited.length; i++) {
        if(visited[i]) {
            continue
        }
        console.log('i', i) 
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
        console.log('current', current)
        console.log('path[current]', path[current])
        current = path[current]
        result.push(current)
    }

    return result.reverse()
}


export default function dijkstra(graph, start, end) {
   const distance = new Array(graph.length).fill(Infinity)
   const visited = new Array(graph.length).fill(false)
   const path = new Array(graph.length).fill(null)
   console.log('graph', graph)
   let current = start
   distance[start] = 0
    path[start] = start
   while(hasUnvisited(visited)) {
       console.log('current', current)
        for(let i = 0; i < graph[current].length; i++) {
            const weight = graph[current][i]
            if(weight === null) {
                continue
            }
            const currentWeight = distance[current] + weight

            console.log('currentWeight', currentWeight)
            console.log('distance[i]', distance[i])
            if(currentWeight <= distance[i] && weight !== null) {
                console.log('updating')
                distance[i] = currentWeight
                path[i] = current
            }
        }
        visited[current] = true
       console.log('path', path)
        current = getLowestUnvisited(visited, distance)
    }
    
    console.log('path', path)
    console.log('distance', distance)
//    return path
    return getResult(path, start, end)
}
