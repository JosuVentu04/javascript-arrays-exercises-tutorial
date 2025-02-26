let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let Types = [] 

for (let i = 0; i <= mix.length - 1; i++){
    let ItemsType = typeof mix[i] 
    Types.push(ItemsType)
}
console.log(Types)