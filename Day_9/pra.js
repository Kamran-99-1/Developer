// import{createReadStream,createWriteStream} from "fs";
// import path from "path";
const fs = require('fs');
const path = require('path');

const inputStream = path.resolve("i.txt");
const outputStream = path.resolve("o.txt");

const readableStream = fs.createReadStream(inputStream,{encoding:"utf-8",highWaterMark:16});
const writeableStream = fs.createWriteStream(outputStream);
readableStream.pipe(writeableStream);

 readableStream.on("error",(err)=>
     console.error("error",err));
  writeableStream.on("error",(err)=>
     console.error("error",err));
               
