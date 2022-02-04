// const express = require('express');
// const app=express();
// const port=5000;

// app.get('/',(req,res)=>{
//     res.send("app.get working")
// })

// app.listen(port,()=>{
//     console.log("server is working")
// })

//const fs = require('fs')
//fs.writeFileSync("read.txt","Hellooo world");
//fs.appendFileSync("read.txt","Tariq shahzad wowww");
//console.log(fs.readFileSync("read.txt").toString())
//fs.renameSync("read.txt","rw.txt")

//fs.mkdirSync("nodefold")
//fs.writeFileSync("nodefold/hello.txt","woooowww")
//const data= fs.readFileSync("nodefold/hello.txt","utf-8")
//console.log(data)
//fs.unlinkSync("nodefold/hello.txt")
//fs.rmdirSync("nodefold")

// fs.mkdir("nodefold",(err)=>{
//     console.log("Folder created")
//     console.log(err)
// })

// fs.writeFile("nodefold/hello.txt","woooowwww tariqqq",(err)=>{
//     console.log("File created")
//     console.log(err)
// })

// fs.readFile("nodefold/hello.txt","utf-8",(err,data)=>{
//     console.log(data)
//     console.log(err)
// })

//const os=require("os")
//totalmem=os.totalmem()
//console.log(`${totalmem/1024/1024/1024}`)
//console.log(os.hostname())
//console.log(os.type())

// const chalk=require("chalk")
// const validator=require("validator")

//console.log(chalk.red.inverse("wow"))
// const check=validator.isEmail("thapa@gmail.mom")
// console.log(check?chalk.green.inverse(check):chalk.red.inverse(check))

// const http=require("http")

// const server=http.createServer((req,res)=>{
//     if(req.url=="/"){
//         res.end("home page")
//     }
//     else if(req.url=="/about"){
//         res.end("<h1>about page</h1>")
//     }
//     else if(req.url=="/contact"){
//         res.end("contact page")
//     }
//     else{
//         res.writeHead(404,{"Content-type":"text/html"})
//         res.end("error page not found")
//     }
// })

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening.....")
// })

// const eventemitter=require('events');
// const event=new eventemitter();
// event.on("hello",(fn)=>{
//     console.log(`hello ${fn}`)
// })
// event.emit("hello","Ali");

const express = require("express");
const cors = require("cors");
const bd = require("body-parser");
const authmodel = require("./authschema");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

app.use(cors());
app.use(
  bd.urlencoded({
    extended: false,
  })
);
app.use(bd.json());

mongoose.connect(
  "mongodb+srv://tariqshahzad:Shahzad77@cluster0.bc2lo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Database is connected");
});

mongoose.connection.on("error", () => {
  console.log("Database is not connected");
});

app.get("/", (req, res) => {
  res.send("app.get working");
});

app.post("/signup", (req, res) => {
  //res.send("signup api");
  // console.log(req.body.password);
  let usercreate = new authmodel({
    email: req.body.email,
    password: req.body.password,
  });
  usercreate
    .save()
    .then((response) => {
      console.log(response, "response success");
    })
    .catch((err) => {
      console.log(err, "error");
    });
});

app.listen(port, () => {
  console.log("server is working");
});
