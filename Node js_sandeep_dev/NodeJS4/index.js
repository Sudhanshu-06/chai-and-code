// step 1: import http module
const http = require('http'); 

const user = [
    {
        id:1,
        name:"Sudhanshu",
        age:24
    },
    {
        id:1,
        name:"Sandeep",
        age:24
    }
]

// step 2: create server
const server = http.createServer((req,res)=>{
    // console.log("requested url from client",req.url);
    if(req.url==='/'){
        res.end("Welcome ON MY HOMEPAGE")
    }
    if(req.url==='/about'){
        res.end("This is about page");
    }
    if(req.url==='/contact'){
        res.end("conatct from my homepage");
    }
    if(req.url==='/user'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(user));
    }

    console.log("server started");
    // res.end("Hello how are you")
})

server.listen(3000, ()=>{
    console.log("server started sucessfully");
})

