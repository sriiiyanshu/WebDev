import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("<h1>Hello, World</h1>")
})

app.get('/contact', (req, res) => {
  res.send("<h2>Contact Details</h2><p>Phone no:</p><p>Email:</p>");
})

app.get('/about', (req, res) => {
  res.send("<h2>About</h2><p>&copy2025 Sriyanshu Azad</p>")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
})