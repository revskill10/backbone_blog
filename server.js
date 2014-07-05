var express = require('express');
var path = require('path');
var Bourne = require('bourne');

var app = express();
var posts = [
	{
	"id": 1,
	"pubDate": "2013-10-20T19:42:46.755Z",
	"title": "Lorem Ipsum",
	"content": "<p>Dolor sit amet . . .</p>"
	}
];
var comments = new Bourne("simpleBlogComments.json");


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/posts", function(req, res){
	//posts.find(function(results){
		res.json(posts);
	//});
})
app.post("/posts", function(req, res){
	posts.push(req.body);
	res.json(posts);
});

app.get('/*', function(req, res){
	res.render("index.ejs", { posts: JSON.stringify(posts) });
});



app.listen(3000);