const data = require("./data");
const fs = require("fs");
const { notes } = data;

function create(text){
  notes[`${data.nextId}`] = text;
  data.nextId +=1;
  writeToData();
}

function read(){
  for(let id in notes){
    let text = notes[id]
    console.log(`${id}: ${text}`);
  }
}

function update(id, updatedText){
  notes[`${id}`] = updatedText;
  writeToData();
}

function deleteNote(id){
  delete notes[`${id}`];
  writeToData();
}

function writeToData(){
  const dataString = JSON.stringify(data, null, 2);
  fs.writeFile("./data.json", dataString, err => {
    if(err) throw err;
  });
}

module.exports = {create, read, update, deleteNote};
