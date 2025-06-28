const http=require("http");
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log("request made ");
    console.log(req.url);
    console.log(req.method);
    res.setHeader('conetnet-Type','html');

let path='./';
switch(req.url){
    case '/about':
        path+='about.html';
        break;
    case '/home':
        path+='home.html';
        break;
    case '/new':
        res.statusCode=301;
        res.setHeader('Location','/about')  ;
        res.end();
        break;
    default:
        path+='404.html';
        res.statusCode=404;
        break;

}
   fs.readFile(path,(err,data)=>{
    if(err)
        console.log(err);
    else
    { 
        res.write(data);
        console.log(data.toString());
      

    }
    res.end();

   })
    
});


server.listen(3000,"localhost",()=>{
    console.log("listening for requests");
})
