let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList(array){
    let EvenNumbers=[]
    let OddNumbers=[]
    array.forEach(element => {
        if (element % 2 == 0){
            EvenNumbers.push(element)
        }
        else{
            OddNumbers.push(element)
        }
        
    });
    return OddNumbers.concat(EvenNumbers);
}
console.log (mergeTwoList(listOfNumbers))