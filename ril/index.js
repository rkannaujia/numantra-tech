const express = require('express');

const app = express();


app.use("/api", Routes); 

const PORT=8000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT http://localhost:${PORT}/`);
  //call the method connect
  connect();
})