var http=require("http");
http.createserver(function(request,response){
    response.writeHead(200,{'content-type':'text/plain'});
    response.write('hello world')
    response.end();
}).listen(8081);
console.log("serverrunning at http://127.0.01:8081/");