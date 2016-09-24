var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={
    'article-one' : {
     title :'Article One | Sachin R Das',
     heading :'Article 1',
     date : 'sep 20,2016',
     content : 
        `<p>
             This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
        </p>
        <p>
             This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
        </p>
        <p>
             This is my first article.This is my first article.This is my first article.This is my first article.This is my first article .This is my first article.This is my first article.
        </p>`,
     text : 'one',
     btn : 'btnone',
     js :'one.js',
     ul :'ul1'
    },
    'article-two' : {
      title :'Article Two| Sachin R Das',
      heading :'Article 2',
      date : 'sep 20,2016',
      content : 
        `<p>
              This is my second article
         </p>`,
      text : 'two',
      btn : 'btntwo',
      js :'two.js',
      ul :'ul2'
    },
    'article-three': {
      title :'Article Three | Sachin R Das',
      heading :'Article 3',
      date : 'sep 20,2016',
      content : 
         `<p>
              This is my 3rd Article
          </p>`,
      text : 'three',
      btn : 'btnthree',
      js :'three.js',
      ul :'ul3'
    }
}; 

function createTemplate(data){
var title=data.title;
var heading = data.heading;
var date=data.date;
var content=data.content;
var text=data.text;
var btn=data.btn;
var js=data.js;
var ul=data.ul;

var htmlTemplate =
`<html>
   <head>
     <title>
       ${title}
     </title>
    <meta name="viewport" content ="width=device-width,initial-scale=1">
   <link href="/ui/style.css" rel="stylesheet" />
  </head>
<body>
   <div class="container">  
       <div>
           <a href ='/'>Home</a>
       </div>
       <hr/>
       <h3>
           ${heading}
       </h3><hr/>
       <div>
           ${date}
       </div>
       <div>
           ${content}
       </div>
       <hr/>
          <input type="text" id ="${text}" placeholder="name"></input>
          <input type="submit" value = "Submit" id ="${btn}"></input>
          
          <ul id ="${ul}">
          </ul>
    </div>
     <script type="text/javascript" src="/ui/${js}">
        </script>
  </body>
</html>
`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter =0;
app.get('/counter', function(req,res){
    counter = counter+1;
    res.send(counter.toString());
});

var names = [];
app.get("/submit-name",function(req,res){                //method 1 : app.get("/submit-name/:name",function(req,res){
  //get the name from the request                        //              //URL : /submit-name/xxxxxxxx
var name = req.query.name;  //TODO                      //             var name = req.params.name;
    names.push(name);                                    //method 2 : app.get("/submit-name",function(req,res){
     //JSON = Javascript Object Notation                 //              //URL : /submit-name?name=xxxxxx                
     res.send(JSON.stringify(names));                    //             var name = req.query.name; 
});

var names1 = [];
app.get("/one",function(req,res){                //method 1 : app.get("/submit-name/:name",function(req,res){
  //get the name from the request                        //              //URL : /submit-name/xxxxxxxx
var name1 = req.query.name1;  //TODO                      //             var name = req.params.name;
    names1.push(name);                                    //method 2 : app.get("/submit-name",function(req,res){
     //JSON = Javascript Object Notation                 //              //URL : /submit-name?name=xxxxxx                
     res.send(JSON.stringify(names1));                    //             var name = req.query.name; 
});

var names2 = [];
app.get("/two",function(req,res){                //method 1 : app.get("/submit-name/:name",function(req,res){
  //get the name from the request                        //              //URL : /submit-name/xxxxxxxx
var name2 = req.query.name2;  //TODO                      //             var name = req.params.name;
    names2.push(name2);                                    //method 2 : app.get("/submit-name",function(req,res){
     //JSON = Javascript Object Notation                 //              //URL : /submit-name?name=xxxxxx                
     res.send(JSON.stringify(names2));                    //             var name = req.query.name; 
});

var names3 = [];
app.get("/three",function(req,res){                //method 1 : app.get("/submit-name/:name",function(req,res){
  //get the name from the request                        //              //URL : /submit-name/xxxxxxxx
var name3 = req.query.name3;  //TODO                      //             var name = req.params.name;
    names3.push(name3);                                    //method 2 : app.get("/submit-name",function(req,res){
     //JSON = Javascript Object Notation                 //              //URL : /submit-name?name=xxxxxx                
     res.send(JSON.stringify(names3));                    //             var name = req.query.name; 
});

app.get('/:articleName',function(req,res) {
    //articleName = article-one
    //article[articleName] == {}  content onject for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
