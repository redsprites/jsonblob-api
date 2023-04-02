const http=require('http');
const server=http.createServer().listen(8080);
const GET =require('./lib/get.js');
const POST=require('./lib/post.js');
const PUT=require('./lib/put.js');
const DELETE=require('./lib/delete.js');

server.on('request',async(req,res)=>{
	console.log(req.method)
	switch (req.method) {
		case "POST":
		  POST(req, res);
		  break;
		case "PUT":
		  PUT(req, res);
		  break;
		case "GET":
		  GET(req, res);
		  break;
		case "DELETE":
		  DELETE(req, res);
		  break;
		default:
		  res.statusCode = 405;
		  res.end("Method Not Allowed");
	  }	  	  	  
});


