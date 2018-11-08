// https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

const fs = require('fs');
const http = require('http')

// Start server
const server = http.createServer((req, res) => {
  const { headers, method, url } = req;
  
  let body = []; 
  req.on('error', (err) => {
    console.error('Request error: ', err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('Body', body);  // print body for debugging
    // at this point, `body` has the entire request body stored in it as a string 
    
    var prefix = '#include <iostream>\n#include <taskflow/taskflow.hpp>\nint main(){\n';
    var code = prefix + body + '\n}';

    // Remove stray characters 
    code = code.replace(/[\302]/g,' ');
    code = code.replace(/[\240]/g,' ');
  
    // Save the content to debug.cpp
    fs.writeFile("./debug.cpp", code, function(err) {
      if(err) {
        return console.log("Output file error: ", err);
      }   
      console.log("The file was saved in debug.cpp");
    }); 
  
    // spawn process to compile/execute debug.cpp & generate image
    var exec = require('child_process').exec;
    var child = exec("g++-mp-8 -std=c++17 -I . ./debug.cpp -o debug -pthread && ./debug > debug.dot && dot -Tpng ./debug.dot -o ./debug.png");
  
    child.stderr.on('data', function(data) {
      // Print error if spawn fails
      console.log("Spawn error = ", data);
    });
  
    child.on('close', function() {
      // Send image back to front end
      res.setHeader("Access-Control-Allow-Origin", "*"); // This line avoids the CROS restriction 
      res.writeHead(200, {'Content-Type': 'image/png' });
      var img = fs.readFileSync('./debug.png');
      res.end(img, 'binary');
    });
  });
  
  // console.log('Method', method);
  // console.log('Url', url);
}).listen(3000);


console.log('Listening on port 3000');
