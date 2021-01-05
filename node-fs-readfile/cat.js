const fs = require("fs");
const array = [];
const args = process.argv.slice(2);
let remains = args.length;
let retText = "";

for(let i = 0; i < args.length; i++){
  const text = args[i];
  fs.readFile(`./${text}`, "utf8", (err, data) => {
    if(err) throw err;
    array[i] = data;
    --remains;
    if(remains <= 0){
      for(item of array){
        retText += `${item}\n`;
      }
      console.log(retText);
    }
  });
}
