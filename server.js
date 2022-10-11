//jshint esversion:6
const express =require("express");
const bodyParser=require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/",function(req,res){
    res.sendFile( __dirname + "/bmiCalculator.html");
    
});

app.post("/",function(req,res){
    var h = Number(req.body.height);
    var w = Number(req.body.weight);
    var bmi = h/w;
    console.log(bmi);

    console.log(res.body);
       res.send("Thanks for posting");
     
   });
   

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});