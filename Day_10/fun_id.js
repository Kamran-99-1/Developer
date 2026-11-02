function getuser(id,cb){
    setTimeout(()=>{
    cb({id,name:'superman'})},5000);
};
console.log('start');
getuser (1,((user)=>
{
    console.log(user);
}));
console.log(`end`);