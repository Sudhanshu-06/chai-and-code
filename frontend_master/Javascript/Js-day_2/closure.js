// A function with some preserved values creates a closure.
// A closure is created when a function preeserves variables outside of its scope.



function show(){
    let myName="JS";
    let dept= "web";

    function inner(){
        console.log(myName);
    }
    console.dir(inner);

}
show();