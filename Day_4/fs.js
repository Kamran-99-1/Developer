
const fs = require('fs');
const path = require('path');
let notespath = path.resolve('notes.txt');
// fs.readFile(notespath,(error,data)=>{
//     if(error){console.log(error);}
//     console.log(data)
// });

// const noteData = fs.readFileSync(notespath,'utf8');
// console.log(noteData);

// fs.writeFile(notespath,'This is asyncwrite',(error)=>{
//     if(error){console.log(error);}
// });
// fs.writeFileSync(notespath,'This is syncwrite');

//  fs.appendFile(notespath,'This is asyncwrite',(error)=>{
//     if(error){console.log(error);}
// });
//  fs.appendFileSync(notespath,'This is syncwrite');

//   fs.unlink(notespath,(error)=>{
//     if(error){console.log(error);}
// });

//   fs.unlinkSync(notespath);

//   fs.rename(notespath,'note.txt',(error)=>{
//   });

    fs.renameSync(notespath,'note.txt');
 