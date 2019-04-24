var express = require('express');
var app = express();
var localhost = '127.0.0.1';
app.use(express.static('public'));
app.use(express.static('walkCYCLE'));
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    var pages = req.params.pages;
    res.render('home',{pages:pages});
})


app.use(express.static('images'));
app.get('/gaming',function(req,res){
    res.render('../gaming/index.ejs');
})

app.get('/cartoons',function(req,res){
    res.render('../cartoons/index.ejs');
})

app.get('/contact',function(req,res){
    res.render('contact');
})
app.get('/testing',function(req,res){
    res.render('testing.ejs');
    console.log('testing page visited');
});
app.get('/testing2',function(req,res){
    res.render("testing2.ejs");
});
app.get("/cartoon9",function(req,res){
    res.render('ex3c.ejs');
})
app.listen(3000,localhost,function(req,res){
    console.log('Server is runnimg!!!');
});

