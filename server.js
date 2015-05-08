
//makes a server couldnt get google working
//First time using node.js :)
var http = require( 'http' );
/* 
    google = require('google');
google.resultsPerPage = 25;
    var nextCounter = 0;
 
var server = google('node.js best practices', function (err, next, links){
	    if (err) console.error(err)
 
			 for (var i = 0; i < links.length; ++i) {
			     console.log(links[i].title + ' - ' + links[i].link) // link.href is an alias for link.link 
			     console.log(links[i].description + "\n")
			 }
 
	    if (nextCounter < 4) {
    nextCounter += 1
    if (next) next()
		  }
    })
*/
var server = http.createServer(function (request, response) {  
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Gabi\'s server');
    });
server.listen( 8080 );
console.log( "Webserver started." );
