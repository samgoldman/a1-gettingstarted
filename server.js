const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/style.css':
      response.setHeader("Content-Type", 'text/css')
      sendFile( response, 'style.css' )
      break
    case '/assets/Rocket_with_Smoke_Colored.svg':
      response.setHeader("Content-Type", 'image/svg+xml')
      sendFile( response, 'assets/Rocket_with_Smoke_Colored.svg' )
      break
    case '/assets/index.js':
      response.setHeader("Content-Type", 'application/javascript')
      sendFile( response, 'assets/index.js' )
      break      
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     let file = content
     response.end( content, 'utf-8' )
   })
}
