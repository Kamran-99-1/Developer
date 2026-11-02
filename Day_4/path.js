const path= require("path");
const createdpath = path.join(__dirname,'notes.txt');
console.log(createdpath);

const resolvepath = path.resolve('notes.txt')
console.log(resolvepath);