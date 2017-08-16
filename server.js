var express = require('express');
var morgan = require('morgan');
var path = require('path');

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



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName
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


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
