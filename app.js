// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "This is a Confession Portal where you can write confessions which are completely anonymous that exist till midnight.";
const aboutContent = "This Confession Page is made by Yashraj Singh Chouhan who is extremely bored right now.";
// const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var posts = [];

app.get("/",function (req, res) {
  res.render('home', {
    var0 : homeStartingContent,
    posts : posts
  });

})
app.get("/contact",function (req, res) {
  res.render('contact', { contactContent : contactContent  });
})
app.get("/about",function (req, res) {
  res.render('about', { aboutContent : aboutContent  });
})
app.get("/compose",function (req, res) {
  res.render('compose');
})
app.post('/compose', function (req, res){
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
  posts.push(post);
  res.redirect('/')
})












app.listen(3000, function() {
  console.log("Server started on port 3000");
});
