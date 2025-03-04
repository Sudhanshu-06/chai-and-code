// Named storage location whose value can be manipulated during the execution of the program

randomguy="Aman";
console.log(window.randomguy);

var random="Suman"  //var related file store in window object
console.log(random);

let animal="lion"
console.log(animal);

// var related variable by default parent scope
// let is created block scope
function Show(){
    if(1){
        var functionScope= "hey";
        let localScope="local"
    }
    console.log(functionScope);
}
Show();