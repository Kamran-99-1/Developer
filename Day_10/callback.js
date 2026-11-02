function greetings(name,cb){
    console.log(`${name}Hello!`);
    cb();
}
greetings("Abhi",()=>{
    console.log(`greetings printed`);
});
