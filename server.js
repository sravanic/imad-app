var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool=require('pg').Pool

var config=
{
    user:'sravanichavatapalli0721',
    database:'sravanichavatapalli0721',
    host:'dba.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
}

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one' :
{
   title:'article one sravani chavatapalli',
   heading:' You have under the article-one page',
   content:`
      <div>
        <h3> this is first article this is first article this is first article this is first article this is first article this is first article this is first article this is first article this is first article this is first articlethis is first article</h3>
    </div>
    <div>
         <h3> this is first article this is first article this is first article this is first article this is first article this is first article this is first article this is first article this is first article this is first articlethis is first article</h3>
    </div>
    <div>
         <h3> this is first article this is first article this is first article this is first article this is first article this is first article this is first article this is first article this is first article this is first articlethis is first article</h3>
    </div>
    
    <div>
     <h6> devloped by sravani.</h6>
     </div>`
},
'article-two':
{
 title:'article two sravani chavatapalli',
   heading:' You have under the article-two page',
   content:`<div>
        <h3> this is second article this is second article this is second article this is second article this is second article this is second article this is second article this is second article this is first article this is second article this is second article</h3>
    </div>
    <div>
         <h3> this is second article this is second article this is second article this is second article this is second article this is second article this is second article this is second article this is first article this is second article this is second article</h3>
    </div>
    <div>
         <h3> this is second article this is second article this is second article this is second article this is second article this is second article this is second article this is second article this is first article this is second article this is second article</h3>
    </div>
    
    <div>
     <h6> devloped by sravani.</h6>
     </div>`   
},
 'article-Three':
{
    title:'article three sravani chavatapalli',
   heading:' You have under the article-three page',
   content:`<div>
        <h3> this is three article this is three article this is three article this is three article this is three article this is three article this is three article this is three article this is three article this is three article this is three article</h3>
    </div>
    <div>
         <h3> this is three article this is three article this is three article this is three article this is three article this is three article this is three article this is three article this is three article this is three article this is three article</h3>
    </div>
    <div>
         <h3> this is three article this is three article this is three article this is three article this is three article this is three article this is three article this is three article this is three article this is three article this is three article</h3>
    </div>
    
    <div>
     <h6> devloped by sravani.</h6>
     </div>`
    
}
};

function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
  var htmlTemplate=`<html>
<head>
<title>
   ${title}
</title>
<meta name="viewport" content="width-device-width, intial-scale-1"/>
 <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class="container">
    <div>
        <a href="/">Home</a>
    </div>
    <div>
        <h1>${heading}</h1>
    </div>
    <div>
        ${content}
    </div>
    <div>
     <h6> devloped by sravani.</h6>
     </div>
     </div>
</body>
</html>`; 

return htmlTemplate;
}


var pool=new Pool(config);

app.get('/test-db', function (req, res)
{
  pool.query('SELECT * FROM SRAVANI_TEST',function(err,result)
  {
      if(err){
          res.status(500).send(err.toString());
      }
      else{
          res.send(JSON.stringify(result));
      }
      
  });  
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName
  res.send(createTemplate(articles[articleName]));
});

var counter=0;
app.get('/counter', function (req, res) {
     counter=counter+1
  res.send(counter.toString());
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


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
