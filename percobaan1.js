const http = require('http') //memanggil modul http , fitur bawaan node js

http.createServer(function (request, response){
    if(request.url == '/'){
        response.writeHead(200, {
            "Content-Type": "text/plain"
        })
        response.write("Welcom To Server ")
        response.end()
    
    }else if(request.url == '/kontak'){
        response.writeHead(200, {
            "Content-Type": "text/plain"
        })
        response.write("Kontak")
        response.end()
    }else if(request.url == '/about'){
        response.writeHead(200, {
            "Content-type": "text/plain"})
            response.write("About ")
            response.end();

    }
    else{
        response.writeHead(200, {
            "Content-Type": "text/plain"
        })
        response.write("Page not found")
        response.end()
    }
}).listen(3000)

console.log('Server On , open connection http://localhost:3000');

