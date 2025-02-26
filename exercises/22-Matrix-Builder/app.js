// Your code here
function matrixBuilder(number){
    let newArray=[]

    for (let i = number; i > 0; i--){
            let row = [];      

            for(let k = number; k >0;k--){
                let randomvalue = Math.floor(Math.random()+.5);
                row.push(randomvalue)
            }
            newArray.push(row)
        }
        return newArray
}


// Do not change anything from this line down
console.log(matrixBuilder(5))

