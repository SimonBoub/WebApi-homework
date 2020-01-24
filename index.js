const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function (request, response) {
    console.log(request.body.name + ":" + req.body.message);
    response.send()
});

app.listen(8000, function () {
    console.log('Listening on port 63342');
});


function createlistelement(text) {     // Liste
let list=document.createElement("list");
list.textContent=text;
return list;
}
function appendchild(parent,children){   // Liste in ul
    children.forEach(function(child){
        parent.appendChild(child);
    });
}
const Http=new XMLHttpRequest();    // HTML Request
const url='./public/nachrichtenliste.txt';
Http.open("GET",url);
Http.send();

Http.onreadystatechange=function () {
if(this.readyState==4 &&this.status=200){
    let lines=Http.responseText.split(/\r\n|r\n/);

    let parent=document.getElementById("Nachrichtenliste"); // ul list
    let children=[];
    for(line=0;line<lines.length;line++)    //erzeugung text in list
        children[line]=createlistelement(lines[line]);

}
appendchild(parent,children);
};


