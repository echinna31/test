const express = require("express");

let app = express();
const port = process.env.PORT || 3030;
app.use(express.static(__dirname));
app.listen(port, function(){
    console.log("express server is up on port"+port);
});



