const express = require('express');

const app = express();
app.set('view engine','ejs');
app.use(express.static('public'));
app.get('/',(req,res)=>{
res.render("index");
})
app.listen(3001,()=>{
    console.log("Server is running on port http://localhost:3001");
});
