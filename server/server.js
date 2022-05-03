const exp=require('express');
const app=exp();

app.get("/",(req,res)=>{
  console.log("this is home page ..!");
  res.send("This is home page ...!");
})

const server=require("http").Server(app);
const io=require('socket.io')(server,{cors:{origin:'*',methods:["GET","POST"]}});

io.on('connection',socket=>{
   
   socket.on("updateCode",val=>{
     console.log("UPDATED CODE  ", val);
     socket.broadcast.emit("code",val);
    })
  
  // WHEN DISCONNECT
  socket.on('disconnect',()=>
  {console.log(" User got disconnect !",socket.id);}) 
  
  
  }) 
  






// SERVER
server.listen('2000',()=>{
    console.log("Server is running at 2000 !");
    })
    

// //  this is valid for server only not for socket programming  
// app.listen("3000",()=>{
//    console.log("server is running at port 3000"); 
// })

