let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    // Your code here 
    for (let i = 0; i < firstArray.length; i++){ 
    newArray.push(firstArray[i])
    }
    for (let k = 0; k < secondArray.length; k++){
        newArray.push(secondArray[k])
    }
    return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo));
