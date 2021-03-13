const express = require("express")
//const favicon = require("serve-favicon")
const path = require("path")
const app = express();
const port = 3000;
let queue = [];

app.use(express.static("public"))
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

let index = 0;

let key = "key_here"
function verify(req,res){
    if(req.query.key != key){
        console.log(req.query.key, key);
        //res.send("Invalid key.");
        return false;
    }
    return true;
}
app.get("/get_code", (req,res) => {
    if(!verify(req,res)){
        res.send("Invalid key.");
        return;
    }
    res.send(queue[index]);
    index++;
})

app.get("/reset_queue", (req,res) => {
    if(!verify(req,res)){
        res.send("Invalid key.");
        return;
    }
    index = 0;
    queue = [];
    res.send("Queue successfully reset");
})
app.get("/run", (req, res) => {
    if(!verify(req,res)){
        res.send("Invalid key.");
        return;
    }
    queue[index + 1] = req.query.code;
    res.send("Code added to queue.");
})

app.listen(port, () => {
    console.log("Running on port " + port);
})