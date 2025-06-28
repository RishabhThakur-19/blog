const http=require('http');
const server=http.createServer((req,res) => {
    console.log('requst made');
    console.log(req.method,req.url);
});
server.listen(3000,'localhost',()=>{
    console.log('LISTENING TO SERVER REQUESTS')
})