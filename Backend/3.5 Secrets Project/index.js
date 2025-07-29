//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const port = 3000;
const app = express();
const _dirname = dirname(fileURLToPath(import.meta.url));
var userIsAuthorised = false;

function passwordCheck(req, res, next){
    if(req.body["password"] == "ILoveProgramming"){
        userIsAuthorised = true;
    }
    else{
        userIsAuthorised = false;
    }
    next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(passwordCheck);

app.get('/', (req, res) => {
    res.sendFile(_dirname + "/public/index.html");
})

app.post('/check', (req,res) => {
    if(userIsAuthorised){
        res.sendFile(_dirname + "/public/secret.html");
    }
    else{
        res.sendFile(_dirname + "/public/index.html")
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})