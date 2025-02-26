let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

// Your code here

let resultingNames = allNames.filter(function(str){
    return (str[0] == "R");
});

console.log(resultingNames);
