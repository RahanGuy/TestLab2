/**myFirstHTTPServer.js
 * 
 * This simple OpenShift http server for students to learn from.
 * The code contains comments, questions and answers about each major line of code.
 * Feel free to add your own code. 
 * Pleased comment it and ensure basic questions are answered.
 * 
 * Developers: 
 * 1. Stephen Bennett
 * 
 */
//Lets require/import the HTTP module. 
var http = require('http');
//Why do we this? 
//What does it do?

//Lets define a port we want to listen to
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
//What is a port?
//Why port 80?
//Why do we this? 
//What does it do?

// Use a remote logging console
var consolere = require('console-remote-client').connect('console.re','80','rahanguy_labserver');

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('Yes! It Works!! Path Hit: ' + server_ip_address + ":" + server_port + "/" + request.url);
    console.re.log("My server ip address is: " + server_ip_address);
    console.re.log("HTTP Server listening on: " + server_ip_address + ":" + server_port);
}
//What is a request?
//What is a response?
//What is an object?
//What does the response.end function do?
//What is a function?
//Why do we this? 
//What does it do?

//Create a server
var server = http.createServer(handleRequest);
//What is a server object?
//Why do we this? 
//What does it do?

//Lets start our server
server.listen(server_port, server_ip_address, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.re.log("HTTP Server listening on: " + server_ip_address + ":" + server_port);
});
//What does the listen function do?
//What is console.log?
//Why do we log?
//Why do we this? 
//What does it do?
