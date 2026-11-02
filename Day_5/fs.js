const fs = require('fs');
const path = require('path');
const notespath = path.resolve("notes.txt");

// fs.readFile(notespath,"Utf8",(err,data)=>{
//     if(err)console.log(err);
//     console.log(data);
// });

// fs.readFileSync(notespath,"Utf8");
//  console.log("this will run");

//  fs.writeFile(notespath,"Himanshu and saad ",(err)=>{
//      if(err)console.log(err);
     
//  });

//  fs.writeFileSync(notespath,"himanshuSaad");
//  console.log

// fs.appendFile(notespath,"Himanshu and saad ",(err)=>{
//      if(err)console.log(err);
// });

// fs.appendFileSync(notespath,'This is syncwrite');

//  fs.unlink(notespath,(err)=>{
//       if(err)console.log(err);
//  });

 fs.unlinkSync(notespath);