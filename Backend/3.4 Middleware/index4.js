import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url"; 
import bodyParser from "body-parser";

const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = "";

function bandNameGen(req, res, next){
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bandNameGen);

app.get('/', (req, res) =>{
  res.sendFile(_dirname + "/public/index.html");
});

app.post('/submit', (req, res)=>{
  res.send(`<h1>Your Band Name:</h1>
  <h2>${bandName}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
