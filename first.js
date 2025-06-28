// const fs=require('')
const name='rishabh';
const age=19;
const greet=()=>{
    console.log(`hello world,n ${name}`)

    
}
greet();
const work=setInterval(()=>{
    console.log("hello ji kya haal chal")
   
}
,3000);

setTimeout(()=>{ clearInterval(work)},9000)
console.log(__dirname)
// name3;
module.exports={name:name,age:age};