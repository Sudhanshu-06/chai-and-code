// Primitive and non-primitive

// primitive
// --undefined is a default value
var myName;
console.log(myName);
function test(n){
    console.log("Testing",n);
}
test()
// --null is a explicit value

var myAge = null;
console.log(myAge);

function test1(n=null){
    console.log("Testing",n);
}
test1();

--Number
--BigInt
--Symbol
--String
--Boolean

// Non-primitive

--Object
const obj={};
obj.myName= "Sausj"
console.log(obj.myName);