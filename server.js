//jshint esversion:6
const express =require("express");
//const bodyParser=require("body-parser");

const app = express();
//app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    //res.sendFile(__dirname,"/bmiCalculator.html");
    res.send("hello");
});

app.post("/",function(req,res){
    // var height=Number(req.body.height);
    // var weight=Number(req.body.weight);
    // var result=height/weight;
    // console.log(result);
       res.send("Thanks for posting");
     
   });
   

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});