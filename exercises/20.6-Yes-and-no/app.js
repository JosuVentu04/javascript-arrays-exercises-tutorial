let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
function wikiwako(number){
    if (number == 0){
        return "woko"
    }
    else if (number == 1){
        return "wiki"
    }
}

console.log(theBools.map(wikiwako))
