// const fs = require("fs");
// const notespath = path.resolve("notes.txt");
// const outputpath = path.resolve("output.txt");
// let reader = fs.createReadStream(notespath);
// let writer = fs.createWriteStream(outputpath);
//        reader.pipe(writer);
//        writer.on("finish",()=>{
//         console.log("finish");
//        });


const path = require("path");
const fs=require("fs");

const notesPath=path.resolve('notes.txt')
const outputPath=path.resolve('output.txt')
let reader=fs.createReadStream(notesPath)
let writer=fs.createWriteStream(outputPath)
reader.pipe(writer)
writer.on('finish',()=>{
    console.log("Finish")
})