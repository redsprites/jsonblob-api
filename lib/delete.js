const fs=require('fs');
const url=require('url');

function DELETE(req, res) {
    // code for handling DELETE requests

  let url_components=url.parse(req.url,true);
	//console.log(url_components);
	console.log(url_components.pathname.split('/'));
  
  let filename = url_components.pathname.split('/')[1];
  let filepath = `data/${filename}.json`;
  console.log(filepath);
fs.unlink(filepath,(err)=> {
  if (err) {
    console.error(err);
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  }
  else {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`File '${filepath}'deleted`);
  }
  });}

  module.exports=DELETE