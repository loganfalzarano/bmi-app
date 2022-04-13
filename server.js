const path = require("path");
const express = require("express"); //returns a function which we capture in the express variable
const app = express(); //set app equal to express
const port = process.env.PORT || 7000; //

//handles HTTP get request (first arg is a path)
app.get("/", (req, res) => { //req = incoming, res = outgoing
  res.sendFile(path.join(__dirname, "index.html")); //send file transfers a file at the given path sets header file
  //__dirname returns path of JS folder
});

app.listen(port, () => { //binds and listens for connectiosn on the specified port
  console.log(`Express app listening at http://localhost:${port}`);
});
