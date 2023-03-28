const http=require('http');
const server=http.createServer().listen(8080);
const process=require('./lib/process.js');

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
	  
	  function POST(req, res) {
		// code for handling POST requests
	  }
	  
	  function PUT(req, res) {
		// code for handling PUT requests
	  }
	  
	  function GET(req, res) {
		// code for handling GET requests
	  }
	  
	  function DELETE(req, res) {
		// code for handling DELETE requests
	  }
	  	  
	  
});


