const fs = require('fs');

// Synchronus execution
// fs.writeFileSync('notes.txt',"Sudhanshu"); 

// Asynchronousn execution
// fs.writeFile('test.txt',"Aman Singh", error =>{})

const result = fs.readFileSync('notes.txt','utf-8')
console.log(result);

fs.readFile('test.txt','utf-8',(error,data) =>
console.log(data));

// add data to file
fs.appendFileSync('notes.txt','\n kya hal hain')
