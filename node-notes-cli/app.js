const crud = require("./controller");
const crudOption = process.argv[2].toLowerCase();

switch (crudOption){
  case "create":
    const userText = process.argv[3];
    crud.create(userText);
  break;

  case "read":
    crud.read();
  break;

  case "update":
    const updateId = process.argv[3];
    const updateText = process.argv[4];
    crud.update(updateId, updateText);
  break;

  case "delete":
    const deleteId = process.argv[3];
    crud.deleteNote(deleteId);
  break;

  default:
    console.log("Incorrect command");
}
