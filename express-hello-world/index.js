const express = require("express");
const app = express();

app.use((req, res) => {
  res.send("Hello from res");
});

app.listen(3000, () =>{
  console.log("server is up on 3000");
});
