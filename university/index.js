const http=require('http');
const fs=require('fs');


const port=process.env.port;
const hostName='127.0.0.1';

 const myserver=http.createServer((req , res)=>{
    if(req.url=="/"){
        fs.readFile("home.html","utf-8",(_err, data) => {
                res.writeHead(200, { "Content-type": "text/html" });
                res.write(data);
                res.end();
            });
    }
    else if(req.url=="/contact"){
        fs.readFile("contact.html","utf-8",(_err, data) => {
                res.writeHead(200, { "Content-type": "text/html" });
                res.write(data);
                res.end();
            });
    }
   else if(req.url=="/about"){
        fs.readFile("about.html","utf-8",(_err, data) => {
                res.writeHead(200, { "Content-type": "text/html" });
                res.write(data);
                res.end();
            });
    }
    else {
        fs.readFile("error.html",(_err, data) => {
                res.writeHead(404, { "Content-type": "text/html" });
                res.write(data);
                res.end();
            });
    }
});



myserver.listen(port,hostName,()=>{
   console.log("Server is running");
  

});
















