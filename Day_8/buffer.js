const fs = require("fs");
const path = require("path");
const notespath = path.resolve("notes.txt");

// fs.readFile(notespath,(err,data)=>{
//     if(err)console.log(err);
//     console.log(data);
// });

// const Himanshu = Buffer.from("Hello")
// console.log(Himanshu);
// console.log(Himanshu.toString());
// console.log(Himanshu.length);
// console.log(Himanshu.length);

 const allocBuffer = Buffer.alloc(1000);
 console.log(allocBuffer);

allocBuffer.write('he');
console.log(allocBuffer);

