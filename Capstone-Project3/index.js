import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.get("/", (req, res) => {
  res.render("index");
});

let blogPosts = [];
let idCounter = 1; 

app.post("/blogs", (req, res) => {
  const { title, author, content } = req.body;

  blogPosts.push({
    id: idCounter++,
    title,
    author,
    content,
  });

  res.redirect("/blogs");
});


app.get("/blogs", (req, res) => {
  res.render("blogs", { posts: blogPosts });
});

app.get("/blogs/:id/edit", (req, res) => {
  const id = Number(req.params.id);
  const post = blogPosts.find(p => p.id === id);

  if (!post) return res.send("Post not found");

  res.render("edit", { post });
});

app.post("/blogs/:id/edit", (req, res) => {
  const id = Number(req.params.id);
  const post = blogPosts.find(p => p.id === id);

  if (!post) return res.send("Post not found");

  post.title = req.body.title;
  post.author = req.body.author;
  post.content = req.body.content;

  res.redirect("/blogs");
});

app.post("/blogs/:id/delete", (req, res) => {
  const id = Number(req.params.id);
  blogPosts = blogPosts.filter(p => p.id !== id);

  res.redirect("/blogs");
});


app.get("/contact", (req, res) => {
  res.render("contact");
});
