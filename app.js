var express=require("express");
var app=express();

app.get('/', (req,res)=>{res.sendFile(__dirname+"/html/index.html")});

app.get('/cadastro', (req,res)=>{res.sendFile(__dirname+"/cadastro/index.html")});

app.get('/agendamento', (req,res)=>{res.sendFile(__dirname+"/agendamento/index.html")});
 
app.listen(3000,()=>{console.log("servidor ligado")});