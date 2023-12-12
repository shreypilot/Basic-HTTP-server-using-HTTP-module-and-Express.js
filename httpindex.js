const http = require('http');

const PORT = 3000;

//Using the createServer function we can actually create basic http server using http module
//THis function returns a server object, and takes a callback as an argument
 const Server = http.createServer(function listener(request,response){
    //this callback is a kind of listener function that is going to collect 
    //every http request that we will make to our server
    /**
     * request -> we will able to details of incoming http request -> object
     * response -> we will be able to configure what response we need to send for an incoming http request -> object
     */
    console.log("Incoming request details",request);
    console.log("Response object details",response)
    console.log(`request recieved`);

    if(request.url =='/home'){
        //if we make request on /home  this if block
        console.log(request.method);
        response.write("first response");
        response.write("second response");
        response.end("completed");
    }

 })
 
 Server.listen(PORT, function exec(){
    //once we succesfully boot up the server on the given port,this callback will be executed
    //executed.
    console.log(`server is Up and running on PORT : ${PORT}`);
 })