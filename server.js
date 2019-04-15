const http = require('http');

const server = http.createServer((req, res) => {
  const method = req.method,
        url = req.url;
  if(method == 'GET') {
    if(url == '/'){
      console.log('/');
    }else if(url == '/json'){
      console.log('/json');
    }
    // switch(url) {
    //   case "/json":
    //     console.log("route = '/json'");
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain');
    //     res.end('Hello World!\n');
    //     break;
    //   case "/json/test":
    //   console.log("route = '/json/test'");
    //   res.statusCode = 200;
    //   res.setHeader('Content-Type', 'text/plain');
    //   res.end('Hello World!\n');
    //   break;
    //   case "/xml":
    //     console.log("route = '/xml'");
    //     break;
    //   default:
    //     console.log("route = '/'");
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain');
    //     res.end('Hello World!\n');
    // }
    // elseif(method == POST) {
    //   switch(url) {
    //     default:
    //     console.log("POST route = '/'");
    //   }
    // }
  }
});

server.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
