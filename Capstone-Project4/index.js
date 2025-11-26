import bodyParser from "body-parser";
import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));



app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`);
})