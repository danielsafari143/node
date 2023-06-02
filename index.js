const http = require('http');
require('dotenv').config();
const fs = require('fs');
port = process.env.PORT;

const server = http.createServer((req , res) => {
    if(req.url === '/') {
        fs.readFile('index.html' , (err , data) => {
            res.writeHead(200 , {'content-type' : 'text/html'})
            res.write(data);
            res.end();
        })
    }
    if(req.url === '/about') {
        fs.readFile('about.html' , (err , data) => {
            res.writeHead(200 , {'content-type' : 'text/html'})
            res.write(data);
            res.end();
        })
    }
    if(req.url === '/contact') {
        fs.readFile('contact.html' , (err , data) => {
            res.writeHead(200 , {'content-type' : 'text/html'})
            res.write(data);
            res.end();
        })
    }
    else {
        fs.readFile('404.html' , (err , data) => {
            res.writeHead(200 , {'content-type' : 'text/html'})
            res.write(data);
            res.end();
        })
    }
});


server.listen(port , () => {
    console.log('The server is running on port 3000')
})