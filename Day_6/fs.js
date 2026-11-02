const fs = require('fs');
const path = require('path');
const notespath = path.resolve('notes.txt');

fs.readFile=(notespath,"utf8",(err,data)=>{
    if(err)console.log(err);
    console.log(data);

});

 const noteData = fs.readFileSync=(notespath,"hello brother");
    console.log(noteData);