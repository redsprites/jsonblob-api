const fs=require('fs');
const url=require('url');

 
function PUT(req, res) {
    // code for handling GET requests
    let url_components= url.parse(req.url,true);
    // const id = query.id
    let id = url_components.pathname.split('/')[1];
        if(!id){
          res.statusCode = 400;
          res.end("missing id parameter");
          return;
        }
        //check if file exists 
        const file_path = `./data/${id}.json`;

        if(!fs.existsSync(file_path)){
          res.statusCode = 404
          res.end("File not found")
          return;
        }

        // Read the content of the file (fs.readFileSync)

        let body = "";
        req.on("data", (chunk) => {
          body += chunk;
        });
        req.on("end", () => {
            let data;
            try {
              data = JSON.parse(body);
            } catch (err) {
              res.statusCode = 400; // Bad Request
              res.end("Invalid JSON format");
              return;
            }
            data.id = id;
           
          // Write the updated JSON object to the file
          fs.writeFileSync(file_path, JSON.stringify(data, null, 2));
      
          // Send a response with the ID and file path
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 200;
          res.end(JSON.stringify({
            id: id,
            file_path: file_path
          }));
        });
    }
    
    module.exports = PUT;