// Node always create http type server .
//if Js type used is common then we use require , if its is module js then we use 
//import in the line given below 

// const http=require("http");
// const myserver=http.createServer((req,res)=>{

// //route creation

//    if(req.url=="/"){
//     res.write("<h1>Abes ENgineering College</h1>")
//    }
//    else if (req.url=="/contact"){
//     res.write("<h1>This is COntact Page</h1>")
//    }
//    else if(req.url=="/about"){
   
//      res.end(<img src="/college.jpg"></img>);
//    }
//    else{
//     res.end("Error Page Not Found")
//    }
// })
// myserver.listen(8000,()=>{
// console.log("Server is running ");
// })

const fs = require('fs');

fs.writeFile('new.txt', 'Its a new file ', (err) => {
    if (err) throw err;
    console.log('File created successfully');
});
fs.readFile('./new.txt','utf-8',(err,data)=>{
if(err){
    console.log(err);
    return;
} console.log(data );
})
fs.appendFile('newfile','Data added ',(err)=>{
    if(err){
        console.log(err)
    }console.log("File Updated .....")
})