const os=require('os')
console.log(os.platform

)
const fs=require('fs');
fs.readFile('./text.js',(err,data)=>{
    if(err)

        {
            console.log(err);
        }
        else{
            console.log(data.toString())
        }
})
const write="hello created by second";
fs.writeFile("./write",write,(err)=>{
    if(err){
        console.log(err);
    }
})
fs.mkdir("./assests",()=>{})
