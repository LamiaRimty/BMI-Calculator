//jshint esversion:6
const express =require("express");
const bodyParser=require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));


app.get("/",function(req,res){
    res.sendFile( __dirname + "/bmiCalculator.html");
    
});

app.get("/styles",function(req,res){
    res.sendFile( __dirname + "/styles.css");
    
});


app.post("/",function(req,res){
    var h = parseFloat(req.body.height);
    var w = parseFloat(req.body.weight);
    var bmi =Math.round(w/(h*h));
    
    res.send("You BMI is "+ bmi);
     
   });
   

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});