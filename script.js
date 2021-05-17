const server = require("express");
const bodyParser = require("body-parser");

const app = server();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    // res.send("Thanks for caluculating");
    // console.log(req.body);
    var weight = Number(req.body.input1); // weight
    var height = Number(req.body.input2); // height

    height = height/100;
    var heightSQ = height*height;

    var result = weight/heightSQ;
    result = result.toFixed(2);
    var range = "";
    if(range > 30.0) range = "obese.";
    else if(result >= 25.0){
        range = "overweight.";
    }else if(result<18.5){
        range = "severely underweight.";
    }else range = "normal."

    res.send("Your Body Mass Index is " + result + ". This is considered as " + range);

});


app.get("/about", function(req, res){
    res.send("<h1>Jakaria Hussain</h1> <p>This is the about page.</p>");
});

app.get("/contact", function(req, res){
    res.send("<h1>Hello Hussain</h1> <p>This is the contact page.</p>");
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});

