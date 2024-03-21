import dijkstra from "./dijkstra.js"
console.log('Hello, world!');


const graph = [
    [null, 1, 3, null],
    [null, null, null, 5],
    [null, null, null, 1],
    [null, null, null, null]
]

const result = dijkstra(graph, 0, 3)
console.log(result) // [0, 3]

const graph2 = [
    [null, 1, 3, null],
    [null, null, null, 5],
    [null, null, null, 1],
    [null, null, null, null]
]

const result2 = dijkstra(graph2, 0, 2)
console.log(result2) // [0, 2]

// graph with 7 vertices
const graph3 = [
    [null, 1, 3, null, null, null, null],
    [null, null, null, 5, null, null, null],
    [null, null, null, 1, null, null, null],
    [null, null, null, null, 2, 1, null],
    [null, null, null, null, null, null, 2],
    [null, null, null, null, null, null, 4],
    [null, null, null, null, null, null, null]
]

const result3 = dijkstra(graph3, 0, 6)
console.log(result3) // [0, 2, 3, 4, 6]


const graph4 = [
    [null, 1, 3, null, null, null, null],
    [null, null, null, 5, null, null, null],
    [null, null, null, 1, null, null, null],
    [null, null, null, null, 2, 1, null],
    [null, null, null, null, null, null, 2],
    [null, null, null, null, null, null, 4],
    [null, null, null, null, null, null, null]
]

const result4 = dijkstra(graph4, 0, 5)
console.log(result4) // [0, 2, 3, 5]

