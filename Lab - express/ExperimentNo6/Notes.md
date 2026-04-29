**Routing** - routing means what response seen for different url
**Middleware** - middleware is a function that returns before sending response  
            - 1.check data 2. log info 3. authentication
            app.use((req,res,next) =>{
                console.log("request recieved",new Date())
                next()    // next pass control to next step  , without next request will hang
            }