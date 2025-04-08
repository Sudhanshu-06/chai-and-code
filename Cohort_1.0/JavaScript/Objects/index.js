const person= {
    x:10,
    firstName:"Aman",
    lastName:"Singh",
    hobbies:['coding','Gym'],
    isMarried:false,
    getFullName:function(){
        return "Aman Kumar"
    },
    addrsss:{
        hno:1,
        Street:1,
        CountryCode:'IND',
        state:'Bihar'
    }

}
console.log(person.x);
console.log(person.hobbies);
console.log(person.getFullName());
console.log(person.addrsss.state);

const remote={
    color:'black',
    brand:"LG",
    dimension:{height:1,Width:2},
    turnOff:function(){

    },
    volumeUp: function(){

    } 
}