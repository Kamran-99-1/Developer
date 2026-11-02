const fs = require("fs");
const path = require("path");
const notespath = path.resolve("notes.txt");
let text = " ";
for(let i=0;i<10000;i++){
    text+="Line"+i;

}
 fs.writeFileSync(notespath,text);
 const outputpath = path.resolve('output.txt');
 let createStream = fs.createWriteStream(outputpath);
 createStream.write("/nFirst + line");
 createStream.end("/nsecond + line");
  

