const fs = require("fs");
const path = require("path");
const notespath = path.resolve("notes.txt");

const readablestream = fs.createReadStream(notespath,'utf8');

//event_ON
readablestream.on("data",(data)=>{
    console.log(data);
});

//error
 readablestream.on("error",(err)=>{
     if(err)console.log(err);    
 });

 readablestream.on("end",()=>{
    console.log("readstream");
 });
