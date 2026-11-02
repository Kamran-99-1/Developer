function getuser(id,cb){
    if(id<=0){
    cb("Id lower than 0", null);
}else{
    setTimeout(()=>{
        cb(null,{id,name:"spiderman"});
    },5000);
}
}
getuser(1,(err,user)=>{
    if(err){log(err);}
    else{console.log(user);}
});
